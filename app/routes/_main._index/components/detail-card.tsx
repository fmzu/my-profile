import {} from "~/components/ui/card"
import { Textarea } from "~/components/ui/textarea"

type Props = {
  text: string
}

export function DetailCard(props: Props) {
  return (
    <div>
      <p className="text-xs">{props.text}</p>
      <Textarea />
    </div>
  )
}
