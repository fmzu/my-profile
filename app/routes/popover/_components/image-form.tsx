import { ArrowUpFromLineIcon } from "lucide-react"
import { useRef } from "react"

export function ImageForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const cropperClassName = "react-easy-crop-container"

  return (
    <div className="relative">
      <div className="rounded-lg border p-4">
        <ArrowUpFromLineIcon className="m-auto h-4 w-4 opacity-80" />
        <div className="text-center text-sm opacity-80">
          {"画像アップロード"}
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".webp,.png,.jpeg,.jpg,.gif,.svg,.bmp,.ico,.tiff,.tif,.svgz,.apng,.avif,.jfif,.pjpeg,.pjp,.jpgv,.hdp,.jpe,.jpeg2000,.jxr,.wdp,.jng,.jif,.jfi"
        // onChange={onFileChange}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  )
}
