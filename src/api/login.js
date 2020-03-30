import axios from '../utils/axios'
class Login {
  Login(userInfo) {
    console.log(userInfo)
    let url = '/api/user/login'
    return axios.post(url, userInfo)
  }
}
export default new Login()
