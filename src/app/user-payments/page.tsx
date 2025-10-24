import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 123,
      status: "pending",
      username: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: "a91bd432",
      amount: 256,
      status: "success",
      username: "Sarah Lee",
      email: "sarah.lee@yahoo.com",
    },
    {
      id: "cc38fa92",
      amount: 89,
      status: "failed",
      username: "Amit Sharma",
      email: "amit.sharma@outlook.com",
    },
    {
      id: "e77dc311",
      amount: 410,
      status: "success",
      username: "Emma Johnson",
      email: "emma.johnson@gmail.com",
    },
    {
      id: "b64fe912",
      amount: 175,
      status: "pending",
      username: "Carlos Rivera",
      email: "carlos.riv@gmail.com",
    },
    {
      id: "f23ae789",
      amount: 342,
      status: "success",
      username: "Mina Patel",
      email: "mina.patel@hotmail.com",
    },
    {
      id: "a12bc233",
      amount: 201,
      status: "failed",
      username: "Liam Wright",
      email: "liam.wright@icloud.com",
    },
    {
      id: "f77dc111",
      amount: 98,
      status: "success",
      username: "Noah Kim",
      email: "noah.kim@gmail.com",
    },
    {
      id: "b90de301",
      amount: 459,
      status: "pending",
      username: "Sophia Rossi",
      email: "sophia.rossi@proton.me",
    },
    {
      id: "c88aa520",
      amount: 512,
      status: "success",
      username: "Ethan Brown",
      email: "ethan.brown@live.com",
    },
    {
      id: "d54ef812",
      amount: 64,
      status: "failed",
      username: "Olivia Nguyen",
      email: "olivia.nguyen@gmail.com",
    },
  ];
};


const PaymentsPage = async () => {

    const data = await getData();
  return (
    <div className="">
        <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold">All Payments</h1>
        </div>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentsPage