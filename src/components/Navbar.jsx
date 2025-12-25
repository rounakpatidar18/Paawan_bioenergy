import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Paawan Bio Energy
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="menu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {["/", "/about", "/products", "/sustainability", "/contact"].map(
              (path, i) => (
                <li className="nav-item" key={i}>
                  <NavLink className="nav-link" to={path}>
                    {path === "/" ? "Home" : path.substring(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
