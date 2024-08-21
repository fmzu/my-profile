import { Input } from "~/components/ui/input"

export function LeftBasicInformation() {
  return (
    <div className="space-y-2">
      <div className="flex w-full items-center space-x-2">
        <p className="text-sm">{"(わたし)の名前は"}</p>
        <Input placeholder="名前を入力してね" className="h-8 flex-1" />
        <p className="text-sm">{"です。"}</p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input placeholder="生年月日を入力してね" className="h-8 flex-1" />
        <p className="text-sm">{"の"}</p>
        <Input placeholder="星座を入力してね" className="h-8 flex-1" />
        <p className="text-sm">{"です。"}</p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <p className="text-sm">{"みんなからは"}</p>
        <Input placeholder="ニックネームを入力してね" className="h-8 flex-1" />
        <p className="text-sm">{"って呼ばれてて、"}</p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <p className="text-sm">{"自分では"}</p>
        <Input placeholder="性格を入力してね" className="h-8 flex-1" />
        <p className="text-sm">{"な性格だと思う！"}</p>
      </div>
    </div>
  )
}
