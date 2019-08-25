import React, {Component} from 'react'
import { Redirect,Route,Switch } from "react-router-dom";
import BlogsList from '../../pages/blogs-list/blogs-list';
import WorksList from '../../pages/works-list/works-list';
import Resume from '../../pages/resume/resume';
import './index.scss'
class Content extends Component {
  render() {
    return (
    
      <div className="content">
         <Switch>
          <Route path = '/blogs' component = {BlogsList}/>
          <Route path = '/works' component = {WorksList}/>
          <Route path = '/resume' component = {Resume}/>
          <Redirect to = '/blogs'></Redirect>
          </Switch>
      </div>
      
    )
  }
}

export default Content