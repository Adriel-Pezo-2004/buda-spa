import { useService } from "../context/useTasks";
import { Service } from "../interfaces/service.interface";

interface Props {
    service: Service;
}

function TaskItem({ service }: Props) {
    const {deleteTask, updateTask} = useService()
    return (
        <div key={service.code} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
            <div>
                <h1>{service.name}</h1>
                <p>S/ {service.price}</p>
            </div>
            <div className="flex gap-x-2">
                <button onClick={() => {
                    updateTask(service.code, {
                        active: !service.active
                    });
                }}>Update</button>
                <button onClick={async () => {
                    if (!window.confirm('Are you sure you want to delete?')) return;
                    await deleteTask(service.code)
                }}
                >Delete</button>
            </div>
        </div>
  )
}

export default TaskItem
