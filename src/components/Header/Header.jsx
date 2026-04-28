import { Link, NavLink } from "react-router";
import "./Header.css"
const Header = () => {
  return (
    <div >
      <h2>This is header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/computer">Computer</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
        <NavLink to="/home">Home</NavLink>
      </nav>
    </div>
  );
};

export default Header;
