type Props = {
  date: string
  name: string
  birthplace: string
  twitterId: string
  instagramId: string
  works: string
  nickname: string
  bloodType: string
  Mbti: string
  personality: string
  favorite: string
  sns: string
  food: string
  drink: string
  movie: string
  celebrity: string
  color: string
  game: string
  animal: string
  brand: string
  place: string
  music: string
  artist: string
  song: string
  freeSpace: string
}

export function ProfileTemplatetwo(props: Props) {
  return (
    <div
      className="flex flex-col space-y-2 border-2 border-gray-300 bg-blue-300 p-8"
      style={{ height: "932px", width: "430px", boxSizing: "border-box" }}
    >
      <div className="flex items-center justify-between">
        <p className="font-bold text-white text-xl">{"PROFILE"}</p>
        <input
          className="h-4 w-24 bg-blue-200 text-Xs"
          value={props.date}
          placeholder="今日の日付"
        />
      </div>
      <div className="flex">
        <div className="flex w-2/3 flex-col space-y-1 pr-2">
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"名前: "}</p>
            <input
              placeholder="名前"
              className="w-48 bg-blue-200 text-xl"
              value={props.name}
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"出身地: "}</p>
            <input
              placeholder="出身地"
              className="w-44 bg-blue-200 text-xl"
              value={props.birthplace}
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"Twitter: "}</p>
            <input
              placeholder="Twitter"
              className="w-44 bg-blue-200 text-xl"
              value={`@${props.twitterId}`}
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"Instagram: "}</p>
            <input
              placeholder="Instagram"
              className="w-40 bg-blue-200 text-xl"
              value={`@${props.instagramId}`}
            />
          </div>
        </div>
        <div className="w-1/3">
          <img src="https://github.com/shadcn.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-1 border-b pb-2">
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"わたしは"}</p>
          <input placeholder="生年月日" className="w-28 bg-blue-200 text-xl" />
          <p className="text-xs">{"生まれの"}</p>
          <input
            placeholder="職業"
            className="w-24 bg-blue-200 text-xl"
            value={props.works}
          />
          <p className="text-xs">{"です！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            placeholder="ニックネーム"
            className="w-32 bg-blue-200 text-xl"
            value={props.nickname}
          />
          <p className="text-xs">{"って呼んでください！"}</p>
          <p className="text-xs">{"血液型は"}</p>
          <input
            placeholder="血液型"
            className="w-16 bg-blue-200 text-xl"
            value={props.bloodType}
          />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"型で、"}</p>
          <p className="text-xs">{"MBTIは"}</p>
          <input
            placeholder="MBTI"
            className="w-16 bg-blue-200 text-xl"
            value={props.Mbti}
          />
          <p className="text-xs">{"です！"}</p>
          <input
            placeholder="性格"
            className="w-40 bg-blue-200 text-xl"
            value={props.personality}
          />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"な性格です！"}</p>
          <input
            placeholder="好きなもの"
            className="w-52 bg-blue-200 text-xl"
            value={props.favorite}
          />
          <p className="text-xs">{"が好きです！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"よく"}</p>
          <input
            placeholder="活動拠点"
            className="w-32 bg-blue-200 text-xl"
            value={props.sns}
          />
          <p className="text-xs">{"に浮上してます！"}</p>
          <p className="text-xs">{"よろしくお願いします！"}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 border-b pb-2">
        <p className="text-sm text-white">{"好きなもの"}</p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"食べ物"}</p>
            <input
              placeholder="食べ物"
              className="w-28 bg-blue-200 text-xl"
              value={props.food}
            />
          </div>
          <div>
            <p className="text-xs">{"飲み物"}</p>
            <input
              placeholder="飲み物"
              className="w-28 bg-blue-200 text-xl"
              value={props.drink}
            />
          </div>
          <div>
            <p className="text-xs">{"映画"}</p>
            <input
              placeholder="映画"
              className="w-28 bg-blue-200 text-xl"
              value={props.movie}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"有名人"}</p>
            <input
              placeholder="有名人"
              className="w-28 bg-blue-200 text-xl"
              value={props.celebrity}
            />
          </div>
          <div>
            <p className="text-xs">{"色"}</p>
            <input
              placeholder="色"
              className="w-28 bg-blue-200 text-xl"
              value={props.color}
            />
          </div>
          <div>
            <p className="text-xs">{"ゲーム"}</p>
            <input
              placeholder="ゲーム"
              className="w-28 bg-blue-200 text-xl"
              value={props.game}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"どうぶつ"}</p>
            <input
              placeholder="どうぶつ"
              className="w-28 bg-blue-200 text-xl"
              value={props.animal}
            />
          </div>
          <div>
            <p className="text-xs">{"ブランド"}</p>
            <input
              placeholder="ブランド"
              className="w-28 bg-blue-200 text-xl"
              value={props.brand}
            />
          </div>
          <div>
            <p className="text-xs">{"場所"}</p>
            <input
              placeholder="場所"
              className="w-28 bg-blue-200 text-xl"
              value={props.place}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"音楽"}</p>
            <input
              placeholder="音楽"
              className="w-28 bg-blue-200 text-xl"
              value={props.music}
            />
          </div>
          <div>
            <p className="text-xs">{"アーティスト"}</p>
            <input
              placeholder="アーティスト"
              className="w-28 bg-blue-200 text-xl"
              value={props.artist}
            />
          </div>
          <div>
            <p className="text-xs">{"曲"}</p>
            <input
              placeholder="曲"
              className="w-28 bg-blue-200 text-xl"
              value={props.song}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-white">{"FREE SPACE"}</p>
          <p className="text-xs opacity-50">{"ここは自由に記載してください"}</p>
        </div>
        <textarea
          placeholder="自由に記載してね！"
          className="h-full w-full bg-blue-200 text-xl"
          value={props.freeSpace}
        />
      </div>
    </div>
  )
}
