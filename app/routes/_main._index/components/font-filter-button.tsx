import { Button } from "~/components/ui/button"

type Props = {
  onValueChange: (value: string) => void // 親要素に値を渡すための関数
}

export function FontFilterButton(props: Props) {
  const handleClick = (value: string) => {
    props.onValueChange(value) // 親要素に値を渡す
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.2)")}
        size={"sm"}
      >
        {"薄い"}
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.5)")}
        size={"sm"}
      >
        {"普通"}
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.7)")}
        size={"sm"}
      >
        {"濃い"}
      </Button>
      <Button variant={"secondary"} onClick={() => handleClick("")} size={"sm"}>
        {"なし"}
      </Button>
    </div>
  )
}
