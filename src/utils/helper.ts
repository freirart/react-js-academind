export const X_PLAY = 'X';
export const O_PLAY = 'O';

export interface PlayerTurn {
  playerId: string;
  x: number;
  y: number;
}

interface PlayerInfo {
  score: number;
  name: string;
  winner: undefined | null | true;
}

export type PlayerMap = Record<string, PlayerInfo>;

export function deepCopy<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}

export const winningCombinations = [
  // wins on horizontal line
  [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 }
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 }
  ],
  [
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 }
  ],
  // wins on vertical line
  [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 }
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 }
  ],
  [
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 }
  ],
  // wins on diagonal
  [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 }
  ],
  [
    { x: 0, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 0 }
  ]
];

export const INITIAL_PLAYERS_STATE: PlayerMap = {
  [X_PLAY]: { score: 0, name: 'Player 1', winner: undefined },
  [O_PLAY]: { score: 0, name: 'Player 2', winner: undefined }
};
