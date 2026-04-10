import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Helping Hands</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/causes">Causes</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;