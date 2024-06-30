import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Textarea } from "~/components/ui/textarea"

type Props = {
  title: string
  maxLength: number
}

export function ProfileTextAreaForm(props: Props) {
  const [text, setText] = useState("")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <input className="h-12 w-full rounded-md bg-blue-200" value={text} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{props.title}</p>
          <div className="flex items-end space-x-1">
            <Textarea
              placeholder={props.title}
              onChange={(event) => {
                if (event.target.value.length <= props.maxLength) {
                  setText(event.target.value)
                }
              }}
            />
          </div>
        </div>
        <div className="flex items-end justify-end space-x-1">
          <p className="text-xs">{`${props.maxLength - text.length}`}</p>
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
