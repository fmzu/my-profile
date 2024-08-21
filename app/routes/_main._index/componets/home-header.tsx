import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"

export function HomeHeader() {
  return (
    <div className="flex h-16 items-center justify-end bg-amber-300 px-4">
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-52 bg-white">
          <p>{"アルバム"}</p>
        </PopoverContent>
      </Popover>
    </div>
  )
}
