import { Outlet } from "react-router";
import "./index.css";
import Inicio from "./inicio";

function App() {
  return (
      <div className="App">
        <Inicio />
        <Outlet />
      </div>

  )
}

export default App;
