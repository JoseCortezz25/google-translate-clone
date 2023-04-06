import './App.css'
import { ArrowIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { AUTO_LANGUAGE } from './contants'
import { useStore } from './hooks/useStore'
import { SectionType } from './types.d'

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading
  } = useStore()

  return (
    <div className="Ap">
      <h1 className="text-4xl">Google Translate Clone</h1>
      <div className="sm:flex">
        <div className='sm:grow'>
          {/* <h2 className='text-xl font-bold'>From</h2> */}
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage} />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
            loading={loading}
          />
          {/* {fromLanguage} */}
        </div>
        <div className='sm:flex-none'>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
            className='mt-7 px-5 py-2 font-bold capitalize rounded disabled:opacity-50'>
            <ArrowIcon />
          </button>
        </div>
        <div className='sm:grow'>
          {/* <h2 className='text-xl font-bold'>To</h2> */}
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} />

          <TextArea
            type={SectionType.To}
            value={result}
            onChange={setResult}
            loading={loading}
          />
          {/* {toLanguage} */}
        </div>
      </div>
    </div>
  )
}

export default App
