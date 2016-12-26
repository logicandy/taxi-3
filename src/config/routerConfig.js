import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import OrderPage from '../components/OrderPage/OrderPage';
import SignInPage from '../components/SignInPage/SignInPage';
import AdminPage from '../components/AdminPage/AdminPage/AdminPage';
import DriverPage from '../components/DriverPage/DriverPage/DriverPage';
import DispatcherPage from '../components/DispatcherPage/DispatcherPage';
import OrderViewPage from '../components/DriverPage/OrderViewPage/OrderViewPage';
import AdminLoadDataTool from '../components/AdminPage/AdminLoadDataTool/AdminLoadDataTool';
import AdminEditTool from '../components/AdminPage/AdminEditTool/AdminEditTool';
import AdminCreateTool from '../components/AdminPage/AdminCreateTool/AdminCreateTool';


const RouterConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={OrderPage}/>
    <Route path='/signin/' component={SignInPage}/>
    <Route path='/admin/' component={AdminPage}>
      <Route path='/admin/:entity' component={AdminLoadDataTool}/>
      <Route path='/admin/:entity/edit/:id' component={AdminEditTool}/>
      <Route path='/admin/:entity/create' component={AdminCreateTool}/>
    </Route>
    <Route path='/driver/' component={DriverPage}/>
    <Route path='/driver/order/:id' component={OrderViewPage}/>
    <Route path='/dispatcher/' component={DispatcherPage}/>
  </Router>
);

export default RouterConfig;

