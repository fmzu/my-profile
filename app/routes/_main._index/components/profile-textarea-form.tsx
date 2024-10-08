import { useState } from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Textarea } from "~/components/ui/textarea"

type Props = {
  title: string
  maxLength: number
  inputColor: string
  font: string
  value: string
  onChange(event: string): void
  filter: string
}

export function ProfileTextAreaForm(props: Props) {
  const [text, setText] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue: string = event.target.value
    let formattedValue: string = inputValue

    if (inputValue.length > 20) {
      // 入力値を10文字のチャンクに分割する
      const parts: string[] = inputValue.match(/.{1,20}/g) || []
      // 改行を追加して結合する
      formattedValue = parts.join("\n")
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild onClick={openModal}>
        <input
          className={cn("h-20 w-full rounded-md", props.inputColor)}
          value={props.value}
          style={{
            fontFamily: props.font,
            backgroundColor: props.filter,
          }}
        />
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent className="flex flex-col space-y-2 bg-white">
          <p className="text-sm" style={{ fontFamily: props.font }}>
            {props.title}
          </p>
          <Textarea
            placeholder={props.title}
            value={props.value}
            onChange={(event) => {
              if (event.target.value.length > props.maxLength) {
                return
              }
              props.onChange(event.target.value)
            }}
            style={{ fontFamily: props.font }}
          />
          <div className="flex items-end justify-end space-x-1">
            <p className="text-xs">{`${props.maxLength - text.length}`}</p>
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
