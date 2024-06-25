import { DetailCard } from "./detail-card"

export function LeftDetailInformation() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        <div className="w-1/3">
          <DetailCard text="趣味" />
        </div>
        <div className="w-1/3">
          <DetailCard text="特技" />
        </div>
        <div className="w-1/3">
          <DetailCard text="出身地" />
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="w-1/3">
          <DetailCard text="マイブーム" />
        </div>
        <div className="w-1/3">
          <DetailCard text="職業" />
        </div>
        <div className="w-1/3">
          <DetailCard text="兄弟構成" />
        </div>
      </div>
    </div>
  )
}
