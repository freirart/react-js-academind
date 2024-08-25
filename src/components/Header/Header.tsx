import { O_PLAY, PlayerMap, X_PLAY } from '@/utils/helper';
import PlayerNameInputDisplay from './PlayerNameInputDisplay/PlayerNameInputDisplay';

interface HeaderProps {
  playersInfo: PlayerMap;
  setPlayerName: Function;
  currentPlayer: string;
}

export default function Header({
  playersInfo,
  setPlayerName,
  currentPlayer
}: HeaderProps) {
  const signMap: Record<string, React.JSX.Element> = {
    [O_PLAY]: (
      <div
        className="md:w-8 w-6 md:h-8 h-6 bg-transparent border-[4px] md:border-[6px]
          border-dark-blue/90 rounded-full"
      ></div>
    ),
    [X_PLAY]: (
      <div className="w-8 h-2">
        <div
          className="z-0 rounded absolute bg-special-red/90 md:w-10 w-8 md:h-2 h-1
            -rotate-45"
        ></div>
        <div
          className="z-10 rounded absolute bg-special-red/90 md:w-10 w-8 md:h-2 h-1
            rotate-45"
        ></div>
      </div>
    )
  };

  return (
    <header className="flex flex-col justify-center items-center h-1/5">
      <div
        className="flex justify-between flex-nowrap dark:bg-dark-blue bg-white-blue
          md:min-w-[500px] w-[350px] rounded-3xl p-2 md:text-xl shadow-md"
      >
        {Object.entries(playersInfo).map(
          ([playerId, { name: playerName, score }]) => {
            const isCurrentPlayer = currentPlayer === playerId;

            return (
              <div
                key={playerId}
                className={`flex justify-between items-center p-2 md:w-[14.75rem] w-40 rounded-3xl
                dark:bg-special-black bg-light-blue dark:text-white-blue
                text-special-black font-medium transition-none${
                  isCurrentPlayer
                    ? ' rainbow-border dark:dark-rainbow-border'
                    : ' border-[3px] border-light-blue dark:border-special-black'
                }`}
              >
                {signMap[playerId]}
                <PlayerNameInputDisplay
                  playerName={playerName}
                  playerId={playerId}
                  setPlayerName={setPlayerName}
                />
                <span className="font-bold text-white-blue text-lg md:text-2xl">
                  {score}
                </span>
              </div>
            );
          }
        )}
      </div>
    </header>
  );
}
