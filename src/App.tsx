import './App.css'
import { useStore } from './hooks/useStore'

function App () {
  const { fromLanguage, setFromLanguage } = useStore()

  return (
    <div className="Ap">
      <h1 className="text-4xl">Google Translate Clone</h1>
      <button onClick={() => {
        setFromLanguage('es')
      }}>Cambiar A ESPAÑOL</button>
      <br />
      {fromLanguage}
    </div>
  )
}

export default App
