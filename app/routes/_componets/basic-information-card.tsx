import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { LeftBasicInformation } from "./left-basic-information"
import { LeftFreeDescription } from "./left-free-description"
import { LeftDetailInformation } from "./left-detail-information"

export function BasicInformationCard() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="font-bold text-5xl text-teal-400">{"MY PROFILE"}</p>
          <p>{"書いた日"}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <LeftBasicInformation />
          <Separator />
          <LeftDetailInformation />
          <Separator />
          <LeftFreeDescription />
        </div>
      </CardContent>
    </Card>
  )
}
