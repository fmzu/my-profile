import { BloodTypeSelect } from "./blood-type-select"
import { DateSelect } from "./date-select"
import { MbtiSelect } from "./mbti-select"
import { ProfilePopoverForm } from "./profile-popover-form"
import { ProfileTextAreaForm } from "./profile-textarea-form"

export function ProfilePopover() {
  return (
    <div
      id="profile"
      className="flex flex-col space-y-2 border-2 border-gray-300 bg-blue-300 p-4"
      style={{
        height: `${257 * 2}px`,
        width: `${182 * 2}px`,
        boxSizing: "border-box",
      }}
    >
      <div className="flex">
        <div className="flex w-2/3 flex-col space-y-1 pr-2">
          <div className="flex items-center space-x-2 border-b">
            <p className="min-w-fit text-xs">{"名前: "}</p>
            <ProfilePopoverForm title="名前" className="w-full" />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="min-w-fit text-xs">{"出身地: "}</p>
            <ProfilePopoverForm title="出身地" className="w-full" />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="min-w-fit text-xs">{"Twitter: "}</p>
            <ProfilePopoverForm title="Twitter" className="w-full" />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="min-w-fit text-xs">{"Instagram: "}</p>
            <ProfilePopoverForm title="Instagram" className="w-full" />
          </div>
        </div>
        <div className="w-1/3">
          <input className="h-28 w-full rounded-md bg-blue-200" />
        </div>
      </div>
      <div className="flex flex-col space-y-1 border-b pb-2">
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"わたしは"}</p>
          <DateSelect className="h-6 w-28 bg-blue-200 text-xs" />
          <p className="text-xs">{"生まれの"}</p>
          <ProfilePopoverForm title="職業" className="w-24" />
          <p className="text-xs">{"です！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <ProfilePopoverForm title="ニックネーム" className="w-32" />
          <p className="text-xs">{"って呼んでください！"}</p>
          <p className="text-xs">{"血液型は"}</p>
          <BloodTypeSelect className="h-6 w-16" />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"型で、"}</p>
          <p className="text-xs">{"MBTIは"}</p>
          <MbtiSelect className="h-6 w-20" />
          <p className="text-xs">{"の、"}</p>
          <ProfilePopoverForm title="性格" className="w-36" />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"な性格です！"}</p>
          <ProfilePopoverForm title="好きなもの" className="w-52" />
          <p className="text-xs">{"が好きです！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"よく"}</p>
          <ProfilePopoverForm title="活動拠点" className="w-32" />
          <p className="text-xs">{"に浮上してます！"}</p>
          <p className="text-xs">{"よろしくお願いします！"}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 border-b pb-2">
        <p className="text-white">{"好きなもの"}</p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"食べ物"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="食べ物" />
          </div>
          <div>
            <p className="text-xs">{"飲み物"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="飲み物" />
          </div>
          <div>
            <p className="text-xs">{"映画"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="映画" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"有名人"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="有名人" />
          </div>
          <div>
            <p className="text-xs">{"色"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="色" />
          </div>
          <div>
            <p className="text-xs">{"ゲーム"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="ゲーム" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"どうぶつ"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="どうぶつ" />
          </div>
          <div>
            <p className="text-xs">{"ブランド"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="ブランド" />
          </div>
          <div>
            <p className="text-xs">{"場所"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="場所" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"音楽"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="音楽" />
          </div>
          <div>
            <p className="text-xs">{"アーティスト"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="アーティスト" />
          </div>
          <div>
            <p className="text-xs">{"曲"}</p>
            <ProfilePopoverForm className="h-8 w-28" title="曲" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-white">{"FREE SPACE"}</p>
          <p className="text-xs opacity-50">{"ここは自由に記載してください"}</p>
        </div>
        <ProfileTextAreaForm title="自由記載" />
      </div>
    </div>
  )
}
