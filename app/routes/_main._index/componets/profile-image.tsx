import * as htmlToImage from "html-to-image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"

export function ProfileImage() {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)

  const handleOnClick = (node: HTMLElement | null) => {
    if (node) {
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          setImageDataUrl(dataUrl)
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error)
        })
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
      <DialogContent className="bg-white">
        {imageDataUrl && <img src={imageDataUrl} alt="Generated Profile" />}
      </DialogContent>
    </Dialog>
  )
}
