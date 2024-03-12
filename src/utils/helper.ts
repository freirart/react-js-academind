export const X_PLAY = "X";
export const O_PLAY = "O";

export interface SignProps {
  invisible?: boolean;
}

export interface PlayerTurn {
  player: string;
  x: number;
  y: number;
}

export const deepCopy = (val: any) => JSON.parse(JSON.stringify(val));

export const winningCombinations = [
  // wins on horizontal line
  [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ],
  [
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
  ],
  // wins on vertical line
  [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
  [
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
  ],
  // wins on diagonal
  [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ],
  [
    { x: 0, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 0 },
  ],
];
