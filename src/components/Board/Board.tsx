import { PlayerTurn, deepCopy } from '@/utils/helper';
import PlayButton from '../PlayButton/PlayButton';

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

interface BoardProps {
  playHistory: PlayerTurn[];
  handlePlayButtonClickCbFn: Function;
}

export default function Board({
  playHistory,
  handlePlayButtonClickCbFn
}: BoardProps) {
  const updatedBoard: (string | null)[][] =
    deepCopy(initialBoardState);

  for (const { playerId, x, y } of playHistory) {
    updatedBoard[x][y] = playerId;
  }

  return (
    <main className="flex mx-auto pt-6">
      <div
        className="flex flex-col dark:bg-dark-blue bg-white-blue md:h-[500px] h-[350px]
          md:w-[500px] w-[350px] m-auto md:rounded-3xl rounded-xl md:p-10
          md:divide-y-4 divide-y-2 divide-light-blue/75
          dark:divide-special-black/75 shadow-lg"
      >
        {updatedBoard.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex grow flex-nowrap md:divide-x-4 divide-x-2 divide-light-blue/75
              dark:divide-special-black/75"
          >
            {row.map((col, colIndex) => (
              <PlayButton
                key={colIndex}
                x={rowIndex}
                y={colIndex}
                optionPlayed={col}
                handlePlayButtonClickCbFn={handlePlayButtonClickCbFn}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
