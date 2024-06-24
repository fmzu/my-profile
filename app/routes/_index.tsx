import type { MetaFunction } from "@remix-run/node"
import { ProfileLeft } from "./_componets/profile-left"
import { ProfileRight } from "./_componets/profile-right"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen space-x-2 p-4">
      <div className="w-1/2">
        <ProfileLeft />
      </div>
      <div className="w-1/2">
        <ProfileRight />
      </div>
    </div>
  )
}
