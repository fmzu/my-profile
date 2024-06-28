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
          <SelectItem value="intj">{"INTJ(建築家)"}</SelectItem>
          <SelectItem value="intp">{"INTP(論理学者)"}</SelectItem>
          <SelectItem value="entj">{"ENTJ(指揮者)"}</SelectItem>
          <SelectItem value="entp">{"ENTP(討論者)"}</SelectItem>
          <SelectItem value="istp">{"ISTP(巨匠)"}</SelectItem>
          <SelectItem value="isfp">{"ISFP(冒険家)"}</SelectItem>
          <SelectItem value="estp">{"ESTP(起業家)"}</SelectItem>
          <SelectItem value="esfp">{"ESFP(エンターテイナー)"}</SelectItem>
          <SelectItem value="istj">{"ISTJ(管理者)"}</SelectItem>
          <SelectItem value="isfj">{"ISFJ(擁護者)"}</SelectItem>
          <SelectItem value="estj">{"ESTJ(幹部)"}</SelectItem>
          <SelectItem value="esfj">{"ESFJ(領事官)"}</SelectItem>
          <SelectItem value="infj">{"INFJ(提唱者)"}</SelectItem>
          <SelectItem value="infp">{"INFP(仲介者)"}</SelectItem>
          <SelectItem value="enfj">{"ENFJ(主人公)"}</SelectItem>
          <SelectItem value="enfp">{"ENFP(広報運動家)"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
