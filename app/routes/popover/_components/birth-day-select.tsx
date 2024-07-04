import { useState } from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"
import {} from "~/components/ui/select"
import { MonthSelect } from "./month-select"
import { DaySelect } from "./day-select"

type Props = {
  className: string
}

export function BirthDaySelect(props: Props) {
  const [month, setMonth] = useState("")

  const [day, setDay] = useState("")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input
          className={cn("rounded-md bg-blue-200", props.className)}
          value={`${month}${day}`}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{"生年月日"}</p>
          <div className="flex items-center space-x-2">
            <MonthSelect month={month} setMonth={setMonth} />
            <DaySelect day={day} setDay={setDay} />
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
