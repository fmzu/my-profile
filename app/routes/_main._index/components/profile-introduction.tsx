import { useState } from "react"
import { BirthDaySelect } from "./birth-day-select"
import { BloodTypeSelect } from "./blood-type-select"
import { FirstPersonSelect } from "./first-person-select"
import { MbtiSelect } from "./mbti-select"
import { ProfileFormItemText } from "./profile-form-item-text"

type Props = {
  inputColor: string
  font: string
  filter: string
}

export function ProfileIntroduction(props: Props) {
  const [form, setForm] = useState(() => {
    if (typeof localStorage === "undefined") {
      return new Map()
    }

    const object = localStorage.getItem("profile")
    if (object) {
      return new Map(Object.entries(JSON.parse(object)))
    }

    return new Map()
  })

  const onChange = (key: string, value: string) => {
    const draft = form.set(key, value)
    const object = Object.fromEntries(draft.entries())
    localStorage.setItem("profile", JSON.stringify(object))
    setForm(new Map(draft))
  }

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
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"は"}</p>
        <BirthDaySelect
          className="w-14"
          inputColor={props.inputColor}
          font={props.font}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"生まれの"}</p>
        <BloodTypeSelect
          className="w-10 flex-none"
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("blood_type") || ""}
          onChange={(value) => {
            onChange("blood_type", value)
          }}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"です！"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <ProfileFormItemText
          title="現在地"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("live") || ""}
          onChange={(value) => {
            onChange("live", value)
          }}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"に住んでます！"}</p>
        <ProfileFormItemText
          title="ニックネーム"
          className=""
          maxLength={6}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("nickname") || ""}
          onChange={(value) => {
            onChange("nickname", value)
          }}
          filter={props.filter}
        />
      </div>
      <div className="flex items-center gap-x-1">
        <p className="font-bold text-xs">{"って呼んでください！"}</p>
        <ProfileFormItemText
          title="性格"
          className=""
          maxLength={5}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("personality") || ""}
          onChange={(value) => {
            onChange("personality", value)
          }}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"な性格です。MBTIは"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <MbtiSelect
          className="w-14 flex-none"
          inputColor={props.inputColor}
          font={props.font}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"です。"}</p>
        <ProfileFormItemText
          title="好きなもの"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("like") || ""}
          onChange={(value) => {
            onChange("like", value)
          }}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"が好きです！"}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <p className="font-bold text-xs">{"よく"}</p>
        <ProfileFormItemText
          title="活動拠点"
          className=""
          maxLength={8}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("activity_base") || ""}
          onChange={(value) => {
            onChange("activity_base", value)
          }}
          filter={props.filter}
        />
        <p className="font-bold text-xs">{"に浮上してます！"}</p>
        <p className="font-bold text-xs">{"よろしくお願いします！"}</p>
      </div>
    </div>
  )
}
