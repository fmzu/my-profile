import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "~/components/ui/select"

export function BloodTypeSelect() {
  return (
    <Select>
      <SelectTrigger onChange={() => {}}>
        <SelectValue placeholder="血液型" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white">
          <SelectItem value="A">{"A"}</SelectItem>
          <SelectItem value="B">{"B"}</SelectItem>
          <SelectItem value="O">{"O"}</SelectItem>
          <SelectItem value="AB">{"AB"}</SelectItem>
          <SelectItem value="other">{"その他"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
