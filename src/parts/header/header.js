import { Link, NavLink } from "react-router-dom";
import "./header-styles.css";

export default function Header() {
  return (
    <nav className="header-nav">
      <div>
        <Link to="/">LiveEO</Link>
      </div>
      <div>
        <NavLink to="map">Map</NavLink>
        <NavLink to="tasks">Tasks</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="comments">Comments</NavLink>
        <NavLink to="admin" className="admin-button">
          Admin
        </NavLink>
        <NavLink to="login" className="login-button">
          L
        </NavLink>
      </div>
    </nav>
  );
}
