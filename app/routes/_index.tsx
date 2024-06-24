import type { MetaFunction } from "@remix-run/node"
import { Card, CardContent } from "~/components/ui/card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="p-4 font-sans text-red-400">
      <Card>
        <CardContent>{""}</CardContent>
      </Card>
    </div>
  )
}
