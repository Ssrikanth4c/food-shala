import React from 'react'; 
import {Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../components/Auth/auth';
import Register from '../components/Auth/register';
import Menu from '../components/menu/menu';
/**
* @author
* @function Routes
**/

const Routes = (props) => {
  return(
    <>
        <Switch>
            <Redirect exact from='/' to='/home' />
            <Route  path='/menu' render={()=> <Menu />}  />
            <Route  path='/restaurant/login' render={()=> <Auth userType={'restaurant'}/>}  />
            <Route  path='/customer/login' render={()=> <Auth userType={'customer'}/>}  />
            <Route  path='/restaurant/register' render={()=> <Register userType={'restaurant'}/>}  />
            <Route  path='/customer/register' render={()=> <Register userType={'customer'}/>}  />
        </Switch>
    </>
   )
  }


export default Routes;