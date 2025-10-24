'use client'

import { PopoverTrigger } from "@radix-ui/react-popover"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

const TodoList = () => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
  return (
    <div className=''>
        <h1 className="text-lg font-medium mb-6">Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className="w-full">
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar 
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-md border"
                    />
                </PopoverContent>
        </Popover>
        {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
            {/* LIST ITEM */}
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
            <Card className="p-4">
                <div className="flex gap-4 items-center">
                    <Checkbox id="item-1" />
                    <label htmlFor="item1" className="text-sm text-muted-foreground">When your feelings sads. Don't be sads.</label>
                </div>
            </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
