import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.scss'
import Logo from '../../assets/logo.png'
const Item = Form.Item;

 class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = this.props.form;
    const values = form.getFieldsValue();
    console.log("handleSubmit():",values);
  }
  render(){
    //等到form对象
    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
     <div className="login">
       <header className = "login-header">
         <img src={Logo} alt="this is my logo"/>
         <h1>我爱我家系列电影</h1>
       </header>
       <section className = "login-content">
        <h2>登录</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Item>
          {
            getFieldDecorator('username',{})(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )
          }
          
          </Item>
          <Item>
            {
               getFieldDecorator('password',{})(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
               />
               )
            }
          
          </Item>
          <Item>
            {
               getFieldDecorator('remember',{})(
                  <Checkbox>Remember me</Checkbox> 
               )
            }
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            
          </Item>
        </Form>
      
       </section>
       <footer>

       </footer>
     </div>
    );
  }
}

/*


*/
const WrapLogin = Form.create()(Login)
export default WrapLogin


