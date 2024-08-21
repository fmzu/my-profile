import type { MetaFunction } from "@remix-run/react"
import { useState } from "react"
import { ProfileForm } from "./components/profile-form"
import { ProfileSheet } from "./components/profile-sheet"
import { SaveButton } from "./components/save-button"
import { SettingPopover } from "./components/setting-popover"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [bgColor, setBgColor] = useState("bg-sky-300")

  const [inputColor, setInputColor] = useState("bg-sky-200")

  const [font, setFont] = useState("serif")

  return (
    <div className="flex flex-col space-y-4 py-8">
      <div className="flex flex-col space-x-2 space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <SettingPopover
              bgColor={bgColor}
              setBgColor={setBgColor}
              inputColor={inputColor}
              setInputColor={setInputColor}
              font={font}
              setFont={setFont}
            />
            <SaveButton />
          </div>
          <ProfileForm
            className={bgColor}
            inputColor={inputColor}
            font={font}
          />
        </div>
        <div className="flex items-center justify-center">
          <ProfileSheet />
        </div>
      </div>
    </div>
  )
}
