import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { ColorSelects } from "./color-selects"
import { FontSelects } from "./font-selects"

type Props = {
  bgColor: string
  setBgColor: (value: string) => void
  inputColor: string
  setInputColor: (value: string) => void
  font: string
  setFont: (value: string) => void
}

export function SettingPopover(props: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{"設定"}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <ColorSelects
          bgColor={props.bgColor}
          setBgColor={props.setBgColor}
          inputColor={props.inputColor}
          setInputColor={props.setInputColor}
        />
        <FontSelects font={props.font} setFont={props.setFont} />
      </PopoverContent>
    </Popover>
  )
}
