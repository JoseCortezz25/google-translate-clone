import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../contants'
import { type FC } from 'react'
import { type FromLanguage, type Language, SectionType } from '../types.d'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label >
      <select
        value={value}
        onChange={handleChange}
        id="laguages"
        className="bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key}>{literal}</option>
        ))}
      </select>
    </>
  )
}
