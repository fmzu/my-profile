import { Button } from "~/components/ui/button"

type Props = {
  inputColor: string
  setInputColor: (color: string) => void
}

export function InputColorSelectButton(props: Props) {
  return (
    <Button
      className={props.inputColor}
      onClick={() => {
        props.setInputColor(props.inputColor)
      }}
    >
      {""}
    </Button>
  )
}
