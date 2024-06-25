import { LeftBasicInformation } from "./left-basic-information"
import { LeftFreeDescription } from "./left-free-description"
import { LeftDetailInformation } from "./left-detail-information"

export function ProfileTemplateOne() {
  return (
    <div
      className="flex flex-col space-y-2"
      style={{ height: "932px", width: "430px" }}
    >
      <div className="flex flex-col justify-between">
        <div className="flex justify-center">
          <p className="font-bold text-5xl text-teal-400">{"MY PROFILE"}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-xs">{"書いた日付"}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <LeftBasicInformation />
        <LeftDetailInformation />
        <LeftFreeDescription />
      </div>
    </div>
  )
}
