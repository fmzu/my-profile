import type { MetaFunction } from "@remix-run/react"
import { useState } from "react"
import { ColorSelects } from "./popover/_components/color-selects"
import { ProfileForm } from "./popover/_components/profile-form"
import { ProfileImage } from "./popover/_components/profile-image"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  // 背景色を管理する状態
  const [bgColor, setBgColor] = useState("bg-sky-300")

  const [inputColor, setInputColor] = useState("bg-sky-200")

  return (
    <div className="flex flex-col items-center space-y-2 pt-8">
      <ColorSelects
        bgColor={bgColor}
        setBgColor={setBgColor}
        inputColor={inputColor}
        setInputColor={setInputColor}
      />
      <ProfileForm className={bgColor} inputColor={inputColor} />
      <ProfileImage />
    </div>
  )
}
