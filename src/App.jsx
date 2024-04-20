import './App.css'
import AddTodo from './modules/totos/AddToto'
import Todos from './modules/totos/Todos'

function App() {
  return (
    <div>
      <h1 className='text-orange-600 text-lg'>This is redux app on vite</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
