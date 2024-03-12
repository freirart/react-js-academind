import Board from "@/components/Board";

export default function TicTacToe() {
  return (
    <div className="h-screen bg-light-blue overflow-hidden">
      <header className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto self-end">Header</div>
      </header>
      <Board
        playHistory={[
          { player: "X", x: 1, y: 2 },
          { player: "O", x: 0, y: 0 },
          { player: "O", x: 2, y: 2 },
          { player: "X", x: 0, y: 1 },
        ]}
      />
      <footer className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto">Footer</div>
      </footer>
    </div>
  );
}
