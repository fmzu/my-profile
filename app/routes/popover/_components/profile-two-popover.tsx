import { BloodTypeSelect } from "./blood-type-select"
import { DateSelect } from "./date-select"
import { MbtiSelect } from "./mbti-select"
import { ProfilePopoverForm } from "./profile-popover-form"
import { ProfileTextAreaForm } from "./profile-textarea-form"

export function ProfileTwoPopover() {
  return (
    <div
      id="profile"
      className="flex flex-col gap-y-2 border-gray-300 bg-blue-300 p-2"
      style={{
        height: `${257 * 2}px`,
        width: `${182 * 2}px`,
        boxSizing: "border-box",
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <div className="flex w-2/3 flex-col gap-y-1 pr-2">
              <div className="flex items-center gap-x-2">
                <p className="min-w-fit text-xs">{"名前"}</p>
                <ProfilePopoverForm title="名前" className="w-full" />
              </div>
              <div className="flex items-center gap-x-2">
                <p className="min-w-fit text-xs">{"出身地"}</p>
                <ProfilePopoverForm title="出身地" className="w-full" />
              </div>
            </div>
            <div className="w-1/3">
              <input className="h-full w-full rounded-md bg-blue-200" />
            </div>
          </div>
          <div className="flex w-full flex-1 gap-x-2">
            <div className="flex flex-1 items-center gap-x-2">
              <p className="text-xs">{"Twitter"}</p>
              <ProfilePopoverForm title="Twitter" className="flex-1" />
            </div>
            <div className="flex flex-1 items-center gap-x-2">
              <p className="text-xs">{"Instagram"}</p>
              <ProfilePopoverForm title="Instagram" className="flex-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"わたしは"}</p>
            <DateSelect className="h-6 flex-1 bg-blue-200 text-xs" />
            <p className="text-xs">{"生まれです。"}</p>
            <ProfilePopoverForm title="職業" className="flex-1" />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"って呼んでください！"}</p>
            <p className="text-xs">{"血液型は"}</p>
            <BloodTypeSelect className="h-6 flex-1" />
            <p className="text-xs">{"型で、MBTIは"}</p>
            <MbtiSelect className="h-6 flex-1" />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"の、"}</p>
            <ProfilePopoverForm title="性格" className="flex-1" />
            <p className="text-xs">{"な性格です！"}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <ProfilePopoverForm title="好きなもの" className="flex-1" />
            <p className="text-xs">{"が好きです！"}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"よく"}</p>
            <ProfilePopoverForm title="活動拠点" className="flex-1" />
            <p className="text-xs">{"に浮上してます！"}</p>
            <p className="text-xs">{"よろしくお願いします！"}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1">
          <div className="grid gap-y-1">
            <p className="text-xs">{"食べ物"}</p>
            <ProfilePopoverForm title="Twitter" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"飲み物"}</p>
            <ProfilePopoverForm title="Twitter" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"映画"}</p>
            <ProfilePopoverForm title="Twitter" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"有名人"}</p>
            <ProfilePopoverForm title="有名人" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"色"}</p>
            <ProfilePopoverForm title="色" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"ゲーム"}</p>
            <ProfilePopoverForm title="ゲーム" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"どうぶつ"}</p>
            <ProfilePopoverForm title="どうぶつ" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"曲"}</p>
            <ProfilePopoverForm title="曲" className="h-8 flex-1" />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"場所"}</p>
            <ProfilePopoverForm title="場所" className="h-8 flex-1" />
          </div>
        </div>
        <div>
          <p className="text-xs">{"自由記載"}</p>
          <ProfileTextAreaForm title={"自由記載"} />
        </div>
      </div>
    </div>
  )
}
