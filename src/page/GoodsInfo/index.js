import React, { Component } from 'react'
import style from './index.module.less'
import {
  Pagination,
  Card,
  message,
  Table,
  Tag,
  Button,
  Popconfirm,
  Icon
} from 'antd'
import GoodsApi from '../../api/goods'

class GoodsInfo extends Component {
  state = {
    columns: [
      {
        title: '商品ID',
        width: 100,
        dataIndex: 'good_id',
        key: 'good_id',
        fixed: 'left'
      },
      {
        title: '商品名称',
        width: 300,
        dataIndex: 'title',
        key: 'title',
        fixed: 'left'
      },
      {
        title: '图片',
        dataIndex: 'src',
        key: 'src',
        width: 150,
        render(src) {
          return <img width="80" height="80" src={src}></img>
        }
      },
      {
        title: '店铺名',
        dataIndex: 'shopProId',
        key: 'shopProId',
        width: 150
      },
      {
        title: '库存',
        dataIndex: 'judge',
        key: 'judge',
        width: 80
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        width: 80
      },
      {
        title: '操作',
        dataIndex: 'dwd',
        key: 'dwd',
        width: 150,
        fixed: 'right',
        render(src) {
          return (
            <div>
              <Button
                type="primary"
                size="small"
                style={{
                  background: '#1e9fff',
                  color: '#fff',
                  borderRadius: '2px',
                  marginBottom: '8px'
                }}
              >
                <Icon type="edit" theme="filled" />修 改
              </Button>
              <Popconfirm title="你确定要删除该商品嘛?">
                <Button
                  type="danger"
                  size="small"
                  style={{
                    background: '#ff5722',
                    color: '#fff',
                    borderRadius: '2px',
                  }}
                >
                  <Icon
                    type="delete"
                    theme="filled"
                    style={{ fontSize: '13px' }}
                  />
                  删 除
                </Button>
              </Popconfirm>
            </div>
          )
        }
      }
    ],
    data: [],
    // 全选单选
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  }

  // 组件渲染后调用
  componentDidMount() {
    this.getListData()
  }
  // 获取商品数据
  getListData = async () => {
    let list = await GoodsApi.Goods()
    console.log(list)
    let arr = []
    list.datalist.map((e, i) => {
      arr.push({
        key: i,
        good_id: e.good_id,
        title: e.title,
        src: e.src,
        shopProId: e.shopProId,
        judge: e.judge,
        price: e.price,
        dwd: 'dwd'
      })
    })
    // console.log(arr)
    this.setState({
      data: arr
    })
  }

  // 全选单选
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render() {
    // 全选单选
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const hasSelected = selectedRowKeys.length > 0

    return (
      <div className={style.box}>
        <Card title="商品列表" className={style.card}>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="danger"
              onClick={this.start}
              disabled={!hasSelected}
              loading={loading}
              style={{
                fontSize:'16px',
                borderRadius:'2px'
              }}
            >
              <Icon type="warning" theme="filled" />
              全删
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `选择 ${selectedRowKeys.length} 项` : ''}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.data}
            scroll={{ x: 1500, y: 570 }}
          />
        </Card>
      </div>
    )
  }
}
export default GoodsInfo
