import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { SettingSelects } from "./setting-selects"
import { useState } from "react"

type Props = {
  bgColor: string
  setBgColor: (value: string) => void
  inputColor: string
  setInputColor: (value: string) => void
  font: string
  setFont: (value: string) => void
}

export function SettingPopover(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <Popover>
      <PopoverTrigger asChild onClick={openModal}>
        <Button variant="secondary">{"設定"}</Button>
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent className="w-80 space-y-2 bg-white">
          <SettingSelects
            bgColor={props.bgColor}
            setBgColor={props.setBgColor}
            inputColor={props.inputColor}
            setInputColor={props.setInputColor}
            font={props.font}
            setFont={props.setFont}
          />
          <div className="flex items-end justify-end">
            <Button variant={"outline"} onClick={closeModal}>
              {"とじる"}
            </Button>
          </div>
        </PopoverContent>
      )}
    </Popover>
  )
}
