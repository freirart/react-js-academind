import { FocusEventHandler, useState } from 'react';

interface TextInputProps {
  onBlur: Function;
  defaultValue: string;
}

export default function TextInput({
  onBlur,
  defaultValue
}: TextInputProps) {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  return (
    <input
      autoFocus
      onBlur={() => onBlur(inputValue)}
      onKeyDown={(e) => (e.key === 'Enter' ? onBlur(inputValue) : {})}
      type="text"
      className="md:w-36 w-28 text-center bg-light-blue"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
