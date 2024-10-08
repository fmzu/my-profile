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
  day: string
  setDay: (value: string) => void
  font: string
}

export function DaySelect(props: Props) {
  return (
    <Select
      onValueChange={(value) => {
        props.setDay(value)
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="誕生日" />
      </SelectTrigger>
      <SelectContent className="h-64 bg-white">
        <SelectGroup style={{ fontFamily: props.font }}>
          <SelectLabel>{"誕生日"}</SelectLabel>
          {Array.from({ length: 31 }, (_, i) => (
            <SelectItem
              key={`${i + 1}`}
              value={`${i + 1}`}
            >{`${i + 1}日`}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
