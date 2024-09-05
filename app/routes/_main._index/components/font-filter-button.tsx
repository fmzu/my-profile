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
        variant={"outline"}
        onClick={() => handleClick("rgba(255, 255, 255, 0.5)")}
      >
        {"あり"}
      </Button>
      <Button variant={"outline"} onClick={() => handleClick("none")}>
        {"なし"}
      </Button>
    </div>
  )
}
