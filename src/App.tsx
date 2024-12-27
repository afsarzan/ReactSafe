import { useState } from 'react'
import './App.css'
import PostsPage from './PostsPage'
import AutoCounter from './components/AutoCounter'

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      {showCounter && <AutoCounter />}
      <button onClick={() => {
        setShowCounter(show => !show);
      }}>Toggle Show Counter</button>
      <PostsPage />
    </>
  )
}

export default App
