import type { MetaFunction } from "@remix-run/node"
import { ProfileTemplateOne } from "./_componets/profile-template-one"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="flex space-x-2 border-r">
      <ProfileTemplateOne />
    </div>
  )
}
