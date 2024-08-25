import { PlayerMap, PlayerTurn } from '@/utils/helper';

interface FooterProps {
  playersInfo: PlayerMap;
  playHistory: Array<PlayerTurn>;
}

export default function Footer({
  playersInfo,
  playHistory
}: FooterProps) {
  return (
    <footer className="min-h-[128px] w-screen self-end text-center pt-5 max-h-[128px]">
      <div
        className="bg-light-blue dark:bg-special-black mx-auto font-medium md:text-xl
          leading-7 md:leading-9"
      >
        <ul>
          {playHistory.map(({ playerId, x, y }, index) => {
            const opacity = (100 - 20 * index) / 100;

            return (
              <li
                key={index}
                style={{ opacity }}
                className="text-special-black dark:text-white-blue"
              >
                {playersInfo[playerId].name} jogou {x}, {y}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
