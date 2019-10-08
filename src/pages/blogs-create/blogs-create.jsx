import React, {Component} from 'react'
import {   Button  } from 'antd'
import './blogs-create.scss'


class BlogsCreate extends Component {
  render() {
    return (
    
     <div className="blogs-create">
      <div className="blogs-header">
        <div className="header-left">
          <input className = "title-input" spellCheck = "false"/ >
        </div>
        <div className="header-right">
          <Button type="primary">发布</Button>
        </div>
      
      </div>
      <div className="blogs-content">
        <div className="editor-box common" contentEditable = "plaintext-only"></div>
        <div className="content-preview common"></div>
      </div>
     </div>
      
    ) 
  }
}

export default BlogsCreate