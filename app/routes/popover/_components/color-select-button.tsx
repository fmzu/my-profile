import { Button } from "~/components/ui/button"

type Props = {
  bgColor: string
  setBgColor: (color: string) => void
  inputColor: string
  setInputColor: (color: string) => void
}

export function ColorSelectButton(props: Props) {
  return (
    <div className="grid grid-cols-7 gap-2">
      <Button
        className="w-full bg-yellow-300"
        onClick={() => {
          props.setBgColor("bg-yellow-300")
          props.setInputColor("bg-yellow-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-lime-300"
        onClick={() => {
          props.setBgColor("bg-lime-300")
          props.setInputColor("bg-lime-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-teal-300"
        onClick={() => {
          props.setBgColor("bg-teal-300")
          props.setInputColor("bg-teal-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-blue-300"
        onClick={() => {
          props.setBgColor("bg-blue-300")
          props.setInputColor("bg-blue-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-purple-300"
        onClick={() => {
          props.setBgColor("bg-purple-300")
          props.setInputColor("bg-purple-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-pink-300"
        onClick={() => {
          props.setBgColor("bg-pink-300")
          props.setInputColor("bg-pink-200")
        }}
      >
        {""}
      </Button>
      <Button
        className="w-full bg-red-300"
        onClick={() => {
          props.setBgColor("bg-red-300")
          props.setInputColor("bg-red-200")
        }}
      >
        {""}
      </Button>
    </div>
  )
}
