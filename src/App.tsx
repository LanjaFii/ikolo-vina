import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-special-2 to-special-4 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-special-1 mb-6 animate-bounce">
        Bienvenue les Devs 🫶
      </h1>

      <p className="text-lg md:text-xl text-special-5 mb-4">
        Ici, chaque clic compte... littéralement !
      </p>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-6 py-3 bg-special-3 text-primary font-bold rounded-full shadow-lg hover:bg-special-5 hover:scale-110 transition-transform"
      >
        Cliquez-moi ! Count: {count}
      </button>

      <p className="mt-6 text-sm text-special-4">
        Aza adino ny mamorona branche vo micode ann!! ☕
      </p>
    </div>

  )
}

export default App
