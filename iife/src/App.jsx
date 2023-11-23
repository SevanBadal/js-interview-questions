import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // declare state
  const [likes, setLikes] = useState(0)

  // use IIFE to "fetch" async data for the FIRST RENDER ONLY
  useEffect(() => {
    (async () => {
      const fetch = new Promise(resolve => {
          setTimeout(() => {
            resolve(8888)
          }, 2000)
        })
      const likes = await fetch
      setLikes(likes)
    })()
  },[])  // empty dependency array means this useEffect only runs its callback on the first render

  return (
    <>
      {likes || "...loading"}
      <button onClick={() => {
        setLikes(prev => prev + 1)
      }}>like</button>
    </>
  )
}

export default App
