import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import list from './menulist'
const { SubMenu } = Menu
class TabNav extends Component {
  // 点击时获得路径通过编程式导航实现跳转
  gotoClick(e) {
    let { path } = e.item.props
    // console.log(path)
    this.props.history.replace(path)
  }
  getHtml = function(item) {
    return item.map((e, i) => {
      return (
        <Menu.Item onClick={this.gotoClick.bind(this)} key={e.key} path={e.path}>
          {e.title}
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {list.map((ele, index) => {
          return (
            <SubMenu
              key={ele.key}
              title={
                <span>
                  <Icon type={ele.icon} />
                  {ele.title}
                </span>
              }
            >
              {ele.children ? this.getHtml(ele.children) : ''}
            </SubMenu>
          )
        })}
      </Menu>
    )
  }
}
export default withRouter(TabNav)
