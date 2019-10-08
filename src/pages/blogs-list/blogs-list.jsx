import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import axios from 'axios';
import './blogs-list.scss'
 const data = [];
class BlogsList extends Component {
  constructor(props){
    super(props)
    this.state={
      data: []
    };
  }

  componentDidMount(){
    const _this=this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
      console.log(response.data)
      _this.setState({
         data:response.data
      });
    })
  }
  render() {
    
    return (
        <div className="blogs-list">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.body}
                />
              </List.Item>
              )}
           />
        </div>
      
      
    )
  }
}

export default BlogsList