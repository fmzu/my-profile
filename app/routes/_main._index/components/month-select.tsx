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
  font: string
}
export function MonthSelect(props: Props) {
  return (
    <Select
      onValueChange={(value) => {
        props.setMonth(value)
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="誕生月" />
      </SelectTrigger>
      <SelectContent className="h-64 bg-white">
        <SelectGroup style={{ fontFamily: props.font }}>
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
