import { ColorSelectButton } from "./color-select-button"
import { FontFilterButton } from "./font-filter-button"
import { FontSelectButton } from "./font-select-button"
import { InputColorSelectButton } from "./input-color-select-button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (color: string) => void
  font: string
  setFont: (color: string) => void
  handleValueChange: (value: string) => void
}

export function SettingSelects(props: Props) {
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

  const font = [
    { font: "Tsukimi Rounded" },
    { font: "Zen Kurenaido" },
    { font: "serif" },
    { font: "Yusei Magic" },
    { font: "DotGothic16" },
    { font: "Yomogi" },
    { font: "Hachi Maru Pop" },
  ]

  return (
    <div className="space-y-2">
      <p className="font-bold"> {"設定"}</p>
      <p className="text-xs"> {"背景色"}</p>
      <div className="grid grid-cols-7 gap-2">
        {bgColors.map((color) => (
          <ColorSelectButton
            key={color}
            bgColor={color}
            setBgColor={props.setBgColor}
          />
        ))}
      </div>
      <p className="text-xs"> {"入力部分の色"}</p>
      <div className="grid grid-cols-7 gap-2">
        {inputColors.map((color) => (
          <InputColorSelectButton
            key={color}
            inputColor={color}
            setInputColor={props.setInputColor}
          />
        ))}
      </div>
      <p className="text-xs"> {"フォント"}</p>
      <div className="grid grid-cols-7 gap-2">
        {font.map((font) => (
          <FontSelectButton
            key={font.font}
            font={font.font}
            setFont={props.setFont}
          />
        ))}
      </div>
      <p className="text-xs"> {"透過"}</p>
      <FontFilterButton onValueChange={props.handleValueChange} />
    </div>
  )
}
