import { ColorSelectButton } from "./color-select-button"
import { InputColorSelectButton } from "./input-color-select-button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (color: string) => void
}

export function ColorSelects(props: Props) {
  const bgColors = [
    "bg-yellow-300",
    "bg-lime-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-violet-300",
    "bg-pink-300",
    "bg-red-300",
  ]

  const inputColors = [
    "bg-yellow-200",
    "bg-lime-200",
    "bg-teal-200",
    "bg-sky-200",
    "bg-violet-200",
    "bg-pink-200",
    "bg-red-200",
  ]

  return (
    <div className="space-y-2">
      <p className="text-xs"> {"背景色の選択"}</p>
      <div className="grid grid-cols-7 gap-2">
        {bgColors.map((color) => (
          <ColorSelectButton
            key={color}
            bgColor={color}
            setBgColor={props.setBgColor}
          />
        ))}
      </div>
      <p className="text-xs"> {"入力部分の色の選択"}</p>
      <div className="grid grid-cols-7 gap-2">
        {inputColors.map((color) => (
          <InputColorSelectButton
            key={color}
            inputColor={color}
            setInputColor={props.setInputColor}
          />
        ))}
      </div>
    </div>
  )
}
