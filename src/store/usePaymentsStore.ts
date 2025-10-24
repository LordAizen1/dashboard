import { create } from 'zustand';
import { Payment } from '@/app/user-payments/columns';

type State = {
  payments: Payment[];
  loading: boolean;
  error: string | null;
  eventSource: EventSource | null;
};

type Actions = {
  fetchPayments: () => Promise<void>;
  connectToSSE: () => void;
  disconnectFromSSE: () => void;
};

export const usePaymentsStore = create<State & Actions>((set, get) => ({
  payments: [],
  loading: false,
  error: null,
  eventSource: null,

  fetchPayments: async () => {
    set({ loading: true, error: null });
    try {
      // For initial fetch, we still use a regular fetch to get the current state
      // This is useful if the component mounts and SSE connection is not yet established
      const res = await fetch("/api/user-payments");
      if (!res.ok) {
        throw new Error("Failed to fetch payments.");
      }
      const payments = await res.json();
      set({ payments, loading: false });
    } catch (error) {
      set({ loading: false, error: (error as Error).message });
    }
  },

  connectToSSE: () => {
    const eventSource = new EventSource("/api/user-payments");

    eventSource.onopen = () => {
      console.log('SSE connection opened.');
    };

    eventSource.addEventListener('initial', (event) => {
      const initialPayments: Payment[] = JSON.parse(event.data);
      set({ payments: initialPayments, loading: false });
    });

    eventSource.addEventListener('newPayment', (event) => {
      const newPayment: Payment = JSON.parse(event.data);
      set((state) => ({
        payments: [...state.payments, newPayment],
      }));
    });

    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      set({ error: 'SSE connection error.' });
      eventSource.close();
    };

    set({ eventSource });
  },

  disconnectFromSSE: () => {
    const { eventSource } = get();
    if (eventSource) {
      eventSource.close();
      console.log('SSE connection closed.');
      set({ eventSource: null });
    }
  },
}));