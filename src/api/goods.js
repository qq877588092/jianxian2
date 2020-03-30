import axios from '../utils/axios'
class Goods {
  Goods(page = 1, num = 100) {
    let url = '/api/goods/all'
    return axios.get(url, { params: { page, num } })
  }
}
export default new Goods()
