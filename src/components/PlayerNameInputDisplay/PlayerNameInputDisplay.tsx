import { useState } from 'react';

interface PlayerNameInputDisplayProps {
  playerName: string;
  playerId: string;
  setPlayerName: Function;
}

export default function PlayerNameInputDisplay({
  playerName,
  playerId,
  setPlayerName
}: PlayerNameInputDisplayProps) {
  const [playerBeingEdited, setPlayerBeingEdited] =
    useState<string>();
  const [inputValue, setInputValue] = useState<string>('');

  const onBlur = (newPlayerName?: string) => {
    if (newPlayerName !== undefined) {
      setPlayerName(playerBeingEdited, newPlayerName);
    }
    setPlayerBeingEdited(undefined);
  };

  const isEditingPlayer = playerBeingEdited == playerId;

  return (
    <>
      {isEditingPlayer ? (
        <input
          autoFocus
          onBlur={() => onBlur(inputValue || playerName)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? onBlur(inputValue) : {}
          }
          type="text"
          className="md:w-36 w-24 text-center dark:bg-special-black bg-light-blue
            dark:text-white-blue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <span
          onClick={() => setPlayerBeingEdited(playerId)}
          onBlur={() => onBlur()}
          className="hover:text-special-black/30 dark:hover:text-light-blue/30"
        >
          {playerName}
        </span>
      )}
    </>
  );
}
