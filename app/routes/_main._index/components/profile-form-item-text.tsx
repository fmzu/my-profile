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
  className: string
  title: string
  maxLength: number
  inputColor: string
  font: string
  value: string
  onChange(event: string): void
}

export function ProfileFormItemText(props: Props) {
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
          value={props.value}
          style={{ fontFamily: props.font }}
        />
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent className="flex flex-col gap-y-2 bg-white">
          <p className="text-sm" style={{ fontFamily: props.font }}>
            {props.title}
          </p>
          <Input
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
          <div className="flex items-end justify-end gap-x-1">
            <p className="text-xs">{`${props.maxLength - props.value.length}`}</p>
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
