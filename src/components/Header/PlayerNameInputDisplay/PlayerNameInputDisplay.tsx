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
  const [isEditingName, setIsEditingName] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onBlur = () => {
    setPlayerName(playerId, inputValue || playerName);
    setIsEditingName(false);
  };

  return (
    <>
      {isEditingName ? (
        <input
          autoFocus
          onBlur={() => onBlur()}
          onKeyDown={(e) => (e.key === 'Enter' ? onBlur() : {})}
          type="text"
          className="md:w-36 w-24 text-center dark:bg-special-black bg-light-blue
            dark:text-white-blue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <span
          onClick={() => setIsEditingName(true)}
          className="hover:text-special-black/30 dark:hover:text-light-blue/30"
        >
          {playerName}
        </span>
      )}
    </>
  );
}
