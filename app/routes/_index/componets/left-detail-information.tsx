import { AvatorCard } from "./avator-card"
import { DetailCard } from "./detail-card"

export function LeftDetailInformation() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="grid h-full grid-cols-2 gap-4">
        <AvatorCard />
        <DetailCard text="趣味" />
        <DetailCard text="特技" />
        <DetailCard text="出身地" />
        <DetailCard text="マイブーム" />
        <DetailCard text="職業" />
      </div>
    </div>
  )
}
