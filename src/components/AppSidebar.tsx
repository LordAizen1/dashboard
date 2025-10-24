import {Home, Inbox, Calendar, Search, Settings, User, ChevronUp, User2, ChevronDown, LogOut, Plus, Projector, BadgeDollarSign} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent } from "./ui/collapsible"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"


const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Payments",
        url: "/user-payments",
        icon: BadgeDollarSign,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
]

function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="will-change-transform transform-gpu">
      <SidebarHeader className="py-4 px-2">
        <SidebarMenu>
            <SidebarMenuItem className="mx-auto font-bold">
                <SidebarMenuButton asChild>
                    <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={30} height={30}/>
                    <span>Cool Dashboard</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    <SidebarSeparator className="mx-0"/>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                            {item.title === "Inbox" && (
                                <SidebarMenuBadge className="text-muted-foreground">24</SidebarMenuBadge>
                            )}
                            {item.title==="Calendar" && (
                                <SidebarMenuBadge className="text-muted-foreground">9</SidebarMenuBadge>
                            )}
                            {item.title==="Payments" && (
                                <SidebarMenuBadge className="text-muted-foreground">11</SidebarMenuBadge>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction>
                <Plus /><span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" prefetch={false}>
                                <Projector />
                                See All Projects
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" prefetch={false}>
                                <Plus />
                                Add Project
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        {/* COLLAPSABLE */}
        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                        Collapsable Group
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/" prefetch={false}>
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/" prefetch={false}>
                                        <Plus />
                                        Add Project
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
        {/* NESTED */}
        <SidebarGroup>
            <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" prefetch={false}>
                                <Projector />
                                See All Projects
                            </Link>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/" prefetch={false}>
                                        <Plus />
                                        Add Project
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/" prefetch={false}>
                                        <Plus />
                                        Add Category
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenuSub>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                        <User2 /> John Doe <ChevronDown className="ml-auto transition-transform group-data-[state=open]/onClick:rotate-180"/>
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10} align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
