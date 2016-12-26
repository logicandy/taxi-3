import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import OrderPage from '../components/OrderPage/OrderPage';
import SignUpPage from '../components/SignUpPage/SignUpPage/SignUpPage';
import AdminPage from '../components/AdminPage/AdminPage';
import DriverPage from '../components/DriverPage/DriverPage/DriverPage';
import DispatcherPage from '../components/DispatcherPage/DispatcherPage';
import Orders from '../components/OrdersPage/OrdersPage';
import OrderViewPage from '../components/DriverPage/OrderViewPage/OrderViewPage';
import DispatcherTabs from '../components/DispatcherTabs/DispatcherTabs';
import DriversList from '../components/DriversList/DriversList'


const RouterConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={OrderPage}/>
    <Route path='/signup' component={SignUpPage}/>
    <Route path='/admin' component={AdminPage}/>
    <Route path='/drivers'>
      <Route path='order' component={DriverPage}/>
      <Route path="order/:id" component={OrderViewPage}/>
    </Route>
    <Route path='/dispatcher' component={DispatcherPage}/>
    <Route path='/orders' component={Orders}/>
  </Router>
);

export default RouterConfig;

