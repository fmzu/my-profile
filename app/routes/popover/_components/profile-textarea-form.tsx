import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Textarea } from "~/components/ui/textarea"

type Props = {
  title: string
}

export function ProfileTextAreaForm(props: Props) {
  const [text, setText] = useState("")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input className="h-24 w-full rounded-md bg-blue-200" value={text} />
      </PopoverTrigger>
      <PopoverContent className="bg-white">
        <Textarea
          placeholder={props.title}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
