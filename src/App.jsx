import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Snm from "./components/Snm";
import Sbm from "./components/Sbm";

function App() {
  // Seluruh data camaba
  const [dataMaba, setDataMaba] = useState({});

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-base-500 flex justify-center font-poppins">
      <Router>
        <div className="w-full max-w-screen-sm">
          <ul className="flex mb-6 gap-6">
            <li className="border-b-2 border-black">
              <Link to="/">Home</Link>
            </li>
            <li className="border-b-2 border-black">
              <Link to="/snm">SNMPTN</Link>
            </li>
            <li className="border-b-2 border-black">
              <Link to="/sbm">SBMPTN</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home dataMaba={dataMaba} setDataMaba={setDataMaba} />
            </Route>
            <Route path="/snm">
              <Snm dataMaba={dataMaba} />
            </Route>
            <Route path="/sbm">
              <Sbm dataMaba={dataMaba} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
