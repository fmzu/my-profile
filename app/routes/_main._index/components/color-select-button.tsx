import { Button } from "~/components/ui/button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
}

export function ColorSelectButton(props: Props) {
  return (
    <Button
      className={props.bgColor}
      onClick={() => {
        props.setBgColor(props.bgColor)
      }}
    >
      {""}
    </Button>
  )
}
