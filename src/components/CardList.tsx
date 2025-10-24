import { count } from "console"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const popularContent = [
    {
        id: 1,
        title: "JavaScript Essentials",
        badge: "Coding",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        count: 4300,
    },
    {
        id: 2,
        title: "UI/UX Design Basics",
        badge: "Design",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        count: 2750,
    },
    {
        id: 3,
        title: "Digital Marketing 101",
        badge: "Marketing",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        count: 2500,
    },
    {
        id: 4,
        title: "Image Generation with AI",
        badge: "AI",
        image: "https://images.unsplash.com/photo-1549989317-6f14743af1bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        count: 6900
    }
];

const latestTransactions = [
    {
        id: 1,
        title: "Subscription Renewal",
        badge: "John Doe",
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        count: 1400,
    },
    {
        id: 2,
        title: "Payment for Services",
        badge: "Jane Smith",
        image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        count: 2100,
    },
    {
        id: 3,
        title: "Subscription Upgrade",
        badge: "Michael Johnson",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        count: 6900,
    },
    {
        id: 4,
        title: "Payment for Services",
        badge: "Emily Davis",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        count: 2500,
    },
]

const CardList = ({title}:{title:string}) => {

    const list = title==="Popular Content" ? popularContent : latestTransactions;
 
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map(item=>(
            <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                 <Image src={item.image} alt={item.title} fill className="object-cover"/>
                </div>
                <CardContent className="flex-1 p-0">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">{(item.count ?? 0)/1000}K</CardFooter>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList
