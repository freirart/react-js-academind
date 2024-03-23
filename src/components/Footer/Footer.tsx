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
    <footer className="flex h-1/5 mx-auto w-3/5">
      <div className="mx-auto font-medium text-xl leading-9">
        <ul>
          {playHistory.map((p, index) => {
            const opacity = (100 - 20 * index) / 100;

            return (
              <li
                key={index}
                style={{ opacity }}
                className="text-special-black"
              >
                {playersInfo[p.player].name} jogou {p.x}, {p.y}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
