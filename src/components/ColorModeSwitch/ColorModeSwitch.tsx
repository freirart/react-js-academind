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
        dark:bg-light-blue dark:text-special-black bg-special-black
        text-white-blue text-center cursor-pointer"
    >
      <span
        className={
          'h-6 w-6 rounded-full shadow-lg transition-all duration-200 ' +
          (isDarkMode ? 'bg-white-blue' : 'ml-6 bg-dark-blue')
        }
      >
        {isDarkMode ? '🌞' : '🌙'}
      </span>
    </div>
  );
}
