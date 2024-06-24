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
    <div className="flex p-4 text-red-400">
      <div className="w-1/2">
        <Card className="h-full w-full">
          <CardContent>{"あああ"}</CardContent>
        </Card>
      </div>
      <div className="w-1/2">
        <Card className="h-full w-full">
          <CardContent>{"あああ"}</CardContent>
        </Card>
      </div>
    </div>
  )
}
