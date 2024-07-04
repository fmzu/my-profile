import { useState } from "react"
import {} from "~/components/ui/popover"
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
  text: string
}
export function MonthSelect(props: Props) {
  const [selected, setSelected] = useState("")

  const handleStringToInt = (value: string) => {
    setSelected(String(value))
  }

  return (
    <Select onValueChange={handleStringToInt}>
      <SelectTrigger>
        <SelectValue placeholder="誕生月" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>{"誕生月"}</SelectLabel>
          <SelectItem value="1">{"1月"}</SelectItem>
          <SelectItem value="2">{"2月"}</SelectItem>
          <SelectItem value="3">{"3月"}</SelectItem>
          <SelectItem value="4">{"4月"}</SelectItem>
          <SelectItem value="5">{"5月"}</SelectItem>
          <SelectItem value="6">{"6月"}</SelectItem>
          <SelectItem value="7">{"7月"}</SelectItem>
          <SelectItem value="8">{"8月"}</SelectItem>
          <SelectItem value="9">{"9月"}</SelectItem>
          <SelectItem value="10">{"10月"}</SelectItem>
          <SelectItem value="11">{"11月"}</SelectItem>
          <SelectItem value="12">{"12月"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
