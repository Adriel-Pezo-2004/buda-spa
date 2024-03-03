import { CreateService, UpdateService } from "../interfaces/service.interface" 
const API = 'https://sa-east-1.aws.data.mongodb-api.com/app/data-vmwpk/endpoint/api'

export const createServiceRequest = (task:CreateService) => 
    fetch(`${API}/service`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers:{
            'Content-Type': 'application/json'
        }
    })

export const getServiceRequest = () => fetch(`${API}/service`)

export const deleteServiceRequest = (id: String) => 
    fetch(`${API}/service/${id}`, {
        method: 'DELETE',
})

export const updateServiceRequest = (id: String, task: UpdateService) => 
    fetch(`${API}/service/${id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
        }
})
