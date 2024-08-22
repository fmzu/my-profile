import * as htmlToImage from "html-to-image"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"

export function SaveButton() {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)

  const handleOnClick = async (node: HTMLElement | null) => {
    if (node) {
      try {
        const dataUrl = await htmlToImage.toPng(node)
        setImageDataUrl(dataUrl)
      } catch (error) {
        console.error("oops, something went wrong!", error)
      }
    } else {
      console.error("Element with id 'profile' not found.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          onClick={() => handleOnClick(document.getElementById("profile"))}
        >
          {"保存"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-96 bg-white">
        <p className="font-bold"> {"設定"}</p>
        {imageDataUrl && <img src={imageDataUrl} alt="Generated Profile" />}
      </DialogContent>
    </Dialog>
  )
}
