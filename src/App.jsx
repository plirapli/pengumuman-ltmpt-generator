import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
