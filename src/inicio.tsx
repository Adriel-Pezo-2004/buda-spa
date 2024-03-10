import { Link } from "react-router-dom";

const Inicio = () => (
  <section className="Home">
    <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
  <li>
    <Link to="/service">Servicios</Link>
  </li>
  </ul>
</nav>
  </section>
)

export default Inicio;