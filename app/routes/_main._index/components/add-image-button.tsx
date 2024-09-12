import { useRef } from "react"
import { Button } from "~/components/ui/button"

type Props = {
  selectImage: string
  setSelectImage: (image: string) => void
}

export function AddImageButton(props: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        props.setSelectImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative">
      {!props.selectImage && (
        <Button
          variant={"outline"}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center text-xs">{"+"}</div>
        </Button>
      )}
      {props.selectImage && (
        <img
          src={props.selectImage}
          alt="Uploaded"
          className="h-20 w-full object-cover"
        />
      )}
      <input
        title="Image Upload"
        ref={fileInputRef}
        type="file"
        accept=".webp,.png,.jpeg,.jpg,.gif,.svg,.bmp,.ico,.tiff,.tif,.svgz,.apng,.avif,.jfif,.pjpeg,.pjp,.jpgv,.hdp,.jpe,.jpeg2000,.jxr,.wdp,.jng,.jif,.jfi"
        onChange={(e) => {
          onFileChange(e)
        }}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
        aria-label="画像をアップロード"
      />
    </div>
  )
}
