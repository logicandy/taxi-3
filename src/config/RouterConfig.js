import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import OrderPage from '../components/OrderPage/OrderPage';
import SignUp from '../components/SignUpPage/SignUpPage';
import Admin from '../components/Admin/Admin';
import DriversOrder from '../components/Driver/DriversOrder/DriversOrder';
import Dispatcher from '../components/Dispatcher/Dispatcher';
import Orders from '../components/Orders/Orders';

const RouterConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={OrderPage}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/admin' component={Admin}/>
    <Route path='/drivers/order' component={DriversOrder}/>
    <Route path='/dispatcher' component={Dispatcher}/>
    <Route path='/orders' component={Orders}/>
  </Router>
);

export default RouterConfig;

