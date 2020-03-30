import React, { Component } from 'react'
import './login.css'
import loginApi from '../../api/login'
import { Button, notification } from 'antd'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }
  login = async () => {
    let { userName, password } = this.state
    let result = await loginApi.Login(
      `userName=${userName}&password=${password}`
    )
    console.log(result)
    if (result.token) {
      localStorage.setItem('token',result.token)
      // antd 的插件消息提示
      notification['success']({
        duration: 2.5,
        message: result.msg,
        description: userName + '，欢迎您的使用，3秒后将自动跳转到首页' 
      })
      setTimeout(() => {
        this.props.history.replace('/admin')
      }, 2500);
    } else {
      alert(result.msg)
    }
  }
  render() {
    let { userName, password } = this.state
    return (
      <div className="loginBox">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <div className="form">
              <h1 className="h1Box">管理员登录</h1>
              <div className="social-container">
                {' '}
                <a href="#" className="social">
                  <ion-icon
                    name="logo-facebook"
                    role="img"
                    className="hydrated"
                    aria-label="logo facebook"
                  ></ion-icon>
                </a>{' '}
                <a href="#" className="social">
                  <ion-icon
                    name="logo-googleplus"
                    role="img"
                    className="hydrated"
                    aria-label="logo googleplus"
                  ></ion-icon>
                </a>{' '}
                <a href="#" className="social">
                  <ion-icon
                    name="logo-linkedin"
                    role="img"
                    className="hydrated"
                    aria-label="logo linkedin"
                  ></ion-icon>
                </a>{' '}
              </div>
              <span></span>
              <input
                type="text"
                placeholder="账号"
                value={userName}
                onChange={e => {
                  this.setState({ userName: e.target.value })
                }}
              />
              <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={e => {
                  this.setState({ password: e.target.value })
                }}
              />
              <span className="loginBtn" onClick={this.login.bind(this)}>
                登录
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
