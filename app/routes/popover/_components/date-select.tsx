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

export function DateSelect(props: Props) {
  const [selected, setSelected] = useState("")

  const [month, setMonth] = useState("")

  const [day, setDay] = useState("")

  const handleStringToInt = (value: string) => {
    setSelected(String(value))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input
          className={cn("rounded-md bg-blue-200", props.className)}
          value={selected}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{"生年月日"}</p>
          <div className="flex items-center space-x-2">
            <MonthSelect text={month} />
            <p>{"月"}</p>
            <DaySelect text={month} />
            <p>{"日"}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
