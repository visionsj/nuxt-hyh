/** 
 * 根据不同的环境替换配置文件 
 * dev 开发环境； dev 开发环境； test 测试环境； pre 预发环境； prod 生产环境
 */

const NODE_ENV = {
  dev: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:8089/',
    // API 服务器
    SERVER_ADDRESS: 'http://127.0.0.1:7083',
    // 认证中心
    USERCENTER_ADDRESS: 'http://uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'https://ecenter.jumore.test2',
    // 图片服务器
    IMG_ADDRESS: 'https://image.jumore.test',
    // 图片上传服务器
    UPLOAD_ADDRESS: 'http://image5.jm.com'
  },
  test: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jtt.com',
    // 上传地址
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'http://image.jm.com'
  },
  pre: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jtt.com',
    // 上传地址
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'http://image.jm.com'
  },
  prod: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jtt.com',
    // 上传地址
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'http://image.jm.com'
  }
}

module.exports = NODE_ENV[process.env.NODE_CONFIG]
