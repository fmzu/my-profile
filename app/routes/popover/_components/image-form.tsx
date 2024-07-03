import { ArrowUpFromLineIcon } from "lucide-react"
import { useRef, useState } from "react"

export function ImageForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const cropperClassName = "react-easy-crop-container"

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative">
      <div className="rounded-lg border p-4">
        <ArrowUpFromLineIcon className="m-auto h-4 w-4 opacity-80" />
        <div className="text-center text-sm opacity-80">
          {"画像アップロード"}
        </div>
        {imageSrc && <img src={imageSrc} alt="Uploaded" className="mt-4" />}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept=".webp,.png,.jpeg,.jpg,.gif,.svg,.bmp,.ico,.tiff,.tif,.svgz,.apng,.avif,.jfif,.pjpeg,.pjp,.jpgv,.hdp,.jpe,.jpeg2000,.jxr,.wdp,.jng,.jif,.jfi"
        onChange={onFileChange}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  )
}
