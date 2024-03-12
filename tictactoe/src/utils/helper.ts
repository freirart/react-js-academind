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
