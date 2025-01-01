import { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import { getTodos } from './api/todos/todos-api'
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState(0);
  
  useEffect(() => {
    console.log('app mounted')
    getTodos().then((todosFromServer) => {
      console.log({todos: todosFromServer})
      setTodos(todosFromServer);
    })
  }, [])

  useEffect(() => {
    const count = todos.filter(todo => todo.completed).length;
    setFinishedCount(count);
  }, [todos])

  return (
    <>
      <p className='text-2xl'>
        Finished Todos = <span>{finishedCount}</span>
      </p>
      <Todos todoArray={todos} />
    </>
  )
}

export default App
