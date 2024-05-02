import React from 'react';
import { O_PLAY, X_PLAY } from '@/utils/helper';
import OSign from '../OSign/OSign';

interface PlayButtonProps {
  optionPlayed: string | null;
  handlePlayButtonClickCbFn: Function;
  x: number;
  y: number;
}

export default function PlayButton({
  optionPlayed,
  handlePlayButtonClickCbFn,
  x,
  y
}: PlayButtonProps) {
  const optionsMap: Record<string, React.JSX.Element> = {
    [O_PLAY]: <OSign />,
    [X_PLAY]: (
      <>
        <div
          className={`z-0 rounded absolute bg-special-red/90 md:w-32 w-28 md:h-3 h-2
            -rotate-45`}
        ></div>
        <div
          className={`z-10 rounded absolute bg-special-red/90 md:w-32 w-28 md:h-3 h-2
            rotate-45`}
        ></div>
      </>
    )
  };

  return (
    <button
      disabled={!!optionPlayed}
      onClick={() => handlePlayButtonClickCbFn(x, y)}
      className="flex items-center justify-center w-full hover:bg-light-blue/15"
    >
      {(optionPlayed !== null && optionsMap[optionPlayed]) || (
        <OSign invisible />
      )}
    </button>
  );
}
