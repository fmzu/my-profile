import type { MetaFunction } from "@remix-run/node"
import { BasicInformationCard } from "./_componets/basic-information-card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen space-x-2 p-4">
      <div className="md:w-1/2">
        <BasicInformationCard />
      </div>
      {/* <div className="w-1/2">
        <ProfileRight />
      </div> */}
    </div>
  )
}
