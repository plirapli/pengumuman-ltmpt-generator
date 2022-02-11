import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Snm from './components/Snm';
import Sbm from './components/Sbm';
import SbmOri from './components/SbmOriginal';

function App() {
  // Seluruh data camaba
  const [dataMaba, setDataMaba] = useState({});

  return (
    <div className='min-h-screen p-4 sm:p-8 bg-base-500 font-poppins'>
      <Router>
        <div className='flex justify-center'>
          <Switch>
            <Route exact path='/'>
              <Home dataMaba={dataMaba} setDataMaba={setDataMaba} />
            </Route>
            <Route path='/snm'>
              <Snm dataMaba={dataMaba} />
            </Route>
            <Route path='/sbm'>
              <Sbm dataMaba={dataMaba} />
            </Route>
            <Route path='/sbmOri'>
              <SbmOri dataMaba={dataMaba} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
