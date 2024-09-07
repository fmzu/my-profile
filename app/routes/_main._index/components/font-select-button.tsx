import { Button } from "~/components/ui/button"

type Props = {
  font: string
  setFont: (color: string) => void
  selectedFont: string
}

export function FontSelectButton(props: Props) {
  const isSelected = props.font === props.selectedFont

  const getButtonClass = () => {
    return isSelected ? "border-2 border-black" : ""
  }

  return (
    <Button
      className={`content-center items-center text-xs ${getButtonClass()}`}
      onClick={() => {
        props.setFont(props.font)
      }}
      style={{ fontFamily: props.font }}
      variant={"outline"}
    >
      {"あ"}
    </Button>
  )
}
