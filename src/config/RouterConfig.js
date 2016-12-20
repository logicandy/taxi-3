import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import OrderPage from '../components/OrderPage/OrderPage';
import SignUp from '../components/SignUpPage/SignUpPage';
import Admin from '../components/Admin/Admin';
import DriversOrder from '../components/Driver/DriversOrder/DriversOrder';
import Dispatcher from '../components/Dispatcher/Dispatcher';
import OrderView from '../components/Driver/OrderView/OrderView';

const RouterConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={OrderPage}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/admin' component={Admin}/>
    <Route path='/drivers'>
      <Route path='order' component={DriversOrder}/>
      <Route path="order/:id" component={OrderView}/>
    </Route>
    <Route path='/dispatcher' component={Dispatcher}/>
  </Router>
);

export default RouterConfig;

