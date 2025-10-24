'use client';

import { useEffect } from 'react';
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { usePaymentsStore } from '@/store/usePaymentsStore';

const PaymentsPage = () => {
  const { payments, loading, error, connectToSSE, disconnectFromSSE } = usePaymentsStore();

  useEffect(() => {
    connectToSSE();

    return () => {
      disconnectFromSSE();
    };
  }, [connectToSSE, disconnectFromSSE]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
        <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold">All Payments</h1>
        </div>
        <DataTable columns={columns} data={payments} />
    </div>
  )
}

export default PaymentsPage