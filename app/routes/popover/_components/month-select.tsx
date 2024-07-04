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
  month: string
  setMonth: (value: string) => void
}
export function MonthSelect(props: Props) {
  const handleStringToInt = (value: string) => {
    props.setMonth(String(value))
  }

  return (
    <Select onValueChange={handleStringToInt}>
      <SelectTrigger>
        <SelectValue placeholder="誕生月" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>{"誕生月"}</SelectLabel>
          {Array.from({ length: 12 }, (_, i) => (
            <SelectItem
              key={`${i + 1}`}
              value={`${i + 1}`}
            >{`${i + 1}月`}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
