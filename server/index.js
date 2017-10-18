import express from 'express'
import bodyParser from 'body-parser'
import { Nuxt, Builder } from 'nuxt'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const config = require('../nuxt.config.js') // 导入Nuxt.js选项
const nuxt = new Nuxt(config) // 初始化NUXT

app.set('port', port)

app.use(bodyParser.json()) // 用于NODE请求体解析application/json格式
app.use(bodyParser.urlencoded({ extended: true })) // 用于NODE请求体解析application/x-www-form-urlencoded格式

// 只有在开发环境才会打包 生产环境参照服务器部署打包
if (process.env.NODE_CONFIG === 'dev') {
  const builder = new Builder(nuxt)
  builder.build()
}

// 将nuxt middleware应用于express
app.use(nuxt.render)

// 监听端口
app.listen(port)
console.log('Server listening on ' + host + ':' + port) 