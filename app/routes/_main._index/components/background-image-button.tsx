import { Button } from "~/components/ui/button"

type Props = {
  image: string
  setImage: (color: string) => void
}

export function BackgroundImageButton(props: Props) {
  return (
    <Button
      variant={"outline"}
      style={{ backgroundImage: `url(${props.image})` }}
      onClick={() => {
        props.setImage(props.image)
      }}
    >
      {""}
    </Button>
  )
}
