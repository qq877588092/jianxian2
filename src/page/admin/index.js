import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import style from './index.module.less'
import TabNav from '../../components/TabNav'
const { Header, Sider, Content } = Layout
class Admin extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout className={style.box}>
        <Sider
          width="256"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          {/* 头部 */}
          <div className={style.logo}>后台管理系统</div>
          {/* tab栏 */}
          <TabNav></TabNav>
        </Sider>
        <Layout>
          {/* 右顶 */}
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          {/* 内容区 */}
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Admin
