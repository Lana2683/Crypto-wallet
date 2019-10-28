import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Currencies from './component/Currencies';
import CurrencyPage from './component/CurrencyPage';
import Test from './component/Test';
// import {Provider} from './context';

import { Provider } from 'react-redux';
import store from './store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Currencies} />
      <Route exact path='/test' component={Test} />
        <Route exact path='/page' component={CurrencyPage}/>
      </Switch>
      
      {/* <Currencies /> */}
    </div>
     </Router>
    </Provider>
  );
}

export default App;
