import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.scss'
import Logo from '../../assets/logo.png'
const Item = Form.Item;

 class Login extends Component {

  handleSubmit = (event) => {

    event.preventDefault();
    //对所有的表单字段进行验证
    this.props.form.validateFields((err, values) => {
      // 成功
      if (!err) {
        console.log('提交登录的ajax请求 ', values);
      }
    });
    console.log("12314");
  };
  /*
    对密码进行自定义验证,callback必须写，成功callback()，失败callback('xxx')
  */ 
  validatePwd = (rule, value, callback) => {
    if( !value ){
      callback("Please input your password!")
    }else if(value.length < 4){
      callback("密码不能小于4位")
    }else if(value.length > 12){
      callback("密码不能大于12位")
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      callback("密码必须是英文、数字或者下划线组成")
    }else{
      callback();
    }
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
            getFieldDecorator('username',{
              //申明式验证：直接使用被人定义好的验证规则进行验证
              rules: [
                { required: true, message: 'Please input your username!' },
                { min: 4, message: '用户名不得小于4位' },
                { max: 12, message: '用户名不得大于12位' },
                { pattern:/^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或者下划线组成' },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )
          }
          
          </Item>
          <Item>
            {
               getFieldDecorator('password',{
                 rules:[
                   { validator:this.validatePwd }
                 ]
               })(
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
               getFieldDecorator('remember',{
                valuePropName: 'checked',
                initialValue: true,
               })(
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


