export default function TicTacToe() {
  return (
    <div className="h-screen flex flex-col bg-light-blue overflow-hidden">
      <header className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto self-end">Header</div>
      </header>
      <main className="flex-1 flex w-3/5 h-3/5 mx-auto">
        <div
          className="flex justify-center items-center bg-white-blue min-h-[500px]
            min-w-[500px] m-auto rounded-3xl p-10"
        >
          Board
        </div>
      </main>
      <footer className="flex h-1/5 mx-auto w-3/5">
        <div className="mx-auto">Footer</div>
      </footer>
    </div>
  );
}
