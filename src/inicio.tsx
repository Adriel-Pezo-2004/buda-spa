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
    <Link to="/services">Servicios</Link>
  </li>
  </ul>
</nav>
  </section>
)

export default Inicio;