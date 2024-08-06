import * as htmlToImage from "html-to-image"

export function ProfileImage() {
  return (
    <button
      type="button"
      onClick={() => {
        const node = document.getElementById("profile")

        if (node) {
          htmlToImage
            .toPng(node)
            .then((dataUrl) => {
              const img = new Image()
              img.src = dataUrl
              document.body.appendChild(img)
            })
            .catch((error) => {
              console.error("oops, something went wrong!", error)
            })
        } else {
          console.error("Element with id 'profile' not found.")
        }
      }}
    >
      {"画像をつくる"}
    </button>
  )
}
