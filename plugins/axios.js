import * as axios from 'axios'
import address from '../config'

let options = {
  timeout: 5000, // 超时时间
  withCredentials: true, // 发送跨域请求
  headers: {
    post: {'Content-Type': 'application/json'} // 设置请求
  },
  params:{
  	t: +new Date() // 解决请求缓存
  }
}

// 在服务端渲染时需要所有路径
if (process.server) {
  options.baseURL = address.SERVER_ADDRESS
}


export default axios.create(options)
