export default {
	// 将xxx_x.html分解成数组
	parseParams (params = {}, key) {
		return params[key] ? params[key].replace('.html', '').split('_') : []
	},

	// 过滤.html结尾关键词
	checkParams (params = {}, key) {
		return params[key].replace('.html', '') === key
	},

	// 将对象中那些值为undefined、null、NaN的属性删除掉
	objectMap (obj = {}) {
		let newObject = {}
		for(let key of Object.keys(obj)){
			const value = obj[key]
			if(typeof  value!== 'undefined' && value!=='' && value !== null && !Number.isNaN(value) && value !== -1){
				newObject[key] = value
			}
		}
		return newObject
	},
}
