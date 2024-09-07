import { Button } from "~/components/ui/button"

type Props = {
  inputColor: string
  setInputColor: (color: string) => void
  selectedColor: string
}

export function InputColorSelectButton(props: Props) {
  const isSelected = props.inputColor === props.selectedColor

  const getButtonClass = () => {
    return isSelected
      ? `border-2 border-black ${props.inputColor}`
      : `${props.inputColor}`
  }
  return (
    <Button
      className={getButtonClass()}
      onClick={() => {
        props.setInputColor(props.inputColor)
      }}
    >
      {""}
    </Button>
  )
}
