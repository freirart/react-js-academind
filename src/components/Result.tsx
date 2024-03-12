import { MouseEventHandler } from "react";

interface ResultProps {
  winner: string | null | undefined;
  restartCbFn: MouseEventHandler;
}

export default function Result({ winner, restartCbFn }: ResultProps) {
  const visible = winner !== undefined;

  if (visible) {
    return (
      <div
        className="fixed z-10 bg-special-black/95 h-screen w-screen flex items-center
          justify-center flex-col"
      >
        <p className="text-white-blue text-4xl font-bold">
          {winner !== null ? `"${winner}" VENCEU!` : "EMPATE!"}
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
