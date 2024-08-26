import { Link } from "@remix-run/react"
import { Album, Moon } from "lucide-react"
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
        <div className="flex flex-col gap-y-2">
          <Link to="/albums" className="flex items-center space-x-2">
            <Album className="w-4" />
            <p>{"アルバム"}</p>
          </Link>
          <Separator />
          <div className="flex items-center space-x-2">
            <Moon className="w-4" />
            <p>{"ダークモード"}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
