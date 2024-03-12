import { PlayerMap } from '@/utils/helper';
import { MouseEventHandler } from 'react';

interface ResultProps {
  playersInfo: PlayerMap;
  restartCbFn: MouseEventHandler;
}

export default function Result({
  playersInfo,
  restartCbFn
}: ResultProps) {
  const players = Object.values(playersInfo);

  const playerToShow = players.find(
    (player) => player.winner !== undefined
  );

  if (playerToShow) {
    return (
      <div
        className="fixed z-10 bg-special-black/95 h-screen w-screen flex items-center
          justify-center flex-col"
      >
        <p className="text-white-blue text-4xl font-bold">
          {playerToShow.winner !== null
            ? `"${playerToShow.name}" VENCEU!`
            : 'EMPATE!'}
        </p>
        <button
          onClick={restartCbFn}
          className="mt-12 text-xl font-medium rounded bg-white-blue text-special-black p-3"
        >
          RECOMEÇAR
        </button>
      </div>
    );
  }

  return null;
}
