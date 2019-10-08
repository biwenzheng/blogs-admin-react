import React, { Component } from 'react';
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Login from './pages/login/login'
// import Admin from './pages/admin/admin'
import Home from './pages/home/home'
import BlogsCreate from './pages/blogs-create/blogs-create'


export default class App extends Component {
  render(){
    return (
     <BrowserRouter>
      <Switch>
        <Route path = '/login' component = {Login}></Route>
        <Route path = '/' component = {Home}></Route>
        <Route path = '/editor' component = {BlogsCreate}></Route>
      
       {/* <Route path = '/' component = {BlogsCreate}></Route> */}
      </Switch>
        
     </BrowserRouter>
    );
  }
}

