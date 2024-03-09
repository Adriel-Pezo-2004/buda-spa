import { TaskProvider } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const Service = () => (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
    <div className="bg-gray-950 p-4 w-2/5">
      <h1 className="text-3x1 font-bold text-center block my-2">Servicios</h1>
      <TaskProvider>
        <TaskForm/>
        <TaskList/>
      </TaskProvider>
    </div>
  </div>
)

export default Service;
