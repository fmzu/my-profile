import { Button } from "~/components/ui/button"
import { cn } from "~/components/ui/lib/utils"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
}

export function ColorSelectButton(props: Props) {
  return (
    <Button
      className={cn("w-10", props.bgColor)}
      onClick={() => {
        props.setBgColor(props.bgColor)
      }}
    >
      {""}
    </Button>
  )
}
