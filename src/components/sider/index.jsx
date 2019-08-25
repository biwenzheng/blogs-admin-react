import React, {Component} from 'react'

import './index.scss'
import LeftNav from '../left-nav';
class Sider extends Component {
  render() {
    return (
      <div className="sider">
        <LeftNav></LeftNav>
      </div>

    )
  }
}

export default Sider