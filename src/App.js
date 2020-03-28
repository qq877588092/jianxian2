import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './page/admin'
import Login from './page/login'
import { Button, Calendar } from 'antd'
class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
      </HashRouter>
    )
  }
}
export default App
