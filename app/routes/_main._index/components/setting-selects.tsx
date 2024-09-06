import { BackgroundImageButton } from "./background-image-button"
import { ColorSelectButton } from "./color-select-button"
import { FontFilterButton } from "./font-filter-button"
import { FontSelectButton } from "./font-select-button"
import { InputColorSelectButton } from "./input-color-select-button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (font: string) => void
  font: string
  setFont: (color: string) => void
  handleValueChange: (value: string) => void
  setImage: (image: string) => void
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

  const fonts = [
    "Tsukimi Rounded",
    "Zen Kurenaido",
    "serif",
    "Yusei Magic",
    "DotGothic16",
    "Yomogi",
    "Hachi Maru Pop",
  ]

  const backgroundImages = [
    "https://aipict.com/wp-content/uploads/pink_star01.png",
    "https://aipict.com/wp-content/uploads/2024/06/white_silk02.png",
    "https://aipict.com/wp-content/uploads/2022/10/flowers21.png",
    "https://aipict.com/wp-content/uploads/gold_gradation01.png",
    "https://aipict.com/wp-content/uploads/2024/07/heart_colorful01.png",
    "https://aipict.com/wp-content/uploads/2024/07/simple_wave04.png",
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
        {fonts.map((font) => (
          <FontSelectButton key={font} font={font} setFont={props.setFont} />
        ))}
      </div>
      <p className="text-xs"> {"背景画像"}</p>
      <div className="grid grid-cols-7 gap-2">
        {backgroundImages.map((image) => (
          <BackgroundImageButton
            key={image}
            image={image}
            setImage={props.setImage}
          />
        ))}
      </div>
      <p className="text-xs"> {"透過"}</p>
      <FontFilterButton onValueChange={props.handleValueChange} />
    </div>
  )
}
