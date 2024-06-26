import { format } from "date-fns"
import { Calendar, Calendar as CalendarIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"
import { useState } from "react"

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          onSelectCapture={(e) => {
            e.stopPropagation()
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
