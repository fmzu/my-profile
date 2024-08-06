import { Button } from "~/components/ui/button"

type Props = {
  font: string
  setFont: (color: string) => void
}

export function FontSelectButton(props: Props) {
  return (
    <Button
      className={"w-full content-center items-center text-xs"}
      onClick={() => {
        props.setFont(props.font)
      }}
      style={{ fontFamily: props.font }}
      variant={"outline"}
    >
      {"あ"}
    </Button>
  )
}
