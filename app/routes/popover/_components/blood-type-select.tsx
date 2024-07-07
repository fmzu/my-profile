import { useState } from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "~/components/ui/select"

type Props = {
  className: string
  inputColor: string
}

export function BloodTypeSelect(props: Props) {
  const [selected, setSelected] = useState("")

  const handleStringToInt = (value: string) => {
    setSelected(String(value))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input
          className={cn(
            "h-6 rounded-md bg-blue-200",
            props.className,
            props.inputColor,
          )}
          value={selected}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{"血液型"}</p>
          <Select onValueChange={handleStringToInt}>
            <SelectTrigger>
              <SelectValue placeholder="血液型" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>{"血液型"}</SelectLabel>
                <SelectItem value="A">{"A"}</SelectItem>
                <SelectItem value="B">{"B"}</SelectItem>
                <SelectItem value="O">{"O"}</SelectItem>
                <SelectItem value="AB">{"AB"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
