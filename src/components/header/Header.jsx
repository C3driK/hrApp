import { Link, NavLink } from "react-router";
import "./header.css";

const Header = ({ logo }) => {
  return (
    <header>
      <Link to="/">
        <h1>{logo}</h1>
      </Link>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/employees">Employees</NavLink>
          <NavLink to="/add">Add-Employee</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
