import { useEffect, useState } from 'react';

import {
  O_PLAY,
  PlayerMap,
  PlayerTurn,
  X_PLAY,
  deepCopy,
  winningCombinations
} from '@/utils/helper';

import Board from '@/components/Board/Board';
import Result from '@/components/Result/Result';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function TicTacToe() {
  const [playHistory, setPlayHistory] = useState<Array<PlayerTurn>>(
    []
  );
  const [playersInfo, setPlayersInfo] = useState<PlayerMap>({
    [X_PLAY]: { score: 0, name: 'Player 1', winner: undefined },
    [O_PLAY]: { score: 0, name: 'Player 2', winner: undefined }
  });

  const getCurrentPlayer = (customPlayHistory = playHistory) =>
    !customPlayHistory.length ||
    customPlayHistory[0].player === O_PLAY
      ? X_PLAY
      : O_PLAY;

  const handleClickCbFn = (x: number, y: number) => {
    setPlayHistory((prevPlayHistory) => [
      { x, y, player: getCurrentPlayer(prevPlayHistory) },
      ...prevPlayHistory
    ]);
  };

  useEffect(() => {
    if (playHistory.length >= 4) {
      let hasResult = false;
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
          hasResult = true;
          setPlayersInfo((prevPlayersInfo) => {
            const newPlayersInfo = deepCopy(prevPlayersInfo);
            newPlayersInfo[lastPlayer].score += 1;
            newPlayersInfo[lastPlayer].winner = true;

            return newPlayersInfo;
          });
          break;
        }
      }

      if (!hasResult && playHistory.length === 9) {
        setPlayersInfo((prevPlayersInfo) =>
          resetWinnerState(prevPlayersInfo, null)
        );
      }
    }
  }, [playHistory]);

  const resetWinnerState = (
    prevPlayersInfo: PlayerMap,
    val?: null
  ) => {
    const newPlayersInfo: PlayerMap = deepCopy(prevPlayersInfo);

    for (const playerId in newPlayersInfo) {
      newPlayersInfo[playerId].winner = val;
    }

    return newPlayersInfo;
  };

  const restartCbFn = () => {
    setPlayHistory([]);
    setPlayersInfo(resetWinnerState);
  };

  const setPlayerName = (playerId: string, newName: string) => {
    setPlayersInfo((prevPlayersInfo) => {
      const newPlayersInfo: PlayerMap = deepCopy(prevPlayersInfo);
      newPlayersInfo[playerId].name = newName;

      return newPlayersInfo;
    });
  };

  return (
    <>
      <Result playersInfo={playersInfo} restartCbFn={restartCbFn} />
      <div className="relative z-0 h-screen bg-light-blue overflow-hidden">
        <Header
          playersInfo={playersInfo}
          setPlayerName={setPlayerName}
          currentPlayer={getCurrentPlayer()}
        />
        <Board
          playHistory={playHistory}
          handleClickCbFn={handleClickCbFn}
        />
        <Footer playHistory={playHistory} playersInfo={playersInfo} />
      </div>
    </>
  );
}
