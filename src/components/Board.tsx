import { PlayerTurn, deepCopy } from "@/utils/helper";
import PlayButton from "./PlayButton";

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface BoardProps {
  playHistory?: PlayerTurn[];
  handleClickCbFn: Function;
}

export default function Board({
  playHistory = [],
  handleClickCbFn,
}: BoardProps) {
  const updatedBoard: Array<Array<string | null>> =
    deepCopy(initialBoardState);

  for (const { player, x, y } of playHistory) {
    updatedBoard[x][y] = player;
  }

  return (
    <main className="flex h-3/5 mx-auto">
      <div
        className="flex flex-col bg-white-blue min-h-[500px] min-w-[500px] m-auto
          rounded-3xl p-10 divide-y-4 divide-light-blue/75"
      >
        {updatedBoard.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex grow flex-nowrap divide-x-4 divide-light-blue/75"
          >
            {row.map((col, colIndex) => (
              <PlayButton
                key={colIndex}
                x={rowIndex}
                y={colIndex}
                optionPlayed={col}
                handleClickCbFn={handleClickCbFn}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
