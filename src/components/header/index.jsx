import React, {Component} from 'react'

import Logo from '../../assets/images/logo.png'
import './index.scss'

class Header extends Component {
  render() {
    return (
    
     <div className="header">
        <div className="header-left">
          <img src={Logo} alt="log"/>
          <h1>家庭样式阿斯顿发</h1>
        </div>
        <div className="header-right">
          <h1>首页</h1>
          <h1>something to do</h1>
        </div>
     </div>
      
    )
  }
}

export default Header