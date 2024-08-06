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
}

export function ProfileTextAreaForm(props: Props) {
  const [text, setText] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <Popover>
      <PopoverTrigger asChild onClick={openModal}>
        <input
          className={cn("h-12 w-full rounded-md", props.inputColor)}
          value={text}
          style={{ fontFamily: props.font }}
        />
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent className="flex flex-col space-y-2 bg-white">
          <div>
            <p className="text-sm" style={{ fontFamily: props.font }}>
              {props.title}
            </p>
            <div className="flex items-end space-x-1">
              <Textarea
                placeholder={props.title}
                onChange={(event) => {
                  const inputValue = event.target.value
                  let formattedValue = inputValue
                  if (inputValue.length > 10) {
                    // 入力値を10文字のチャンクに分割する
                    const parts = inputValue.match(/.{1,24}/g) || []
                    // 改行を追加して結合する
                    formattedValue = parts.join("\n")
                  }
                  if (formattedValue.length <= props.maxLength) {
                    setText(formattedValue)
                  }
                }}
                style={{ fontFamily: props.font }}
              />
            </div>
          </div>
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
