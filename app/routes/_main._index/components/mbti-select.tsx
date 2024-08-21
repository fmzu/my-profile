import { useState } from "react"
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
  inputColor: string
  font: string
}

export function MbtiSelect(props: Props) {
  const [selected, setSelected] = useState("")

  const handleStringToInt = (value: string) => {
    setSelected(String(value))
  }

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <Popover>
      <PopoverTrigger asChild onClick={openModal}>
        <input
          className={cn(
            "h-6 rounded-md bg-blue-200",
            props.className,
            props.inputColor,
          )}
          value={selected}
          style={{ fontFamily: props.font }}
        />
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent
          className="flex flex-col space-y-2 bg-white"
          style={{ fontFamily: props.font }}
        >
          <p className="text-sm">{"MBTI"}</p>
          <Select onValueChange={handleStringToInt}>
            <SelectTrigger>
              <SelectValue placeholder="MBTI" />
            </SelectTrigger>
            <SelectContent className="h-64 bg-white">
              <SelectGroup style={{ fontFamily: props.font }}>
                <SelectLabel>{"MBTI"}</SelectLabel>
                <SelectItem value="INTJ">{"INTJ"}</SelectItem>
                <SelectItem value="INTP">{"INTP"}</SelectItem>
                <SelectItem value="ENTJ">{"ENTJ"}</SelectItem>
                <SelectItem value="ENTP">{"ENTP"}</SelectItem>
                <SelectItem value="ISTP">{"ISTP"}</SelectItem>
                <SelectItem value="ISFP">{"ISFP"}</SelectItem>
                <SelectItem value="ESTP">{"ESTP"}</SelectItem>
                <SelectItem value="ESFP">{"ESFP"}</SelectItem>
                <SelectItem value="ISTJ">{"ISTJ"}</SelectItem>
                <SelectItem value="ISFJ">{"ISFJ"}</SelectItem>
                <SelectItem value="ESTJ">{"ESTJ"}</SelectItem>
                <SelectItem value="ESFJ">{"ESFJ"}</SelectItem>
                <SelectItem value="INFJ">{"INFJ"}</SelectItem>
                <SelectItem value="INFP">{"INFP"}</SelectItem>
                <SelectItem value="ENFJ">{"ENFJ"}</SelectItem>
                <SelectItem value="ENFP">{"ENFP"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex justify-end">
            <Button
              variant={"outline"}
              onClick={closeModal}
              style={{ fontFamily: props.font }}
            >
              {"保存"}
            </Button>
          </div>
        </PopoverContent>
      )}
    </Popover>
  )
}
