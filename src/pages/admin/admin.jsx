import React, { Component } from 'react';
//import { Redirect,Route,Switch } from "react-router-dom";

import Header from '../../components/header';
// import LeftNav from '../../components/left-nav';
//import { Layout } from 'antd';
import Sider from '../../components/sider'
// import BlogsList from '../blogs-list/blogs-list';
// import WroksList from '../works-list/works-list';
// import Resume from '../resume/resume'
import Content from '../../components/content'
import Footer from '../../components/footer'
import './admin.scss'
//const { Footer, /*Sider,*/ Content } = Layout;


export default class Admin extends Component {
  render(){
    return (
 
        <div className = 'layout'>
          <Header>Header</Header>
          <div className="layout-content">
            <Sider/>
            <Content/>
          </div>
         <Footer/>
          </div>
      
      
   
   
    );
  }
}

