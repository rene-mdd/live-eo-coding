import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header-styles.css";
import Admin from "../../pages/admin";
import Dashboard from "../../pages/dashboard";
import Map from "../../pages/map";
import Tasks from "../../pages/tasks";
import Comments from "../../pages/comments";
import Login from "../../pages/login";

export default function Header() {
  return (
    <Router>
      <>
        <nav>
          <Link href="#home" to="/">
            LiveEO
          </Link>
          <div className="header-right">
            <Link to="map">Map</Link>
            <Link to="tasks">Tasks</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="comments">Comments</Link>
            <Link to="admin">Admin</Link>
            <Link to="login">L</Link>
          </div>
        </nav>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/comments" />
          </Route> */}
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Router path="/map">
            <Map />
          </Router>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
