export function ProfileTemplatetwo() {
  return (
    <div
      className="flex flex-col space-y-2 border-2 border-gray-300 bg-blue-300 p-8"
      style={{ height: "932px", width: "430px", boxSizing: "border-box" }}
    >
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">{"PROFILE"}</p>
        <p className="text-xs opacity-50">{"YY/MM/DD"}</p>
      </div>
      <div className="flex">
        <div className="flex w-2/3 flex-col space-y-1 pr-2">
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"名前: "}</p>
            <input
              placeholder="入力してね"
              className="w-32 bg-blue-200 text-xl"
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"出身地: "}</p>
            <input
              placeholder="入力してね"
              className="w-32 bg-blue-200 text-xl"
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"Twitter: "}</p>
            <input
              placeholder="入力してね"
              className="w-32 bg-blue-200 text-xl"
            />
          </div>
          <div className="flex items-center space-x-2 border-b">
            <p className="text-xs">{"Instagram: "}</p>
            <input
              placeholder="入力してね"
              className="w-32 bg-blue-200 text-xl"
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
          <input placeholder="生年月日" className="w-24 bg-blue-200 text-xl" />
          <p className="text-xs">{"生まれの"}</p>
          <input placeholder="星座" className="w-24 bg-blue-200 text-xl" />
          <p className="text-xs">{"です！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            placeholder="ニックネーム"
            className="w-32 bg-blue-200 text-xl"
          />
          <p className="text-xs">{"って呼んでください！"}</p>
          <input placeholder="血液型" className="w-16 bg-blue-200 text-xl" />
          <p className="text-xs">{"型で、"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"MBTIは"}</p>
          <input placeholder="MBTI" className="w-16 bg-blue-200 text-xl" />
          <p className="text-xs">{"です！"}</p>
          <input placeholder="性格" className="w-32 bg-blue-200 text-xl" />
          <p className="text-xs">{"な性格です！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <input placeholder="職業" className="w-32 bg-blue-200 text-xl" />
          <p className="text-xs">{"で、"}</p>
          <input
            placeholder="好きなもの"
            className="w-32 bg-blue-200 text-xl"
          />
          <p className="text-xs">{"が好きです！"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs">{"よく"}</p>
          <input placeholder="活動拠点" className="w-32 bg-blue-200 text-xl" />
          <p className="text-xs">{"に浮上してます！"}</p>
          <p className="text-xs">{"よろしくお願いします！"}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 border-b pb-2">
        <p className="text-sm">{"好きなもの"}</p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"食べ物"}</p>
            <input placeholder="食べ物" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"飲み物"}</p>
            <input placeholder="飲み物" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"映画"}</p>
            <input placeholder="映画" className="w-28 bg-blue-200 text-xl" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"有名人"}</p>
            <input placeholder="有名人" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"色"}</p>
            <input placeholder="色" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"ゲーム"}</p>
            <input placeholder="ゲーム" className="w-28 bg-blue-200 text-xl" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"どうぶつ"}</p>
            <input
              placeholder="どうぶつ"
              className="w-28 bg-blue-200 text-xl"
            />
          </div>
          <div>
            <p className="text-xs">{"ブランド"}</p>
            <input
              placeholder="ブランド"
              className="w-28 bg-blue-200 text-xl"
            />
          </div>
          <div>
            <p className="text-xs">{"場所"}</p>
            <input placeholder="場所" className="w-28 bg-blue-200 text-xl" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-xs">{"音楽"}</p>
            <input placeholder="音楽" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"バンド"}</p>
            <input placeholder="バンド" className="w-28 bg-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-xs">{"曲"}</p>
            <input placeholder="曲" className="w-28 bg-blue-200 text-xl" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm">{"FREE SPACE"}</p>
        <textarea
          placeholder="自由に記載してね！"
          className="h-full w-full bg-blue-200 text-xl"
        />
      </div>
    </div>
  )
}
