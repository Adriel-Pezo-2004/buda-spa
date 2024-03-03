import { ChangeEvent, FormEvent, useState } from "react";
import { useService } from "../context/useTasks";

function TaskForm() {
  const [services, setService] = useState({
    code: "",
    name: "",
    price: 0,
    active: false,
  });

  const {createService} = useService()

  const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setService({...services,[e.target.name]: e.target.value})
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createService(services);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="code" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" placeholder="Código" onChange={handleChange}/>
        <input type="text" name="name" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" placeholder="Servicio" onChange={handleChange}/>
        <input type="number" name="price" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" placeholder="Precio" onChange={handleChange}></input>
        <input type="checkbox" name="active" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 my-2" onChange={handleChange}></input>
        <span>Active</span>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  )
}

export default TaskForm
