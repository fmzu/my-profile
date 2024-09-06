import { AddImageButton } from "./add-image-button"
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
  selectImage: string
  setSelectImage: (image: string) => void
}

export function SettingSelects(props: Props) {
  const bgColors = [
    { slug: "yellow", color: "bg-yellow-300" },
    { slug: "lime", color: "bg-lime-300" },
    { slug: "teal", color: "bg-teal-300" },
    { slug: "sky", color: "bg-sky-300" },
    { slug: "violet", color: "bg-violet-300" },
    { slug: "pink", color: "bg-pink-300" },
    { slug: "red", color: "bg-red-300" },
  ]

  const inputColors = [
    { slug: "yellow", color: "bg-yellow-200" },
    { slug: "lime", color: "bg-lime-200" },
    { slug: "teal", color: "bg-teal-200" },
    { slug: "sky", color: "bg-sky-200" },
    { slug: "violet", color: "bg-violet-200" },
    { slug: "pink", color: "bg-pink-200" },
    { slug: "red", color: "bg-red-200" },
  ]

  const fonts = [
    { slug: "Tsukimi", name: "Tsukimi Rounded" },
    { slug: "Kurenaido", name: "Zen Kurenaido" },
    { slug: "serif", name: "serif" },
    { slug: "Yusei", name: "Yusei Magic" },
    { slug: "DotGothic16", name: "DotGothic16" },
    { slug: "Yomogi", name: "Yomogi" },
    { slug: "Hachi", name: "Hachi Maru Pop" },
  ]

  const backgroundImages = [
    { slug: "a", url: "https://aipict.com/wp-content/uploads/pink_star01.png" },
    {
      slug: "b",
      url: "https://aipict.com/wp-content/uploads/2024/06/white_silk02.png",
    },
    {
      slug: "c",
      url: "https://aipict.com/wp-content/uploads/2022/10/flowers21.png",
    },
    {
      slug: "d",
      url: "https://aipict.com/wp-content/uploads/gold_gradation01.png",
    },
    {
      slug: "e",
      url: "https://aipict.com/wp-content/uploads/2024/07/heart_colorful01.png",
    },
    {
      slug: "f",
      url: "https://aipict.com/wp-content/uploads/2024/07/simple_wave04.png",
    },
  ]

  return (
    <div className="space-y-2">
      <p className="font-bold"> {"設定"}</p>
      <div>
        <p className="text-xs"> {"背景色"}</p>
        <div className="grid grid-cols-7 gap-1">
          {bgColors.map((color) => (
            <ColorSelectButton
              key={color.slug}
              bgColor={color.color}
              setBgColor={props.setBgColor}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs"> {"入力部分の色"}</p>
        <div className="grid grid-cols-7 gap-1">
          {inputColors.map((color) => (
            <InputColorSelectButton
              key={color.slug}
              inputColor={color.color}
              setInputColor={props.setInputColor}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs"> {"フォント"}</p>
        <div className="grid grid-cols-7 gap-1">
          {fonts.map((font) => (
            <FontSelectButton
              key={font.slug}
              font={font.name}
              setFont={props.setFont}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs"> {"背景画像"}</p>
        <div className="grid grid-cols-7 gap-1">
          {backgroundImages.map((image) => (
            <BackgroundImageButton
              key={image.slug}
              image={image.url}
              setImage={props.setImage}
            />
          ))}
          <AddImageButton
            selectImage={props.selectImage}
            setSelectImage={props.setSelectImage}
          />
        </div>
      </div>
      <div>
        <p className="text-xs"> {"透過"}</p>
        <FontFilterButton onValueChange={props.handleValueChange} />
      </div>
    </div>
  )
}
