import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export function ItemSelect() {
  const items = [
    { value: "ユーザ名", name: "ユーザ名" },
    { value: "名前", name: "名前" },
    { value: "性別", name: "性別" },
    { value: "生年月日", name: "生年月日" },
    { value: "年齢", name: "年齢" },
    { value: "星座", name: "星座" },
    { value: "血液型", name: "血液型" },
  ]

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="項目" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>{"プロフィール"}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
