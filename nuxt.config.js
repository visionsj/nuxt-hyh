const address = require('./config')

module.exports = {
  // 运行环境	
  env: {
    NODE_CONFIG: process.env.NODE_CONFIG || 'dev'
  },
  // 设置缓存
  // cache: {
  //    max: 1000,       // 组件缓存数
  //    maxAge: 900000   // 15分钟
  // }
 	cache: true, // 缓存
 	transition: 'page', // 页面过渡
 	// css
 	css: ['~/node_modules/element-ui/lib/theme-default/index.css', '~/assets/css/main.css'],
 	// 设置HEAD标签
 	head: {
    title: '网站标题',
    meta: [
      {charset: 'utf-8'},
      {
        hid: 'keyword',
        name: 'keyword',
        content: '网站关键词'
      },
      {
        hid: 'description',
        name: 'description',
        content: '网站内容'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: address.CDN_ADDRESS + 'favicon.ico'
      }
    ]
  },
	// router 配置路由 定位，中间件，路径等
	router: {
		middleware: ['ssr-cookie', 'check-login']
	},
	// 配置代理转发
	modules: [['@nuxtjs/proxy']],
  proxy: {
    '/api': {
      target: address.SERVER_ADDRESS,
      ws: false
    },
    '/sso': {
      target: address.SERVER_ADDRESS + '/api',
      ws: false
    },
    '/comp': {
      target: address.CENTER_ADDRESS,
      ws: false
    }
  },
 	// plugins
 	plugins: [
 		'~plugins/element-ui',
    '~plugins/filter',
    '~plugins/directive',
    '~plugins/checkLogin',
    '~plugins/utils',
    { src: '~plugins/baidu', ssr: false }
 	],
  // 减少应用 bundle 的体积, 往vendor.bundle.js 文件中添加一些模块
  build: {
    filenames: {
      css: 'styles.[chunkhash].css'
    },
    extractCSS: true, // 分离CSS
    vendor: ['axios', 'element-ui'], // 预打包
    babel: {
      plugins: [
        ['component', [{
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default'
        }]]
      ]
    },
    publicPath: address.CDN_ADDRESS // 指向到CDN服务器
  },
  // 拓展ESLINT 代码检查
  extend (config, ctx) {
	    if (ctx.isClient) {
	      config.module.rules.push({
	        enforce: 'pre',
	        test: /\.(js|vue)$/,
	        loader: 'eslint-loader',
	        exclude: /(node_modules)/
	      })
	    }
  }
}
