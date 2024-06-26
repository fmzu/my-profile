import { ArrowUpFromLineIcon } from "lucide-react"
import { useCallback, useRef, useState } from "react"
import { Input } from "~/components/ui/input"

/**
 * 指定した画像ファイルの切り抜き開始領域
 */
export const CropImageField = () => {
  const [image, setImage] = useState<string | undefined>(undefined)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const cropperClassName = "react-easy-crop-container"

  /**
   * ファイル選択後の処理
   */
  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
          if (reader.result) {
            setImage(reader.result.toString() || "")
            setIsOpen(true)
            // shadcnのダイアログ上でクロップモーダルが表示されるときに、クロップ領域が正常に描画されるために必要な処理
            setTimeout(() => {
              const element = document.querySelector(`.${cropperClassName}`)
              if (element) {
                setTimeout(() => {
                  element.classList.remove("mt-1")
                }, 100)
                setTimeout(() => {
                  element.classList.add("mt-1")
                }, 200)
              }
            }, 500)
          }
        })
        reader.readAsDataURL(e.target.files[0])
      }
    },
    [],
  )

  return (
    <div className="relative">
      <div className="rounded-lg border p-4">
        <ArrowUpFromLineIcon className="m-auto h-4 w-4 opacity-80" />
        <div className="text-center text-sm opacity-80">
          {"画像アップロード"}
        </div>
      </div>
      <Input
        ref={fileInputRef}
        type="file"
        accept=".webp,.png,.jpeg,.jpg,.gif,.svg,.bmp,.ico,.tiff,.tif,.svgz,.apng,.avif,.jfif,.pjpeg,.pjp,.jpgv,.hdp,.jpe,.jpeg2000,.jxr,.wdp,.jng,.jif,.jfi"
        onChange={onFileChange}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  )
}
function getBase64FromImageUrl(croppedImage: string) {
  throw new Error("Function not implemented.")
}
