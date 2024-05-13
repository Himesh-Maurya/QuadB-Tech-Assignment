import './App.css'
import AddTodo from './components/TaskInput'
import Todos from './components/TaskList'

function App() {
  
  return (
    <div  style={{ backgroundColor: '#1A237E',height:'100vh',width:'100vw' }}>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App