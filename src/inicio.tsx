import { Link } from "react-router-dom";

const Inicio = () => (
  <section className="Home">
    <h3>Hello Home</h3>
    <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/users">Users</Link>
  </li>
  <li>
    <Link to="/hola-mundo">Hello</Link>
  </li>
  </ul>
</nav>
  </section>
)

export default Inicio;