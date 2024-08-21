import { Textarea } from "~/components/ui/textarea"

export function LeftFreeDescription() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <p>{"FREE SPACE"}</p>
        <p className="text-xs opacity-80">{"ここは自由に記載してください"}</p>
      </div>
      <Textarea
        placeholder="ここは自由に記載してください"
        className="h-full w-full"
      />
    </div>
  )
}
