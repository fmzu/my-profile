import { BirthDaySelect } from "./birth-day-select"
import { BloodTypeSelect } from "./blood-type-select"
import { FirstPersonSelect } from "./first-person-select"
import { MbtiSelect } from "./mbti-select"
import { ProfileFormItemText } from "./profile-form-item-text"

type Props = {
  inputColor: string
  font: string
}

export function ProfileIntroduction(props: Props) {
  return (
    <div className="flex flex-col gap-y-1" style={{ fontFamily: props.font }}>
      <div
        className="flex items-center gap-x-1"
        style={{ fontFamily: props.font }}
      >
        <FirstPersonSelect
          className="w-14 flex-none"
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"は"}</p>
        <BirthDaySelect
          className="w-14"
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"生まれの"}</p>
        <BloodTypeSelect
          className="w-10 flex-none"
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"です！"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <ProfileFormItemText
          id={""}
          title="現在地"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"に住んでます！"}</p>
        <ProfileFormItemText
          id={""}
          title="ニックネーム"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
          font={props.font}
        />
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"って呼んでください！"}</p>
        <ProfileFormItemText
          id={""}
          title="性格"
          className=""
          maxLength={5}
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"な性格です。MBTIは"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <MbtiSelect
          className="w-14 flex-none"
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"です。"}</p>
        <ProfileFormItemText
          id={""}
          title="好きなもの"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"が好きです！"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs">{"よく"}</p>
        <ProfileFormItemText
          id={""}
          title="活動拠点"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
          font={props.font}
        />
        <p className="text-xs">{"に浮上してます！"}</p>
        <p className="text-xs">{"よろしくお願いします！"}</p>
      </div>
    </div>
  )
}
