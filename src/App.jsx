import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Snm from './components/Snm';
import Sbm from './components/Sbm';
import SbmOri from './components/SbmOriginal';
import SnmOriginal from './components/SnmOriginal';

function App() {
  // Seluruh data camaba
  const [dataMaba, setDataMaba] = useState({});

  return (
    <div className='min-h-screen bg-base-500 font-poppins'>
      <Router>
        <div className='flex justify-center'>
          <Switch>
            <Route exact path='/'>
              <Home dataMaba={dataMaba} setDataMaba={setDataMaba} />
            </Route>
            <Route path='/snm/1'>
              <Snm dataMaba={dataMaba} />
            </Route>
            <Route path='/snm/0'>
              <SnmOriginal dataMaba={dataMaba} />
            </Route>
            <Route path='/sbm/1'>
              <Sbm dataMaba={dataMaba} />
            </Route>
            <Route path='/sbm/0'>
              <SbmOri dataMaba={dataMaba} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
