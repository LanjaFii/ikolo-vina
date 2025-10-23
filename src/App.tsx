import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-bounce">
        Bienvenue les Devs 🫶
      </h1>

      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW4zMW4zMDA5ajhyejhnOXI0OXAwYzk3Yzhtcno0dDBheWdoOHd6diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/okfvUCpgArv3y/giphy.gif"
        alt="Gif troll"
        className="w-64 h-64 md:w-96 md:h-96 mb-6 rounded-xl shadow-2xl"
      />

      <p className="text-lg md:text-xl text-white mb-4">
        Ici, chaque clic compte... littéralement !
      </p>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        Cliquez-moi ! Count: {count}
      </button>

      <p className="mt-6 text-sm text-white/80">
        Aza adino ny mamorona branche vo micode ann!! ☕
      </p>
    </div>
  )
}

export default App
