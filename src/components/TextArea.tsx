import { useState, ChangeEvent, FocusEventHandler } from 'react';
import { SectionType } from '../types.d';
import { toast } from 'sonner';

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto';
  if (loading === true) return 'Traducciendo...';
  return 'Traducción';
};

const CopyIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};

export const TextArea = ({ type, loading, value, onChange, onBlur }: Props) => {
  const [countLetters, setCountLetters] = useState<number>(0);
  const MAX_LETTERS = 600;
  const getLetterCountColor = (count: number) => {
    if (count > 580) {
      return 'text-red-500';
    } else if (count > 500) {
      return 'text-yellow-500';
    } else {
      return 'text-neutral-700';
    }
  };

  const commonStyles: string = 'w-full max-w-full h-52 text-[24px] min-h-[300px] border mt-3 rounded-lg px-4 py-3 focus:outline-none';
  const style = type === SectionType.From
    ? commonStyles
    : `${commonStyles} bg-gray-100 border-gray-100 border-gray-200 text-[rgb(95,99,104)] border-none pointer-events-none`;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCountLetters(event.target.value.length);
    if (event.target.value.length > MAX_LETTERS) return;
    onChange(event.target.value);
  };

  const onCopy = () => {
    if (value === '') return;
    toast.info('Copied to clipboard');
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="relative">
      <textarea
        className={`${style} ${getLetterCountColor(countLetters)}`}
        placeholder={getPlaceholder({ type, loading })}
        autoFocus={type === SectionType.From}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
      />
      {type === SectionType.From && (<span className="absolute bottom-[15px] right-[15px] text-neutral-700 font-semibold text-[13px]">{countLetters} / {MAX_LETTERS}</span>)}
      {type === SectionType.To && (<button onClick={onCopy} className="absolute text-neutral-700 bottom-[20px] right-[15px] w-[25px] h-[25px] cursor-pointer hover:scale-105 active:scale-100 pointer-events-auto"><CopyIcon /></button>)}
    </div>
  );
};
