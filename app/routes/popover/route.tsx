import { ProfileImage } from "./_components/profile-image"
import { ProfileForm } from "./_components/profile-form"
import { ColorSelectButton } from "./_components/color-select-button"
import { useState } from "react"

export default function PopoverPage() {
  // 背景色を管理する状態
  const [bgColor, setBgColor] = useState("bg-blue-300")

  const [inputColor, setInputColor] = useState("bg-blue-200")

  return (
    <div className="flex flex-col items-center space-y-2 pt-8">
      <ColorSelectButton
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
