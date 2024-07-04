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
}

export function DaySelect(props: Props) {
  const handleStringToInt = (value: string) => {
    props.setDay(String(value))
  }

  return (
    <Select
      onValueChange={(value) => {
        console.log(value)
        props.setDay(value)
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="誕生日" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
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
