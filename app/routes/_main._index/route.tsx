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

  const [backgroundValue, setBackgroundValue] = useState("")

  const handleValueChange = (value: string) => {
    setBackgroundValue(value)
  }
  const backgroundImage =
    "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGy96X-nCezuzYLVZhZQNTKmBBwqwQs11dJphVylPeDNPD_nsWftuFF_fAP17pbTI2H9WqJkp9OCUVAIgpOsZKMUZ4omzAMy1oPE16TUa3kV9_0VPNwHd-8wz4yHuE9ZmBDgBGtIDBDCWchd6-EbMGHRGlcjzNqDDszuzqmqTJRGgBPsbKRnz5gK2-FMtmcq_KxuOoSqJii7tqYJi78p4_xMQiiVXvDtfRLGDrYGK6Wfcj76KL8xfsxwHsfTETr926L6U1d9QtWHmUmWuudRzxzkTOi6FP5eZA4X4MBySzrXtzA1UGVK_2uXH9m2cDcNmDQ==/11_happy-shiba-inu-dog-on-yellow.jpg.webp?errorImage=false"

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
            />
            <SaveDialog id={id} />
            <ResetDialog />
          </div>
          <ProfileForm
            className={bgColor}
            inputColor={inputColor}
            font={font}
            id={id}
            backgroundImage={backgroundImage}
            filter={backgroundValue}
          />
        </div>
        <div className="flex items-center justify-center">
          <ProfileSheet />
        </div>
      </div>
    </div>
  )
}
