import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import OrderPage from '../components/OrderPage/OrderPage';
import SignUp from '../components/SignUp/SignUp';
import Admin from '../components/Admin/Admin';
import DriversOrder from '../components/Driver/DriversOreder/DriversOrder';
import Dispatcher from '../components/Dispatcher/Dispatcher';

export const RouterConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={OrderPage}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/admin' component={Admin}/>
    <Route path='/drivers/order' component={DriversOrder}/>
    <Route path='/dispatcher' component={Dispatcher}/>
  </Router>
);


