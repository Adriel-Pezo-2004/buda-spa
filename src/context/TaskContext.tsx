import { createContext, useState, useEffect } from "react"
import { createServiceRequest, getServiceRequest, deleteServiceRequest, updateServiceRequest } from "../api/service";
import { Service, CreateService, UpdateService } from "../interfaces/service.interface";

interface TaskContextValue{
    services: Service[];
    createService: (service: Service) => Promise<void>;
    deleteTask: (id: String) => Promise<void>;
    updateTask: (id: String, task: UpdateService) => Promise<void>;
}

export const ServiceContext = createContext<TaskContextValue>({
    services: [],
    createService: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {},
})

interface Props {
    children: React.ReactNode
}

export const TaskProvider: React.FC<Props> = ({children}) => {
    const [services, setTasks] = useState<Service[]>([]);

    useEffect(() => {
        getServiceRequest()
        .then((response) => response.json())
        .then((data) => setTasks(data));
    }, []);

    const createService = async (service: CreateService) => {
        const res = await createServiceRequest(service);
        const data = await res.json();
        setTasks([...services, data]);
    }

    const deleteTask = async (id: String) => {
        const res = await deleteServiceRequest(id);
        if (res.status === 204) {
            setTasks(services.filter((tasks) => tasks.code !== id))
        }
    }

    const updateTask = async (id: String, task: UpdateService) => {
        const res = await updateServiceRequest(id, task);
        const data = await res.json();
        console.log(data);
        services.map(task => task.code === id ? {...task, ...data} : services)
    }

    return (
        <ServiceContext.Provider value={{
            services, 
            createService,
            deleteTask,
            updateTask,
        }}>
            {children}
        </ServiceContext.Provider>
    )
}