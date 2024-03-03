import TaskItem from "./TaskItem";
import { useService } from "../context/useTasks";

function TaskList() {
  const {services} = useService()
  
  return (
    <div>
      {services.map((service) => (
        <TaskItem service={service} key={service.code} />
      ))}
    </div>
  );
}

export default TaskList
