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

export function DaySelect(props: Props) {
  const [selected, setSelected] = useState("")

  const handleStringToInt = (value: string) => {
    setSelected(String(value))
  }

  return (
    <Select onValueChange={handleStringToInt}>
      <SelectTrigger>
        <SelectValue placeholder="誕生日" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>{"誕生日"}</SelectLabel>
          <SelectItem value="1">{"1日"}</SelectItem>
          <SelectItem value="2">{"2日"}</SelectItem>
          <SelectItem value="3">{"3日"}</SelectItem>
          <SelectItem value="4">{"4日"}</SelectItem>
          <SelectItem value="5">{"5日"}</SelectItem>
          <SelectItem value="6">{"6日"}</SelectItem>
          <SelectItem value="7">{"7日"}</SelectItem>
          <SelectItem value="8">{"8日"}</SelectItem>
          <SelectItem value="9">{"9日"}</SelectItem>
          <SelectItem value="10">{"10日"}</SelectItem>
          <SelectItem value="11">{"11日"}</SelectItem>
          <SelectItem value="12">{"12日"}</SelectItem>
          <SelectItem value="13">{"13日"}</SelectItem>
          <SelectItem value="14">{"14日"}</SelectItem>
          <SelectItem value="15">{"15日"}</SelectItem>
          <SelectItem value="16">{"16日"}</SelectItem>
          <SelectItem value="17">{"17日"}</SelectItem>
          <SelectItem value="18">{"18日"}</SelectItem>
          <SelectItem value="19">{"19日"}</SelectItem>
          <SelectItem value="20">{"20日"}</SelectItem>
          <SelectItem value="21">{"21日"}</SelectItem>
          <SelectItem value="22">{"22日"}</SelectItem>
          <SelectItem value="23">{"23日"}</SelectItem>
          <SelectItem value="24">{"24日"}</SelectItem>
          <SelectItem value="25">{"25日"}</SelectItem>
          <SelectItem value="26">{"26日"}</SelectItem>
          <SelectItem value="27">{"27日"}</SelectItem>
          <SelectItem value="28">{"28日"}</SelectItem>
          <SelectItem value="29">{"29日"}</SelectItem>
          <SelectItem value="30">{"30日"}</SelectItem>
          <SelectItem value="31">{"31日"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
