import { ProfileImage } from "../_componets/profile-image"
import { useState } from "react"
import { ColorSelects } from "../_componets/color-selects"

export default function PopoverPage() {
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
      {/* <ProfileForm className={bgColor} inputColor={inputColor} /> */}
      <ProfileImage />
    </div>
  )
}
