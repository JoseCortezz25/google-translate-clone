import './App.css'
import { ArrowIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { AUTO_LANGUAGE } from './contants'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <div className="Ap">
      <h1 className="text-4xl">Google Translate Clone</h1>
      <div className="grid grid-cols-3 w-4/5 m-auto">
        <div>
          <h2 className='text-xl font-bold'>From</h2>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage} />
          <textarea
            className='w-full max-w-full h-40 min-h-full max-h-52 border border-gray-200 mt-3 rounded-lg p-4'
            placeholder='Introducir texto'
            autoFocus></textarea>
          {fromLanguage}
        </div>
        <div>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
            className='px-5 py-2 font-bold capitalize rounded disabled:opacity-50'>
            <ArrowIcon />
          </button>
        </div>
        <div>
          <h2 className='text-xl font-bold'>To</h2>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} />
          <textarea
            className='bg-gray-100 w-full max-w-full h-40 min-h-full max-h-52 border border-gray-100 mt-3 rounded-lg p-4'
            placeholder='Traducción'
            ></textarea>
          {toLanguage}
        </div>
      </div>
    </div>
  )
}

export default App
