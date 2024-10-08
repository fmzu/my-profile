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

  const [filter, setFilter] = useState("")

  const handleValueChange = (value: string) => {
    setFilter(value)
  }

  const [bgImage, setBgImage] = useState("")

  const [selectImage, setSelectImage] = useState<string | null>("")

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
              handleValueChange={handleValueChange}
              bgImage={bgImage}
              setBgImage={setBgImage}
              selectImage={selectImage ? selectImage : ""}
              setSelectImage={setSelectImage}
            />
            <SaveDialog id={id} />
            <ResetDialog />
          </div>
          <ProfileForm
            bgColor={bgColor}
            inputColor={inputColor}
            font={font}
            id={id}
            filter={filter}
            backgroundImage={bgImage}
          />
        </div>
        <div className="flex items-center justify-center">
          <ProfileSheet />
        </div>
      </div>
    </div>
  )
}
