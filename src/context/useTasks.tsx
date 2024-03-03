import { useContext } from "react";
import { ServiceContext } from './TaskContext';

export const useService = () => {
    const context = useContext(ServiceContext)
    if (!context) throw new Error('useTasks must be used within a TaskProvider')
    return context 
}