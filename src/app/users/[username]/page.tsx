import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, BadgeCheckIcon, Candy, Citrus, Shield } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLineChart from "@/components/AppLineChart"

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/users">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
            {/* USER BADGES CONTAINER */}
            <div className="bg-primary-foreground p-4 rounded-lg">
                <h1 className="text-xl font-semibold">User Badges</h1>
                <div className="flex gap-4 mt-4">
                    <HoverCard>
                        <HoverCardTrigger>
                            <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-0 border-blue-500/50 p-2"/>
                        </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Verified User</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <Citrus size={36} className="rounded-full bg-orange-500/30 border-0 border-orange-500/50 p-2"/>
                        </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Popular</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <Candy size={36} className="rounded-full bg-purple-500/30 border-0 border-purple-500/50 p-2"/>
                        </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Awarded</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <Shield size={36} className="rounded-full bg-green-500/30 border-0 border-green-500/50 p-2"/>
                        </HoverCardTrigger>
                            <HoverCardContent>
                                <h1 className="font-bold mb-2">Admin</h1>
                                <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                            </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
            {/* INFORMATION CONTAINER */}
            <div className="bg-primary-foreground p-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">User Information</h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit User</Button>
                            </SheetTrigger>
                            <EditUser />
                        </Sheet>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="flex flex-col gap-2 mb-8">
                            <p className="text-sm text-muted-foreground">Profile Completion</p>
                            <Progress value={66}/>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Username:</span>
                            <span>john.doe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Email:</span>
                            <span>john.doe@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Phone:</span>
                            <span>+91 9999900000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Location:</span>
                            <span>New Delhi, IN</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Role:</span>
                            <Badge>Admin</Badge>
                        </div>
                    </div>
                <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
            </div>
            {/* CARD LISTS */}
            <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title={"Recent Transactions"} />
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
            {/* USER CARD CONTAINER */}
            <div className="bg-primary-foreground p-4 rounded-lg">
                <div className="flex items-center gap-2 space-y-2">
                    <Avatar className="size-12">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                        <AvatarFallback>
                            JD
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="text-xl font-semibold">John Doe</h1>
                </div>
                <p className="text-sm text-muted-foreground">
                   A full-stack developer who loves solving real-world problems through elegant code. John spends most of his time experimenting with new frameworks, optimizing performance, and occasionally breaking things just to fix them better.</p>
            </div>
            {/* CHART CONTAINER */}
            <div className="bg-primary-foreground p-4 rounded-lg">
                <h1 className="text-xl font-semibold">User Activity</h1>
                <AppLineChart /></div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
