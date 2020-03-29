import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './page/admin'
import Login from './page/login'
import GoodsInfo from './page/GoodsInfo'
import GoodsKind from './page/GoodsKind'
import { Button, Calendar } from 'antd'
class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* 控制地址栏改变 */}
        {/* 路由 */}
        <Route path="/login" component={Login}></Route>
        <Route
          path="/admin"
          render={() => {
            return (
              <Admin>
                <Route path="/admin/goodsInfo" component={GoodsInfo}></Route>
                <Route path="/admin/goodsKind" component={GoodsKind}></Route>
              </Admin>
            )
          }}
        ></Route>
      </HashRouter>
    )
  }
}
export default App
