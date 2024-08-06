import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"

type Props = {
  id: string
  className: string
  title: string
  maxLength: number
  inputColor: string
  font: string
}

export function ProfileFormItemText(props: Props) {
  const [text, setText] = useState("")

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <Popover>
      <PopoverTrigger asChild onClick={openModal}>
        <input
          className={cn(
            "h-6 flex-1 overflow-hidden whitespace-nowrap rounded-md text-xl",
            props.className,
            props.inputColor,
          )}
          value={`${props.id}${text}`}
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
              <Input
                placeholder={props.title}
                onChange={(event) => {
                  if (event.target.value.length <= props.maxLength) {
                    setText(event.target.value)
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
