import { useEffect, useState } from 'react';

import {
  INITIAL_PLAYERS_STATE,
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

const getCurrentPlayer = (playHistory: Array<PlayerTurn>) =>
  !playHistory.length || playHistory[0].player === O_PLAY
    ? X_PLAY
    : O_PLAY;

const getPlayersReset = (prevPlayersInfo: PlayerMap, val?: null) => {
  const newPlayersInfo: PlayerMap = deepCopy(prevPlayersInfo);

  for (const playerId in newPlayersInfo) {
    newPlayersInfo[playerId].winner = val;
  }

  return newPlayersInfo;
};

export default function TicTacToe() {
  const [playHistory, setPlayHistory] = useState<PlayerTurn[]>([]);
  const [playersInfo, setPlayersInfo] = useState(
    INITIAL_PLAYERS_STATE
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    () =>
      setIsDarkMode(localStorage.getItem('isDarkMode') === 'true'),
    []
  );

  const handlePlayButtonClickCbFn = (x: number, y: number) => {
    setPlayHistory((prevPlayHistory) => [
      { x, y, player: getCurrentPlayer(prevPlayHistory) },
      ...prevPlayHistory
    ]);
  };

  const handleSwitchColorModeButtonClickCbFn = () => {
    localStorage.setItem('isDarkMode', String(!isDarkMode));

    setIsDarkMode((prevVal) => !prevVal);
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
          getPlayersReset(prevPlayersInfo, null)
        );
      }
    }
  }, [playHistory]);

  const restartCbFn = () => {
    setPlayHistory([]);
    setPlayersInfo(getPlayersReset);
  };

  const setPlayerName = (playerId: string, newName: string) => {
    setPlayersInfo((prevPlayersInfo) => {
      const newPlayersInfo: PlayerMap = deepCopy(prevPlayersInfo);
      newPlayersInfo[playerId].name = newName;

      return newPlayersInfo;
    });
  };

  return (
    <div className={isDarkMode === true ? 'dark' : ''}>
      <Result playersInfo={playersInfo} restartCbFn={restartCbFn} />
      <div
        className="flex flex-col relative justify-center md:justify-normal z-0 h-screen
          bg-light-blue overflow-hidden dark:bg-special-black"
      >
        <Header
          playersInfo={playersInfo}
          setPlayerName={setPlayerName}
          currentPlayer={getCurrentPlayer(playHistory)}
        />
        <Board
          playHistory={playHistory}
          handlePlayButtonClickCbFn={handlePlayButtonClickCbFn}
        />
        <Footer playHistory={playHistory} playersInfo={playersInfo} />
      </div>
      <button
        onClick={() => handleSwitchColorModeButtonClickCbFn()}
        className="absolute bottom-8 right-8 w-8 h-8 rounded-full dark:bg-white-blue
          dark:text-special-black bg-special-black text-white-blue"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
}
