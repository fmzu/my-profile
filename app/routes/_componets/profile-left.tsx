import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Separator } from "~/components/ui/separator"
import { Textarea } from "~/components/ui/textarea"

export function ProfileLeft() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex justify-between">
          <p className="font-bold text-5xl text-teal-400">{"MY PROFILE"}</p>
          <p>{"書いた日"}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <div className="w-4/5 space-y-2">
              <div className="flex w-full items-center space-x-2">
                <p>{"(わたし)の名前は"}</p>
                <Input placeholder="名前を入力してね" className="flex-1" />
              </div>
              <div className="flex w-full items-center space-x-2">
                <Input placeholder="生年月日を入力してね" className="flex-1" />
                <p>{"の"}</p>
                <Input placeholder="星座を入力してね" className="flex-1" />
                <p>{"です。"}</p>
              </div>
              <div className="flex w-full items-center space-x-2">
                <p>{"みんなからは"}</p>
                <Input
                  placeholder="ニックネームを入力してね"
                  className="flex-1"
                />
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
          <Separator />
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"趣味"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"特技"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"出身地"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"マイブーム"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"職業"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/3">
                <Card className="h-20">
                  <CardContent>
                    <p>{"兄弟構成"}</p>
                    <Input />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <div className="flex items-center space-x-2">
              <p>{"FREE SPACE"}</p>
              <p className="text-xs opacity-80">
                {"ここは自由に記載してください"}
              </p>
            </div>
            <Textarea
              placeholder="ここは自由に記載してください"
              className="h-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
