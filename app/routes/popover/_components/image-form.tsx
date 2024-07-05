import { ArrowUpFromLineIcon } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "~/components/ui/lib/utils"

type Props = {
  inputColor: string
}

/**
 * アイコン画像をアップロードする
 * @returns
 */
export function ImageForm(props: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [imageSrc, setImageSrc] = useState<string | null>(null)

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
      {!imageSrc && (
        <div
          className={cn(
            "flex h-20 w-full flex-col items-center justify-center rounded-lg",
            props.inputColor,
          )}
        >
          <div>
            <ArrowUpFromLineIcon className="m-auto h-4 w-4 opacity-80" />
            <div className="text-center text-xs opacity-80">{"画像を追加"}</div>
          </div>
        </div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded"
          className="flex h-20 w-full flex-col items-center justify-center rounded-lg"
        />
      )}
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
