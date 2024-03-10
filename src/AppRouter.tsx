import { createBrowserRouter }  from 'react-router-dom';
import App from "./App.tsx";
import Service from "./service.tsx";
import Home from './home.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "", element: <Home />},
      { path: "/service", element: <Service />}
    ]
  }
])

