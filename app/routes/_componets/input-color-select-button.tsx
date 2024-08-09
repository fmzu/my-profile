import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"

type Props = {
  inputColor: string
  setInputColor: (color: string) => void
}

export function InputColorSelectButton(props: Props) {
  return (
    <Button
      className={cn("w-10", props.inputColor)}
      onClick={() => {
        props.setInputColor(props.inputColor)
      }}
    >
      {""}
    </Button>
  )
}
