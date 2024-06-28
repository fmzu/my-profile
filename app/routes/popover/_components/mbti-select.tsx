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

export function MbtiSelect(props: Props) {
  return (
    <Select>
      <SelectTrigger className={cn("bg-blue-200", props.className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="h-64 bg-white">
        <SelectGroup>
          <SelectLabel>{"MBTI"}</SelectLabel>
          <SelectItem value="intj">{"INTJ"}</SelectItem>
          <SelectItem value="intp">{"INTP"}</SelectItem>
          <SelectItem value="entj">{"ENTJ"}</SelectItem>
          <SelectItem value="entp">{"ENTP"}</SelectItem>
          <SelectItem value="istp">{"ISTP"}</SelectItem>
          <SelectItem value="isfp">{"ISFP"}</SelectItem>
          <SelectItem value="estp">{"ESTP"}</SelectItem>
          <SelectItem value="esfp">{"ESFP"}</SelectItem>
          <SelectItem value="istj">{"ISTJ"}</SelectItem>
          <SelectItem value="isfj">{"ISFJ"}</SelectItem>
          <SelectItem value="estj">{"ESTJ"}</SelectItem>
          <SelectItem value="esfj">{"ESFJ"}</SelectItem>
          <SelectItem value="infj">{"INFJ"}</SelectItem>
          <SelectItem value="infp">{"INFP"}</SelectItem>
          <SelectItem value="enfj">{"ENFJ"}</SelectItem>
          <SelectItem value="enfp">{"ENFP"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
