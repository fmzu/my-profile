import { useState } from "react"
import { ImageForm } from "./image-form"
import { ProfileFormItemText } from "./profile-form-item-text"
import { ProfileIntroduction } from "./profile-introduction"
import { ProfileTextAreaForm } from "./profile-textarea-form"
import { cn } from "~/components/ui/lib/utils"

type Props = {
  className: string
  inputColor: string
  font: string
  id: string
}

export function ProfileForm(props: Props) {
  const profileItems = [
    { label: "食べ物", slug: "food" },
    { label: "飲み物", slug: "drink" },
    { label: "映画", slug: "movie" },
    { label: "有名人", slug: "celebrity" },
    { label: "色", slug: "color" },
    { label: "ゲーム", slug: "game" },
    { label: "どうぶつ", slug: "animal" },
    { label: "曲", slug: "song" },
    { label: "場所", slug: "place" },
  ]

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
    <div
      id={props.id}
      className={cn(
        "flex flex-col justify-center gap-4 rounded-md p-2",
        props.className,
      )}
      style={{
        height: `${257 * 2}px`,
        width: `${182 * 2}px`,
        boxSizing: "border-box",
        fontFamily: props.font,
      }}
    >
      <div className="flex flex-col gap-y-1">
        <div className="flex">
          <div className="flex w-4/5 flex-col gap-y-1 pr-2">
            <div className="flex items-center gap-x-2">
              <p className="min-w-fit text-xs">{"名前"}</p>
              <ProfileFormItemText
                id={""}
                title="名前"
                className=""
                maxLength={20}
                inputColor={props.inputColor}
                font={props.font}
                value={form.get("name") || ""}
                onChange={(value) => {
                  onChange("name", value)
                }}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-xs">{"Twitter"}</p>
              <ProfileFormItemText
                id={"@"}
                title="Twitter"
                className=""
                maxLength={19}
                inputColor={props.inputColor}
                font={props.font}
                value={form.get("twitter") || ""}
                onChange={(value) => {
                  onChange("twitter", value)
                }}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-xs">{"Instagram"}</p>
              <ProfileFormItemText
                id={"@"}
                title="Instagram"
                className=""
                maxLength={18}
                inputColor={props.inputColor}
                font={props.font}
                value={form.get("instagram") || ""}
                onChange={(value) => {
                  onChange("instagram", value)
                }}
              />
            </div>
          </div>
          <div className="w-1/5">
            <ImageForm inputColor={props.inputColor} font={props.font} />
          </div>
        </div>
      </div>
      <ProfileIntroduction inputColor={props.inputColor} font={props.font} />
      <div className="grid grid-cols-3 gap-x-1 gap-y-1">
        {profileItems.map((item) => (
          <div className="grid gap-y-1" key={item.label}>
            <p className="text-xs">{item.label}</p>
            <ProfileFormItemText
              id={""}
              title={item.label}
              className=""
              maxLength={5}
              inputColor={props.inputColor}
              font={props.font}
              value={form.get(item.slug) || ""}
              onChange={(value) => {
                onChange(item.slug, value)
              }}
            />
          </div>
        ))}
      </div>
      <div>
        <p className="text-xs">{"自由記載"}</p>
        <ProfileTextAreaForm
          title={"自由記載"}
          maxLength={40}
          inputColor={props.inputColor}
          font={props.font}
          value={form.get("free") || ""}
          onChange={(value) => {
            onChange("free", value)
          }}
        />
      </div>
    </div>
  )
}
