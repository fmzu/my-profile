import {} from "~/components/ui/avatar"
import {} from "~/components/ui/popover"
import { AvatarPopover } from "./avatar-popover"

export function HomeHeader() {
  return (
    <div className="flex h-16 items-center justify-end bg-amber-300 px-4">
      <AvatarPopover />
    </div>
  )
}
