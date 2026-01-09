import './App.css'
import StudentList from './components/StudentList'
import TaskManager from './components/TaskManager'
import GreetingMessage from './components/GreetingMessage'
import NumberFilter from './components/NumberFilter'

function App() {
  return (
    <div className="app-container">
      <h1>React Components Demo</h1>
      
      <GreetingMessage />
      <StudentList />
      <TaskManager />
      <NumberFilter />
    </div>
  )
}

export default App
