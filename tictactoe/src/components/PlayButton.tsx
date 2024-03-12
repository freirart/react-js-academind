import React from "react";
import { O_PLAY, X_PLAY } from "@/utils/helper";
import OSign from "./OSign";
import XSign from "./XSign";

export default function PlayButton(props: {
  optionPlayed: string | null;
}) {
  const { optionPlayed } = props;

  const optionsMap: Record<string, React.JSX.Element> = {
    [O_PLAY]: <OSign />,
    [X_PLAY]: <XSign />,
  };

  return (
    <button className="flex items-center justify-center w-full">
      {(optionPlayed != null && optionsMap[optionPlayed]) || (
        <OSign invisible />
      )}
    </button>
  );
}
