import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"

type Props = {
  text: string
}

export function DetailCard(props: Props) {
  return (
    <Card className="h-20">
      <CardContent>
        <p>{props.text}</p>
        <Input />
      </CardContent>
    </Card>
  )
}
