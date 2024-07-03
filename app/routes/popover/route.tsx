import { ProfileImage } from "./_components/profile-image"
import { ProfileForm } from "./_components/profile-form"
import { ImageForm } from "./_components/image-form"

export default function PopoverPage() {
  return (
    <div>
      <ImageForm />
      <ProfileForm />
      <ProfileImage />
    </div>
  )
}
