import { Button } from "~/components/ui/button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  selectedColor: string
}

export function ColorSelectButton(props: Props) {
  const isSelected = props.bgColor === props.selectedColor

  const getButtonClass = () => {
    return isSelected
      ? `border-2 border-black ${props.bgColor}`
      : `${props.bgColor}`
  }

  return (
    <Button
      className={getButtonClass()}
      onClick={() => {
        props.setBgColor(props.bgColor)
      }}
    >
      {""}
    </Button>
  )
}
