import { Card, CardContent } from "~/components/ui/card"

export function ProfileCard() {
  return (
    <Card>
      <CardContent className="p-4">
        <div
          className="bg-teal-500"
          style={{
            height: `${257 * 0.8}px`,
            width: `${182 * 0.8}px`,
            boxSizing: "border-box",
          }}
        >
          {"プロフィール帳"}
        </div>
        <div className="flex items-center justify-center">
          <p>{"ユーザ名"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
