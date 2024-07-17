import { BirthDaySelect } from "./birth-day-select"
import { BloodTypeSelect } from "./blood-type-select"
import { MbtiSelect } from "./mbti-select"
import { ProfileFormItemText } from "./profile-form-item-text"

type Props = {
  inputColor: string
}

export function ProfileIntroduction(props: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"わたしは"}</p>
        <BirthDaySelect className=" text-xs" inputColor={props.inputColor} />
        <p className="text-xs">{"生まれで、今は"}</p>
        <ProfileFormItemText
          title="現在地"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
        />
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"に住んでます！"}</p>
        <ProfileFormItemText
          title="ニックネーム"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
        />
        <p className="text-xs">{"って呼んでください！"}</p>
        <p className="text-xs">{"血液型は"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <BloodTypeSelect
          className="w-10 flex-none"
          inputColor={props.inputColor}
        />
        <p className="text-xs">{"型で、MBTIは"}</p>
        <MbtiSelect className="w-14 flex-none" inputColor={props.inputColor} />
        <p className="text-xs">{"の、"}</p>
        <ProfileFormItemText
          title="性格"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
        />
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"な性格です！"}</p>
        <ProfileFormItemText
          title="好きなもの"
          className=""
          maxLength={12}
          inputColor={props.inputColor}
        />
        <p className="text-xs">{"が好きです！"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"よく"}</p>
        <ProfileFormItemText
          title="活動拠点"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
        />
        <p className="text-xs">{"に浮上してます！"}</p>
        <p className="text-xs">{"よろしくお願いします！"}</p>
      </div>
    </div>
  )
}
