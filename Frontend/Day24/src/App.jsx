import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import { Home, About, Profile, Dashboard } from "./component";

function App() {
  const [log, setLog] = useState(false);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {log === true ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home log={log} setLog={setLog} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {log === true ? (
            <>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </>
          ) : (
            ""
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;