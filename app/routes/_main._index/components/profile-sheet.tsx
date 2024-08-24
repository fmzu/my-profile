import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

export function ProfileSheet() {
  const profileFields = [
    { id: "userName", label: "ユーザ名", placeholder: "@ユーザ名" },
    { id: "nickname", label: "名前", placeholder: "名前" },
    { id: "gender", label: "性別", placeholder: "性別" },
    { id: "birth", label: "生年月日", placeholder: "生年月日" },
    { id: "old", label: "年齢", placeholder: "年齢" },
    { id: "constellation", label: "星座", placeholder: "星座" },
    { id: "bloodType", label: "血液型", placeholder: "血液型" },
    { id: "live", label: "現在地", placeholder: "現在地" },
    { id: "Birthplace", label: "出身地", placeholder: "出身地" },
    { id: "like", label: "好きなもの", placeholder: "好きなもの" },
    { id: "bad", label: "苦手なもの", placeholder: "苦手なもの" },
    { id: "freeSpace", label: "自由記載", placeholder: "自由記載" },
  ]

  return (
    <div style={{ width: `${182 * 2}px` }} className="space-y-4">
      {profileFields.map((field) => (
        <div key={field.id}>
          <p className="font-bold text-sm">{field.label}</p>
          {field.id === "freeSpace" ? (
            <Textarea placeholder={field.placeholder} className="flex-1" />
          ) : (
            <Input placeholder={field.placeholder} className="flex-1" />
          )}
        </div>
      ))}
    </div>
  )
}
