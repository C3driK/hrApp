import { Link, NavLink } from "react-router";

const Header = ({ logo }) => {
  return (
    <header>
      <Link to="/">
        <h1>{logo}</h1>
      </Link>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/add">Add-Employee</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
