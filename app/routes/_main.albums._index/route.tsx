import { Link } from "@remix-run/react"
import {} from "~/components/ui/card"
import { ProfileCard } from "./components/profile-card"

export default function Albums() {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-4">
      <Link to={"/albums/1"}>
        <ProfileCard />
      </Link>
      <Link to={"/albums/1"}>
        <ProfileCard />
      </Link>
      <Link to={"/albums/1"}>
        <ProfileCard />
      </Link>
      <Link to={"/albums/1"}>
        <ProfileCard />
      </Link>
    </div>
  )
}
