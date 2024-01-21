import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../contants';
import { type FC, ChangeEvent } from 'react';
import { type FromLanguage, type Language, SectionType } from '../types.d';

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      id="laguages"
      className="bg-white border-2 border-neutral-200/50 font-bold  text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3">
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>{literal}</option>
      ))}
    </select>
  );
};
