import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SnmGagal from "./components/SnmGagal";
import SnmLolos from "./components/SnmLolos";

function App() {
  return (
    <div className="min-h-screen p-4 bg-base-500 flex justify-center font-poppins">
      <Router>
        <div className="w-full max-w-screen-sm">
          <ul className="border flex mb-4 p-2">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/gagal">Gagal</Link>
            </li>
            <li>
              <Link to="/lolos">Lolos</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/gagal">
              <SnmGagal />
            </Route>
            <Route path="/lolos">
              <SnmLolos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
