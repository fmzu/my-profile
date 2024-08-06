import { FontSelectButton } from "./font-select-button"

type Props = {
  font: string
  setFont: (color: string) => void
}

export function FontSelects(props: Props) {
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
    <div className="grid grid-cols-7 gap-2">
      {font.map((font) => (
        <FontSelectButton
          key={font.font}
          font={font.font}
          setFont={props.setFont}
        />
      ))}
    </div>
  )
}
