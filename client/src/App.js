import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes/Routes';


// Redux
import { Provider } from 'react-redux';
import store from './store';

import Landing from './components/Landing/Landing'

import Navbar from './components/Navbar/Navbar';


import './App.css'


function App(props) {


  // const [filterOptions, setFilter] = useState({
  //   ContractType: '',
  //   ContactLength: '',
  //   Prov: '',
  //   QuickFilters: '',
  //   Other: '',
  // })

  // const {ContractType, ContactLength, Prov, QuickFilters, Other} = filterOptions;


  // Search Filters
  //    Show All
  //    No Deposit / Poor Credit
  //    No Contract
  return (
    <Provider store={store}>
      {/* <Navbar/> */}
      
      <Router>
        <div className="App">
          
          <Switch>
              <Route exact path='/:id/' component={Landing}/>
              <Route component={Routes}/>
          </Switch>
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
