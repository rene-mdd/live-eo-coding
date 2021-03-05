import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./parts/header/header";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/dashboard/dashboard";
import Map from "./pages/map/map";
import Tasks from "./pages/tasks/tasks";
import Comments from "./pages/comments/comments";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

// var hello = "hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
