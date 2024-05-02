import { render } from '@testing-library/react';

import Footer from './Footer';

import { X_PLAY, O_PLAY } from '../../utils/helper';

describe('TicTacToe Footer component', () => {
  const playersInfo = {
    [X_PLAY]: { name: 'Fulano', score: 0, winner: undefined },
    [O_PLAY]: { name: 'Ciclano', score: 0, winner: undefined }
  };

  const playHistory = [
    {
      playerId: X_PLAY,
      x: 1,
      y: 1
    },
    {
      playerId: O_PLAY,
      x: 0,
      y: 0
    },
    {
      playerId: X_PLAY,
      x: 2,
      y: 1
    },
    {
      playerId: O_PLAY,
      x: 0,
      y: 2
    }
  ];

  it('should render an empty unordered list when not given data', () => {
    const { getByRole, queryByRole } = render(
      <Footer playHistory={[]} playersInfo={{}} />
    );

    const list = getByRole('list');
    const listItem = queryByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItem).not.toBeInTheDocument();
  });

  it('should display the play history when given one', () => {
    const { getByRole, getAllByRole } = render(
      <Footer playHistory={playHistory} playersInfo={playersInfo} />
    );

    const list = getByRole('list');
    const listItems = getAllByRole('listitem');

    expect(list).toBeInTheDocument();

    for (const item of listItems) {
      expect(item).toBeInTheDocument();
    }
  });

  it(`should display "'player' jogou 'x', 'y'" on every item`, () => {
    const { getByRole, getAllByRole } = render(
      <Footer playHistory={playHistory} playersInfo={playersInfo} />
    );

    const list = getByRole('list');
    const listItems = getAllByRole('listitem');

    expect(list).toBeInTheDocument();

    const [xName, oName] = Object.values(playersInfo).map(
      ({ name }) => name
    );

    const itemRegex = new RegExp(
      `(${xName}|${oName}) jogou (0|1|2), (0|1|2)`
    );

    for (const item of listItems) {
      expect(item).toHaveTextContent(itemRegex);
    }
  });

  it('should reduce the opacity by .2 on every item', () => {
    const { getByRole, getAllByRole } = render(
      <Footer playHistory={playHistory} playersInfo={playersInfo} />
    );

    const list = getByRole('list');
    const listItems = getAllByRole('listitem');

    expect(list).toBeInTheDocument();

    let previousOpacity = 1.0;

    for (const item of listItems) {
      const itemOpacity = Number(item.style.opacity);

      expect([1.0, (previousOpacity * 100 - 20) / 100]).toContain(
        itemOpacity
      );

      previousOpacity = itemOpacity;
    }
  });
});
