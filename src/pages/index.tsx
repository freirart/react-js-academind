import { useEffect, useState } from 'react';
import Board from '@/components/Board';
import {
  O_PLAY,
  PlayerTurn,
  X_PLAY,
  winningCombinations
} from '@/utils/helper';
import Result from '@/components/Result';

export default function TicTacToe() {
  const [playHistory, setPlayHistory] = useState<Array<PlayerTurn>>(
    []
  );
  const [score, setScore] = useState<Record<string, number>>({
    [O_PLAY]: 0,
    [X_PLAY]: 0
  });
  const [winner, setWinner] = useState<undefined | null | string>(
    undefined
  );

  const handleClickCbFn = (x: number, y: number) => {
    setPlayHistory((prevPlayHistory) => {
      const currentPlayer =
        !prevPlayHistory.length ||
        prevPlayHistory[0].player === X_PLAY
          ? O_PLAY
          : X_PLAY;

      return [{ x, y, player: currentPlayer }, ...prevPlayHistory];
    });
  };

  useEffect(() => {
    if (playHistory.length >= 4) {
      if (playHistory.length <= 8) {
        const lastPlayer = playHistory[0].player;
        const plays = playHistory.filter(
          (p) => p.player === lastPlayer
        );

        for (const combination of winningCombinations) {
          const matches = [];

          for (const { x, y } of combination) {
            for (const play of plays) {
              const { x: xPlayed, y: yPlayed } = play;

              if (x === xPlayed && y === yPlayed) {
                matches.push(play);
              }
            }
          }

          if (matches.length === combination.length) {
            setWinner(lastPlayer);
            setScore((prevScore) => ({
              ...prevScore,
              [lastPlayer]: prevScore[lastPlayer] + 1
            }));
            break;
          }
        }
      } else {
        setWinner(null);
      }
    }
  }, [playHistory]);

  const restartCbFn = () => {
    setPlayHistory([]);
    setWinner(undefined);
  };

  return (
    <>
      <Result winner={winner} restartCbFn={restartCbFn} />
      <div className="relative z-0 h-screen bg-light-blue overflow-hidden">
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
    </>
  );
}
