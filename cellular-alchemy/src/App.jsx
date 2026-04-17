import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Biochemistry from './pages/Biochemistry'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // do something here (fetch data, subscribe, etc.)

    return () => {
      // cleanup (runs on unmount)
    }
  }, []) // empty array = runs once on mount

  return (
    <>
      <header>
        <h1>Cellular Alchemy</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biochemistry" element={<Biochemistry />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Cellular Alchemy Rx</p>
        <p><a href="#">Privacy Policy</a></p>
      </footer>
    </>
  )
}

export default App
