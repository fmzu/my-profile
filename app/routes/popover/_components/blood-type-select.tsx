import { cn } from "~/components/ui/lib/utils"
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
}

export function BloodTypeSelect(props: Props) {
  return (
    <Select>
      <SelectTrigger className={cn("bg-blue-200", props.className)}>
        <SelectValue />
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
  )
}
