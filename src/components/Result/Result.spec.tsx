import { render } from '@testing-library/react';

import Result from './Result';

import {
  X_PLAY,
  O_PLAY,
  INITIAL_PLAYERS_STATE,
  deepCopy,
  PlayerMap
} from '../../utils/helper';

describe('Result component', () => {
  const restartCbFn = () => {};

  it('should not be displayed if there are no playersInfo', () => {
    const { container } = render(
      <Result playersInfo={{}} restartCbFn={restartCbFn} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should not be displayed if there are no winners neither draws', () => {
    const { container } = render(
      <Result
        playersInfo={INITIAL_PLAYERS_STATE}
        restartCbFn={restartCbFn}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should display "EMPATE!" if both playersInfo "winner" key-value pair is null', () => {
    const playersInfo: PlayerMap = deepCopy(INITIAL_PLAYERS_STATE);

    playersInfo[X_PLAY].winner = null;
    playersInfo[O_PLAY].winner = null;

    const { getByText } = render(
      <Result playersInfo={playersInfo} restartCbFn={restartCbFn} />
    );

    const drawMessage = getByText('EMPATE!');

    expect(drawMessage).toBeInTheDocument();
  });

  it.each([X_PLAY, O_PLAY])(
    `should display '"<player-name>" VENCEU!' when %p wins`,
    (winnerKey: string) => {
      const playersInfo: PlayerMap = deepCopy(INITIAL_PLAYERS_STATE);

      const winnerPlayer = playersInfo[winnerKey];

      winnerPlayer.winner = true;

      const { getByText } = render(
        <Result playersInfo={playersInfo} restartCbFn={restartCbFn} />
      );

      const winMessage = getByText(`"${winnerPlayer.name}" VENCEU!`);

      expect(winMessage).toBeInTheDocument();
    }
  );
});
