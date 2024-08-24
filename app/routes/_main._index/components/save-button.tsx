import * as htmlToImage from "html-to-image"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"

type Props = {
  id: string
}

export function SaveButton(props: Props) {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null)

  const handleOnClick = async (node: HTMLElement | null) => {
    if (node) {
      try {
        const dataUrl = await htmlToImage.toPng(node, {
          pixelRatio: 2,
          height: 257 * 2,
          width: 182 * 2,
        })
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
          onClick={() => handleOnClick(document.getElementById(props.id))}
        >
          {"保存"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-96 bg-white">
        <p className="font-bold"> {"保存"}</p>
        {imageDataUrl && <img src={imageDataUrl} alt="Generated Profile" />}
      </DialogContent>
    </Dialog>
  )
}
