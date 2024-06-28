import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"
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
    <Popover>
      <PopoverTrigger asChild>
        <input className={cn("rounded-md bg-blue-200", props.className)} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{"MBTI"}</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="MBTI" />
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
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
