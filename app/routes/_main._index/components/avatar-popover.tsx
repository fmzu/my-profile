import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Separator } from "~/components/ui/separator"

export function AvatarPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex w-52 flex-col space-y-2 bg-white">
        <p>{"アルバム"}</p>
        <Separator />
        <p>{"ダークモード"}</p>
      </PopoverContent>
    </Popover>
  )
}
