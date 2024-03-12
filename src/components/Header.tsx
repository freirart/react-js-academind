import { O_PLAY, PlayerMap, X_PLAY } from '@/utils/helper';
import { useState } from 'react';
import TextInput from './TextInput';

interface HeaderProps {
  playersInfo: PlayerMap;
  setPlayerName: Function;
}

export default function Header({
  playersInfo,
  setPlayerName
}: HeaderProps) {
  const [playerBeingEdited, setPlayerBeingEdited] =
    useState<string>();

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

  const onBlur = (newPlayerName?: string) => {
    if (newPlayerName !== undefined) {
      setPlayerName(playerBeingEdited, newPlayerName);
    }
    setPlayerBeingEdited(undefined);
  };

  return (
    <header className="flex justify-center h-1/5">
      <div
        className="self-end flex justify-between flex-nowrap bg-white-blue min-w-[500px]
          rounded-3xl p-2 text-xl shadow-md"
      >
        {Object.entries(playersInfo).map(
          ([playerId, { name, score }]) => {
            const isEditingPlayer = playerBeingEdited == playerId;

            return (
              <div
                key={playerId}
                className="flex justify-between items-center p-2 w-[14.75rem] rounded-3xl
                  bg-light-blue text-special-black font-medium"
              >
                {signMap[playerId]}
                {isEditingPlayer ? (
                  <TextInput defaultValue={name} onBlur={onBlur} />
                ) : (
                  <span
                    onClick={() => setPlayerBeingEdited(playerId)}
                    onBlur={() => onBlur()}
                    className="cursor-pointer"
                  >
                    {name}
                  </span>
                )}
                <span className="font-bold text-white-blue text-2xl">
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
