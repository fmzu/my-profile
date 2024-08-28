import type { MetaFunction } from "@remix-run/react"
import { useState } from "react"
import { ProfileForm } from "./components/profile-form"
import { ProfileSheet } from "./components/profile-sheet"
import { SaveDialog } from "./components/save-dialog"
import { SettingPopover } from "./components/setting-popover"
import { ResetDialog } from "./components/reset-dialog"

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

  const id = "profile"

  return (
    <div className="flex flex-col space-y-4 py-8">
      <div className="flex flex-col space-x-2 space-y-4">
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex space-x-2">
            <SettingPopover
              bgColor={bgColor}
              setBgColor={setBgColor}
              inputColor={inputColor}
              setInputColor={setInputColor}
              font={font}
              setFont={setFont}
            />
            <SaveDialog id={id} />
            <ResetDialog />
          </div>
          <ProfileForm
            className={bgColor}
            inputColor={inputColor}
            font={font}
            id={id}
          />
        </div>
        <div className="flex items-center justify-center">
          <ProfileSheet />
        </div>
      </div>
    </div>
  )
}
