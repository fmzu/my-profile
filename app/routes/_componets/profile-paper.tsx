import { Input } from "~/components/ui/input"

export function ProfilePaper() {
  return (
    <div className="flex flex-col space-y-2">
      <div>
        <p>{"ユーザ名"}</p>
        <Input placeholder="@ユーザ名" className="flex-1" />
      </div>
      <div>
        <p>{"名前"}</p>
        <Input placeholder="名前" className="flex-1" />
      </div>
      <div>
        <p>{"性別"}</p>
        <Input placeholder="性別" className="flex-1" />
      </div>
    </div>
  )
}
