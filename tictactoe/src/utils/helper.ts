export const X_PLAY = "X";
export const O_PLAY = "O";

export interface SignProps {
  invisible?: boolean;
}

export const deepCopy = (val: any) => JSON.parse(JSON.stringify(val));
