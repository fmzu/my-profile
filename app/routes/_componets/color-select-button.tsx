import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"

type Props = {
  bgColor: string
  inputColor: string
  setBgColor: (color: string) => void
  setInputColor: (color: string) => void
}

export function ColorSelectButton(props: Props) {
  return (
    <Button
      className={cn("w-full", props.bgColor)}
      onClick={() => {
        props.setBgColor(props.bgColor)
        props.setInputColor(props.inputColor)
      }}
    >
      {""}
    </Button>
  )
}
