import type { MetaFunction } from "@remix-run/react"
import { useState } from "react"
import { ColorSelects } from "./_componets/color-selects"
import { ProfileForm } from "./_componets/profile-form"
import { ProfileImage } from "./_componets/profile-image"
import { FontSelects } from "./_componets/font-selects"
import { Header } from "./_componets/header"
import { ProfilePaper } from "./_componets/profile-paper"

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

  const [font, setFont] = useState("serif")

  return (
    <div className="flex flex-col space-y-4">
      <Header />
      <div className="flex flex-col space-x-2 space-y-4 md:flex-row">
        <div className="flex flex-col items-center space-y-2 md:w-1/2">
          <ColorSelects
            bgColor={bgColor}
            setBgColor={setBgColor}
            inputColor={inputColor}
            setInputColor={setInputColor}
          />
          <FontSelects font={font} setFont={setFont} />
          <ProfileForm
            className={bgColor}
            inputColor={inputColor}
            font={font}
          />
          <ProfileImage />
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <ProfilePaper />
        </div>
      </div>
      <Header />
    </div>
  )
}
