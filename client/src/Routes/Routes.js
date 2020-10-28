import React from 'react';
import { Route, Switch } from 'react-router-dom';


import RegistrationLayout from '../components/Registration-Layout/Registration-Layout';

const Routes = () => {
    return (
      <section className='container'>
        <Switch>
          <Route exact path={'/:zipcode/:provider/:page/00:id/:watt'} component={RegistrationLayout}/>
        </Switch>
      </section>
    );
  };
  
  export default Routes;