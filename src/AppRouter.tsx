import { createBrowserRouter }  from 'react-router-dom';
import App from "./App.tsx";
import Inicio from "./inicio.tsx";
import Service from "./service.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "", element: <Inicio />},
      { path: "/service", element: <Service />}
    ]
  }
])

