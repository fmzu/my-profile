import { Input } from "~/components/ui/input"

export function ProfileSheet() {
  const profileFields = [
    { id: 1, label: "ユーザ名", placeholder: "@ユーザ名" },
    { id: 2, label: "名前", placeholder: "名前" },
    { id: 3, label: "性別", placeholder: "性別" },
    { id: 4, label: "生年月日", placeholder: "生年月日" },
    { id: 5, label: "年齢", placeholder: "年齢" },
    { id: 6, label: "星座", placeholder: "星座" },
    { id: 8, label: "血液型", placeholder: "血液型" },
    { id: 9, label: "現在地", placeholder: "現在地" },
    { id: 10, label: "出身地", placeholder: "出身地" },
    { id: 11, label: "好きなもの", placeholder: "好きなもの" },
    { id: 11, label: "苦手なもの", placeholder: "苦手なもの" },
    { id: 11, label: "自由記載", placeholder: "自由記載" },
  ]

  return (
    <div className="flex flex-col space-y-2">
      {profileFields.map((item) => (
        <div key={item.id} className="flex flex-col">
          <p>{item.label}</p>
          <Input placeholder={item.placeholder} className="flex-1" />
        </div>
      ))}
    </div>
  )
}
