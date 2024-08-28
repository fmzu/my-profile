import { RotateCcw } from "lucide-react"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"

export function ResetDialog() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const [form, setForm] = useState(() => {
    if (typeof localStorage === "undefined") {
      return new Map()
    }

    const object = localStorage.getItem("profile")
    if (object) {
      return new Map(Object.entries(JSON.parse(object)))
    }

    return new Map()
  })

  const resetLocalStorage = () => {
    localStorage.removeItem("profile")
    setForm(new Map())
  }

  return (
    <Dialog>
      <DialogTrigger asChild onClick={openModal}>
        <Button variant="secondary">
          <RotateCcw className="w-4" />
        </Button>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className="sm:max-w-[425px]">
          <p>{"入力を全てリセットしますか？"}</p>
          <div className="flex justify-end gap-x-1">
            <Button
              variant={"outline"}
              onClick={() => {
                resetLocalStorage()
                closeModal()
              }}
            >
              {"リセット"}
            </Button>
            <Button variant={"secondary"} onClick={closeModal}>
              {"やめる"}
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
