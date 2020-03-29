import React, { Component } from 'react'
import './login.css'
import loginApi from '../../api/login'
import axios from 'axios'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }
  login() {
    let { userName, password } = this.state
    loginApi.Login(`userName=${userName}&password=${password}`)
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
export default Login
