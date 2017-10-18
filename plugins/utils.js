export default {
	parseParams (params = {}, key) {
		return params[key] ? params[key].replace('.html', '').split('_') : []
	},

	checkParams (params = {}, key) {
		return params[key].replace('.html', '') === key
	},

	/**
	* [objectMap]
	* 将对象中那些值为undefined、null、NaN的属性删除掉
	* @param   {Object}  obj [处理的对象]
	* @return 	{Object}  newObject [处理后的新对象]
	*/
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

	/**
	* [arrayFind]
	* 执行该方法让不支持数组find方法的浏览器支持
	* 当前版本的babel(v7.2.3)也不能转义
	*/
	arrayFind () {
		if (!Array.prototype.find) {
		  Object.defineProperty(Array.prototype, 'find', {
		    value: function(predicate) {
		     // 1. Let O be ? ToObject(this value).
		      if (this == null) {
		        throw new TypeError('"this" is null or not defined');
		      }
		      var o = Object(this);
		      // 2. Let len be ? ToLength(? Get(O, "length")).
		      var len = o.length >>> 0;
		      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
		      if (typeof predicate !== 'function') {
		        throw new TypeError('predicate must be a function');
		      }
		      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
		      var thisArg = arguments[1];

		      // 5. Let k be 0.
		      var k = 0;
		      // 6. Repeat, while k < len
		      while (k < len) {
		        // a. Let Pk be ! ToString(k).
		        // b. Let kValue be ? Get(O, Pk).
		        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
		        // d. If testResult is true, return kValue.
		        var kValue = o[k];
		        if (predicate.call(thisArg, kValue, k, o)) {
		          return kValue;
		        }
		        // e. Increase k by 1.
		        k++;
		      }
		      // 7. Return undefined.
		      return undefined;
		    }
		  });
		}
	}
}
