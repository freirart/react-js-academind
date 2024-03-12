import React from "react";
import { O_PLAY, X_PLAY } from "@/utils/helper";
import OSign from "./OSign";
import XSign from "./XSign";

interface PlayButtonProps {
  optionPlayed: string | null;
  handleClickCbFn: Function;
  x: number;
  y: number;
}

export default function PlayButton({
  optionPlayed,
  handleClickCbFn,
  x,
  y,
}: PlayButtonProps) {
  const optionsMap: Record<string, React.JSX.Element> = {
    [O_PLAY]: <OSign />,
    [X_PLAY]: <XSign />,
  };

  return (
    <button
      disabled={!!optionPlayed}
      onClick={() => handleClickCbFn(x, y)}
      className="flex items-center justify-center w-full"
    >
      {(optionPlayed != null && optionsMap[optionPlayed]) || (
        <OSign invisible />
      )}
    </button>
  );
}
