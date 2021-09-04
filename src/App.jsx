import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Snm from "./components/Snm";

function App() {
  // Seluruh data camaba
  const [dataMaba, setDataMaba] = useState({});

  return (
    <div className="min-h-screen p-4 bg-base-500 flex justify-center font-poppins">
      <Router>
        <div className="w-full max-w-screen-sm">
          <ul className="border flex mb-4 p-2">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/snm">SNMPTN</Link>
            </li>
            {/* <li>
              <Link to="/sbm">SBMPTN</Link>
            </li> */}
          </ul>

          <Switch>
            <Route exact path="/">
              <Home dataMaba={dataMaba} setDataMaba={setDataMaba} />
            </Route>
            <Route path="/snm">
              <Snm dataMaba={dataMaba} />
            </Route>
            {/* <Route path="/sbm">
              <SnmLolos />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
