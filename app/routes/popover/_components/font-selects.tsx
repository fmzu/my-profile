import { FontSelectButton } from "./font-select-button"

type Props = {
  font: string
  setFont: (color: string) => void
}

export function FontSelects(props: Props) {
  const colors = [
    { font: "serif" },
    { font: "Yomogi" },
    { font: "Zen Kurenaido" },
    { font: "M PLUS Rounded 1c" },
    { font: "Yusei Magic" },
    { font: "DotGothic16" },
    { font: "Tsukimi Rounded" },
  ]

  return (
    <div className="grid grid-cols-7 gap-2">
      {colors.map((color) => (
        <FontSelectButton
          key={color.font}
          font={color.font}
          setFont={props.setFont}
        />
      ))}
    </div>
  )
}
