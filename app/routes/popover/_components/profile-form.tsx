import { BloodTypeSelect } from "./blood-type-select"
import { DateSelect } from "./date-select"
import { ImageForm } from "./image-form"
import { MbtiSelect } from "./mbti-select"
import { ProfileFormItemText } from "./profile-form-item-text"
import { ProfileTextAreaForm } from "./profile-textarea-form"

export function ProfileForm() {
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
            <div className="flex w-4/5 flex-col gap-y-1 pr-2">
              <div className="flex items-center gap-x-2">
                <p className="min-w-fit text-xs">{"名前"}</p>
                <ProfileFormItemText
                  title="名前"
                  className="flex-1"
                  maxLength={26}
                />
              </div>
              <div className="flex flex-1 items-center gap-x-2">
                <p className="text-xs">{"Twitter"}</p>
                <ProfileFormItemText
                  title="Twitter"
                  className="flex-1"
                  maxLength={25}
                />
              </div>
              <div className="flex flex-1 items-center gap-x-2">
                <p className="text-xs">{"Instagram"}</p>
                <ProfileFormItemText
                  title="Instagram"
                  className="flex-1"
                  maxLength={24}
                />
              </div>
            </div>
            <div className="w-1/5">
              <ImageForm />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"わたしは"}</p>
            <DateSelect className="h-6 flex-1 bg-blue-200 text-xs" />
            <p className="text-xs">{"生まれで、今は"}</p>
            <ProfileFormItemText
              title="現在地"
              className="flex-1"
              maxLength={11}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"に住んでます！"}</p>
            <ProfileFormItemText
              title="現在地"
              className="flex-1"
              maxLength={12}
            />
            <p className="text-xs">{"って呼んでください！"}</p>
            <p className="text-xs">{"血液型は"}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <BloodTypeSelect className="h-6 w-10 flex-none" />
            <p className="text-xs">{"型で、MBTIは"}</p>
            <MbtiSelect className="h-6 w-14 flex-none" />
            <p className="text-xs">{"の、"}</p>
            <ProfileFormItemText
              title="性格"
              className="flex-1"
              maxLength={16}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"な性格です！"}</p>
            <ProfileFormItemText
              title="好きなもの"
              className="flex-1"
              maxLength={24}
            />
            <p className="text-xs">{"が好きです！"}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <p className="text-xs">{"よく"}</p>
            <ProfileFormItemText
              title="活動拠点"
              className="flex-1"
              maxLength={15}
            />
            <p className="text-xs">{"に浮上してます！"}</p>
            <p className="text-xs">{"よろしくお願いします！"}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-1">
          <div className="grid gap-y-1">
            <p className="text-xs">{"食べ物"}</p>
            <ProfileFormItemText
              title="食べ物"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"飲み物"}</p>
            <ProfileFormItemText
              title="飲み物"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"映画"}</p>
            <ProfileFormItemText
              title="映画"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"有名人"}</p>
            <ProfileFormItemText
              title="有名人"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"色"}</p>
            <ProfileFormItemText
              title="色"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"ゲーム"}</p>
            <ProfileFormItemText
              title="ゲーム"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"どうぶつ"}</p>
            <ProfileFormItemText
              title="どうぶつ"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"曲"}</p>
            <ProfileFormItemText
              title="曲"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
          <div className="grid gap-y-1">
            <p className="text-xs">{"場所"}</p>
            <ProfileFormItemText
              title="場所"
              className="h-8 flex-1"
              maxLength={11}
            />
          </div>
        </div>
        <div>
          <p className="text-xs">{"自由記載"}</p>
          <ProfileTextAreaForm title={"自由記載"} maxLength={50} />
        </div>
      </div>
    </div>
  )
}
