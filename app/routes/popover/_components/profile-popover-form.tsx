import { useState } from "react"
import { Button } from "~/components/ui/button"
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
      <PopoverContent className="flex flex-col space-y-2 bg-white">
        <div>
          <p className="text-sm">{props.title}</p>
          <Input
            placeholder={props.title}
            onChange={(event) => {
              setText(event.target.value)
            }}
          />
        </div>
        <div className="flex justify-end">
          <Button variant={"outline"}>{"保存"}</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
