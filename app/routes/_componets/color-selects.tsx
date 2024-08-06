import { ColorSelectButton } from "./color-select-button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (color: string) => void
}

export function ColorSelects(props: Props) {
  const colors = [
    { bgColor: "bg-yellow-300", inputColor: "bg-yellow-200" },
    { bgColor: "bg-lime-300", inputColor: "bg-lime-200" },
    { bgColor: "bg-teal-300", inputColor: "bg-teal-200" },
    { bgColor: "bg-sky-300", inputColor: "bg-sky-200" },
    { bgColor: "bg-violet-300", inputColor: "bg-violet-200" },
    { bgColor: "bg-pink-300", inputColor: "bg-pink-200" },
    { bgColor: "bg-red-300", inputColor: "bg-red-200" },
  ]

  return (
    <div className="grid grid-cols-7 gap-2">
      {colors.map((color) => (
        <ColorSelectButton
          key={color.bgColor}
          bgColor={color.bgColor}
          inputColor={color.inputColor}
          setBgColor={props.setBgColor}
          setInputColor={props.setInputColor}
        />
      ))}
    </div>
  )
}
