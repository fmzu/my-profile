import { Button } from "~/components/ui/button"

type Props = {
  image: string
  setImage: (color: string) => void
  selectedImage: string
}

export function BackgroundImageButton(props: Props) {
  const isSelected = props.image === props.selectedImage

  const getButtonClass = () => {
    return isSelected ? "border-2 border-black" : ""
  }

  return (
    <Button
      className={getButtonClass()}
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
