import { NextResponse } from 'next/server';

let payments = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    username: "John Doe",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    username: "Jane Doe",
  },
  {
    id: "f8c3b3e8",
    amount: 75,
    status: "success",
    email: "test@test.com",
    username: "Peter Jones",
  },
  {
    id: "a2b1c3d4",
    amount: 200,
    status: "failed",
    email: "user@domain.com",
    username: "Mary Jane",
  },
  {
    id: "e5f6g7h8",
    amount: 150,
    status: "pending",
    email: "another@example.com",
    username: "David Smith",
  },
];

export async function GET() {
  const encoder = new TextEncoder();
  let intervalId: NodeJS.Timeout;

  const readableStream = new ReadableStream({
    start(controller) {
      // Send initial data
      controller.enqueue(encoder.encode(`event: initial\ndata: ${JSON.stringify(payments)}\n\n`));

      // Simulate new payments every 3 seconds
      intervalId = setInterval(() => {
        const newPayment = {
          id: Math.random().toString(36).substring(2, 10),
          amount: Math.floor(Math.random() * 500) + 50,
          status: ["pending", "processing", "success", "failed"][Math.floor(Math.random() * 4)],
          email: `user${Math.floor(Math.random() * 1000)}@example.com`,
          username: `User ${Math.floor(Math.random() * 1000)}`,
        };
        payments.push(newPayment);
        controller.enqueue(encoder.encode(`event: newPayment\ndata: ${JSON.stringify(newPayment)}\n\n`));
      }, 3000);
    },

    cancel() {
      clearInterval(intervalId);
      console.log('Client disconnected');
    },
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}