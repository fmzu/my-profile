import { Button } from "~/components/ui/button"
import { AvatarPopover } from "./avatar-popover"
import { House } from "lucide-react"
import { Link } from "@remix-run/react"

export function HomeHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-amber-300 px-4">
      <Link to={"/"}>
        <Button variant={"ghost"}>
          <House />
        </Button>
      </Link>
      <AvatarPopover />
    </div>
  )
}
