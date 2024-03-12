import { O_PLAY, PlayerMap, X_PLAY } from '@/utils/helper';

export default function Header({
  playersInfo
}: {
  playersInfo: PlayerMap;
}) {
  const signMap: Record<string, React.JSX.Element> = {
    [O_PLAY]: (
      <div className="w-8 h-8 bg-transparent border-[6px] border-dark-blue/90 rounded-full"></div>
    ),
    [X_PLAY]: (
      <div className="w-8 h-2">
        <div className="z-0 rounded fixed bg-special-red/90 w-10 h-2 -rotate-45"></div>
        <div className="z-10 rounded fixed bg-special-red/90 w-10 h-2 rotate-45"></div>
      </div>
    )
  };

  return (
    <header className="flex justify-center h-1/5">
      <div
        className="self-end flex justify-between flex-nowrap bg-white-blue min-w-[500px]
          rounded-3xl p-2"
      >
        {Object.entries(playersInfo).map(
          ([playerId, { name, score }]) => (
            <div
              key={playerId}
              className="flex justify-between items-center p-2 w-[14.75rem] rounded-3xl
                bg-light-blue text-special-black"
            >
              {signMap[playerId]}
              <span className="font-medium text-special-black">
                {name}
              </span>
              <span className="font-bold text-white-blue text-2xl">
                {score}
              </span>
            </div>
          )
        )}
      </div>
    </header>
  );
}
