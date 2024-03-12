import Board from "@/components/Board";
import { O_PLAY, PlayerTurn, X_PLAY } from "@/utils/helper";
import { useState } from "react";

export default function TicTacToe() {
  const [playHistory, setPlayHistory] = useState<Array<PlayerTurn>>(
    [],
  );

  const handleClickCbFn = (x: number, y: number) => {
    setPlayHistory((prevPlayHistory) => {
      const currentPlayer =
        !prevPlayHistory.length || prevPlayHistory[0].player == X_PLAY
          ? O_PLAY
          : X_PLAY;

      return [{ x, y, player: currentPlayer }, ...prevPlayHistory];
    });
  };

  return (
    <div className="h-screen bg-light-blue overflow-hidden">
      <header className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto self-end">Header</div>
      </header>
      <Board
        playHistory={playHistory}
        handleClickCbFn={handleClickCbFn}
      />
      <footer className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto">Footer</div>
      </footer>
    </div>
  );
}
