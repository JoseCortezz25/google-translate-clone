import { FocusEventHandler, MouseEvent } from 'react';
import { ArrowIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { TextArea } from './components/TextArea';
import { AUTO_LANGUAGE } from './contants';
import { useStore } from './hooks/useStore';
import { translate } from './services/translate';
import { SectionType } from './types.d';
import { Layout } from './layouts/Layout';
import './App.css';

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
  } = useStore();

  const translateText = (event: MouseEvent<HTMLButtonElement> | FocusEventHandler<HTMLTextAreaElement>) => {
    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result == null) return;
        setResult(result);
      })
      .catch(() => { setResult('Error'); });
  };

  return (
    <Layout>
      <div className="App">
        <div className="sm:flex md:flex-col sm:h-auto px-4 xl:px-0">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_10%_1fr] items-center justify-between w-full">
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <button
              disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}
              className="mx-auto px-5 py-2 font-bold capitalize rounded disabled:opacity-50">
              <ArrowIcon />
            </button>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage} />
          </div>

          <div className="flex flex-col md:grid md:grid-cols-[1fr_10%_1fr]">

            <div className="col-start-1 col-end-2">
              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
                loading={loading}
                onBlur={translateText}
              />
            </div>

            <div className="col-start-3 col-end-4">
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />
            </div>

          </div>
        </div>
        <div className="sm:flex sm:h-auto px-4 xl:px-0">
          <button onClick={translateText} className="mt-5 px-7 py-2 uppercase bg-neutral-800 text-white font-bold rounded hover:bg-neutral-700 transition-all ease-out">Traducir</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
