import React, { Component } from 'react';

import Header from '../../components/header';

import Sider from '../../components/sider'

import Content from '../../components/content'
import Footer from '../../components/footer'
import './home.scss'

export default class Home extends Component {
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

