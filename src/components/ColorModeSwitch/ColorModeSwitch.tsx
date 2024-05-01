import Image from 'next/image';

interface ColorModeSwitchProps {
  isDarkMode: boolean;
  onToggle: Function;
}

export default function ColorModeSwitch({
  isDarkMode,
  onToggle
}: ColorModeSwitchProps) {
  return (
    <div
      onClick={() => onToggle()}
      className="flex absolute bottom-8 right-8 w-12 h-6 rounded-full
        dark:bg-light-blue bg-special-black cursor-pointer"
    >
      <span
        className={
          `flex justify-center h-6 w-6 rounded-full shadow-lg transition-all
          duration-200 select-none` +
          (isDarkMode ? ' bg-[#FFE483]' : ' ml-6 bg-dark-blue')
        }
      >
        <Image
          src={`/images/${isDarkMode ? 'sun' : 'moon'}.svg`}
          height={18}
          width={18}
          alt="Sun"
        />
      </span>
    </div>
  );
}
