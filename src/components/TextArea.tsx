import React from 'react'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: undefined
  onChange: (value: string) => void
  value: string
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Traducciendo...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const commonStyles: string = 'w-full max-w-full h-40 min-h-full max-h-52 border mt-3 rounded-lg p-4 resize-none'
  const style = type === SectionType.From
    ? commonStyles
    : `${commonStyles} bg-gray-100 border-gray-100 border-gray-200`

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      className={style}
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      value={value}
      onChange={handleChange}
    />
  )
}
