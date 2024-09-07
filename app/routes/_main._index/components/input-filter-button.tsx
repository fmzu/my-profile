import { useState } from "react"
import { Button } from "~/components/ui/button"

type Props = {
  onValueChange: (value: string) => void // 親要素に値を渡すための関数
}

export function InputFilterButton(props: Props) {
  const [selectedValue, setSelectedValue] = useState("")

  const handleClick = (value: string) => {
    setSelectedValue(value)
    props.onValueChange(value) // 親要素に値を渡す
  }

  const getButtonClass = (value: string) => {
    return value === selectedValue ? "border-2 border-black" : ""
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.2)")}
        size={"sm"}
        className={getButtonClass("rgba(255, 255, 255, 0.2)")}
      >
        {"薄い"}
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.5)")}
        size={"sm"}
        className={getButtonClass("rgba(255, 255, 255, 0.5)")}
      >
        {"普通"}
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.7)")}
        size={"sm"}
        className={getButtonClass("rgba(255, 255, 255, 0.7)")}
      >
        {"濃い"}
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handleClick("")}
        size={"sm"}
        className={getButtonClass("")}
      >
        {"なし"}
      </Button>
    </div>
  )
}
