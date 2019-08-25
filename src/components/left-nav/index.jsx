import React, {Component} from 'react'

import { Link} from "react-router-dom";
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

/**
 * 左侧导航
 */
class LeftNav extends Component {
  render() {
    return (
    
      <div>
        <Menu
          defaultSelectedKeys={['/blogs']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="/blogs">
            <Link to = '/blogs'>
              <Icon type="pie-chart" />
              <span>我的文章</span>
            </Link>
           
          </Menu.Item>
          {/*<Menu.Item key="/works">
            <Link to = '/works'>
              <Icon type="pie-chart" />
              <span>我的作品</span>
            </Link>
            
          </Menu.Item>
          
          <Menu.Item key="/resume">
            <Link to = '/resume'>
              <Icon type="inbox" />
              <span>我的简历</span>
            </Link>
            
          </Menu.Item>
          
           <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>我的作品</span>
              </span>
            }
          >
            <Menu.Item key="5">作品1</Menu.Item>
            <Menu.Item key="6">作品1</Menu.Item>
            <Menu.Item key="7">作品1</Menu.Item>
            <Menu.Item key="8">作品1</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
      
    )
  }
}

export default LeftNav