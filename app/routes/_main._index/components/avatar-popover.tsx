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
      <PopoverContent className="flex w-52 flex-col items-center space-y-2 bg-white">
        <a href="/albums">
          <p>{"アルバム"}</p>
        </a>
        <Separator />
        <p>{"ダークモード"}</p>
      </PopoverContent>
    </Popover>
  )
}
