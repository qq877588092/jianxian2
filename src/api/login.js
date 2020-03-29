import axios from '../utils/axios'
class Login {
  Login(userInfo) {
    console.log(userInfo)
    let url = 'http://8.129.8.217:8888/user/login'
    return axios.post(url, userInfo)
  }
}
export default new Login()
