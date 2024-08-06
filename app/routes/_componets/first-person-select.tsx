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

export function FIrstPersonSelect(props: Props) {
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
        <PopoverContent className="flex flex-col space-y-2 bg-white">
          <div style={{ fontFamily: props.font }}>
            <p className="text-sm">{"一人称"}</p>
            <Select onValueChange={handleStringToInt}>
              <SelectTrigger>
                <SelectValue placeholder="一人称" />
              </SelectTrigger>
              <SelectContent className="h-64 bg-white">
                <SelectGroup style={{ fontFamily: props.font }}>
                  <SelectLabel>{"一人称"}</SelectLabel>
                  <SelectItem value="自分">{"自分"}</SelectItem>
                  <SelectItem value="わたし">{"わたし"}</SelectItem>
                  <SelectItem value="私">{"私"}</SelectItem>
                  <SelectItem value="うち">{"うち"}</SelectItem>
                  <SelectItem value="僕">{"僕"}</SelectItem>
                  <SelectItem value="俺">{"俺"}</SelectItem>
                  <SelectItem value="拙者">{"拙者"}</SelectItem>
                  <SelectItem value="朕">{"朕"}</SelectItem>
                  <SelectItem value="小生">{"小生"}</SelectItem>
                  <SelectItem value="拙僧">{"拙僧"}</SelectItem>
                  <SelectItem value="まろ">{"まろ"}</SelectItem>
                  <SelectItem value="某">{"某"}</SelectItem>
                  <SelectItem value="Me">{"Me"}</SelectItem>
                  <SelectItem value="オデ">{"オデ"}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
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
