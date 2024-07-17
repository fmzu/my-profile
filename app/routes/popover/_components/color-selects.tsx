import { ColorSelectButton } from "./color-select-button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (color: string) => void
}

export function ColorSelects(props: Props) {
  return (
    <div className="grid grid-cols-7 gap-2">
      <ColorSelectButton
        bgColor={"bg-yellow-300"}
        inputColor={"bg-yellow-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-lime-300"}
        inputColor={"bg-lime-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-teal-300"}
        inputColor={"bg-teal-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-sky-300"}
        inputColor={"bg-sky-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-violet-300"}
        inputColor={"bg-violet-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-pink-300"}
        inputColor={"bg-pink-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
      <ColorSelectButton
        bgColor={"bg-red-300"}
        inputColor={"bg-red-200"}
        setBgColor={props.setBgColor}
        setInputColor={props.setInputColor}
      />
    </div>
  )
}
