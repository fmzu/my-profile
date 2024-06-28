import { useState } from "react"
import { Input } from "~/components/ui/input"
import { cn } from "~/components/ui/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"

type Props = {
  className: string
  title: string
}

export function ProfilePopoverForm(props: Props) {
  const [text, setText] = useState("")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input
          className={cn("rounded-md bg-blue-200", props.className)}
          value={text}
        />
      </PopoverTrigger>
      <PopoverContent className="bg-white">
        <Input
          placeholder={props.title}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
