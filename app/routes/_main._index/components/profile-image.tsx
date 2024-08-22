import * as htmlToImage from "html-to-image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"

export function ProfileImage() {
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
        <button
          type="button"
          onClick={() => handleOnClick(document.getElementById("profile"))}
        >
          {"画像をつくる"}
        </button>
      </DialogTrigger>
      <DialogContent className="w-96 bg-white">
        {imageDataUrl && <img src={imageDataUrl} alt="Generated Profile" />}
      </DialogContent>
    </Dialog>
  )
}
