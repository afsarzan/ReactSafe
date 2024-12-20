import './App.css'
import Todos from './components/Todos'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  return (
    <>
      <Todos />
      <WelcomeMessage user={{
        name: 'Ahsan',
        type: 'admin'
      }} isLoggedIn={true}/> 
    </>
  )
}

export default App
