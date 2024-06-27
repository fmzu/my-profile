import { Input } from "~/components/ui/input"
import { ProfileTemplatetwo } from "../_componets/profile-template-two"
import { Textarea } from "~/components/ui/textarea"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { MbtiSelect } from "./_componets/mbti-select"
import { ArrowUpFromLineIcon } from "lucide-react"

export default function Profile() {
  const [date, setDate] = useState("")

  const [name, setName] = useState("")

  const [birthplace, setBirthplace] = useState("")

  const [twitterId, setTwitterId] = useState("")

  const [instagramId, setInstagramId] = useState("")

  const [works, setWorks] = useState("")

  const [nickname, setNickname] = useState("")

  const [bloodType, setBloodType] = useState("")

  const [Mbti, setMbti] = useState("")

  const [personality, setPersonality] = useState("")

  const [favorite, setFavorite] = useState("")

  const [sns, setSns] = useState("")

  const [food, setFood] = useState("")

  const [drink, setDrink] = useState("")

  const [movie, setMovie] = useState("")

  const [celebrity, setCelebrity] = useState("")

  const [color, setColor] = useState("")

  const [game, setGame] = useState("")

  const [animal, setAnimal] = useState("")

  const [brand, setBrand] = useState("")

  const [place, setPlace] = useState("")

  const [music, setMusic] = useState("")

  const [artist, setArtist] = useState("")

  const [song, setSong] = useState("")

  const [freeSpace, setFreeSpace] = useState("")

  return (
    <div className="flex space-x-2">
      <ProfileTemplatetwo
        date={date}
        name={name}
        birthplace={birthplace}
        twitterId={twitterId}
        instagramId={instagramId}
        works={works}
        nickname={nickname}
        bloodType={""}
        Mbti={""}
        personality={personality}
        favorite={favorite}
        sns={sns}
        food={food}
        drink={drink}
        movie={movie}
        celebrity={celebrity}
        color={color}
        game={game}
        animal={animal}
        brand={brand}
        place={place}
        music={music}
        artist={artist}
        song={song}
        freeSpace={freeSpace}
      />
      <div className="flex flex-col space-y-2 p-2">
        <div>
          <p>{"今日の日付"}</p>
          <Input
            placeholder="今日の日付"
            onChange={(e) => {
              setDate(e.target.value)
            }}
            type="date"
          />
        </div>
        <div>
          <p>{"アイコン"}</p>
          <div className="relative">
            <div className="rounded-lg border p-4">
              <ArrowUpFromLineIcon className="m-auto h-4 w-4 opacity-80" />
              <p className="text-center text-sm opacity-80">
                {"画像アップロード"}
              </p>
            </div>
            <Input
              type="file"
              id=""
              name=""
              className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
            />
          </div>
          {/* <CropImageField /> */}
        </div>
        <div>
          <p>{"基本情報"}</p>
          <div className="flex flex-col gap-y-2">
            <Input
              placeholder="名前"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <Input
              placeholder="出身地"
              onChange={(e) => {
                setBirthplace(e.target.value)
              }}
            />
            <Input
              placeholder="Twitter"
              onChange={(e) => {
                setTwitterId(e.target.value)
              }}
            />
            <Input
              placeholder="Instagram"
              onChange={(e) => {
                setInstagramId(e.target.value)
              }}
            />
          </div>
        </div>
        <div>
          <p>{"文章"}</p>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="生年月日" />
            <Input
              placeholder="職業"
              onChange={(e) => {
                setWorks(e.target.value)
              }}
            />
            <Input
              placeholder="ニックネーム"
              onChange={(e) => {
                setNickname(e.target.value)
              }}
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="血液型" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectItem value="A">{"A"}</SelectItem>
                  <SelectItem value="B">{"B"}</SelectItem>
                  <SelectItem value="O">{"O"}</SelectItem>
                  <SelectItem value="AB">{"AB"}</SelectItem>
                  <SelectItem value="other">{"その他"}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <BloodTypeSelect /> */}
            <MbtiSelect />
            <Input placeholder="MBTI" />
            <Input
              placeholder="性格"
              onChange={(e) => {
                setPersonality(e.target.value)
              }}
            />
            <Input
              placeholder="好きなもの"
              onChange={(e) => {
                setFavorite(e.target.value)
              }}
            />
            <Input
              placeholder="活動拠点"
              onChange={(e) => {
                setSns(e.target.value)
              }}
            />
          </div>
        </div>
        <div>
          <p>{"好きなもの"}</p>
          <div className="grid grid-cols-3 gap-2">
            <Input
              placeholder="食べ物"
              onChange={(e) => {
                setFood(e.target.value)
              }}
            />
            <Input
              placeholder="飲み物"
              onChange={(e) => {
                setDrink(e.target.value)
              }}
            />
            <Input
              placeholder="映画"
              onChange={(e) => {
                setMovie(e.target.value)
              }}
            />
            <Input
              placeholder="有名人"
              onChange={(e) => {
                setCelebrity(e.target.value)
              }}
            />
            <Input
              placeholder="色"
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <Input
              placeholder="ゲーム"
              onChange={(e) => {
                setGame(e.target.value)
              }}
            />
            <Input
              placeholder="動物"
              onChange={(e) => {
                setAnimal(e.target.value)
              }}
            />
            <Input
              placeholder="ブランド"
              onChange={(e) => {
                setBrand(e.target.value)
              }}
            />
            <Input
              placeholder="場所"
              onChange={(e) => {
                setPlace(e.target.value)
              }}
            />
            <Input
              placeholder="音楽"
              onChange={(e) => {
                setMusic(e.target.value)
              }}
            />
            <Input
              placeholder="アーティスト"
              onChange={(e) => {
                setArtist(e.target.value)
              }}
            />
            <Input
              placeholder="曲"
              onChange={(e) => {
                setSong(e.target.value)
              }}
            />
          </div>
        </div>
        <div>
          <p>{"FREE SPACE"}</p>
          <Textarea
            placeholder="自由記載"
            onChange={(e) => {
              setFreeSpace(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
function getBase64FromImageUrl(croppedImage: string) {
  throw new Error("Function not implemented.")
}
