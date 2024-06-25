import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"

export function LeftBasicInformation() {
  return (
    <div className="flex space-x-2">
      <div className="w-4/5 space-y-2">
        <div className="flex w-full items-center space-x-2">
          <p>{"(わたし)の名前は"}</p>
          <Input placeholder="名前を入力してね" className="flex-1" />
          <p>{"です。"}</p>
        </div>
        <div className="flex w-full items-center space-x-2">
          <Input placeholder="生年月日を入力してね" className="flex-1" />
          <p>{"の"}</p>
          <Input placeholder="星座を入力してね" className="flex-1" />
          <p>{"です。"}</p>
        </div>
        <div className="flex w-full items-center space-x-2">
          <p>{"みんなからは"}</p>
          <Input placeholder="ニックネームを入力してね" className="flex-1" />
          <p>{"って呼ばれてて、"}</p>
        </div>
        <div className="flex w-full items-center space-x-2">
          <p>{"自分では"}</p>
          <Input placeholder="性格を入力してね" className="flex-1" />
          <p>{"な性格だと思う！"}</p>
        </div>
      </div>
      <div className="w-1/5">
        <Card className="h-32">
          <CardContent>
            <div>{"似顔絵"}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
