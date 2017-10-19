<template>
	<section>
		<div v-for="(item,index) in newsData.newsDynamicVo":key="index">
            111
        </div>
        <div class="page-swipe" style="width:100%; height: 200px;">
	        <mt-swipe :show-indicators="false">
	          <mt-swipe-item class="slide1">1</mt-swipe-item>
	          <mt-swipe-item class="slide2">2</mt-swipe-item>
	          <mt-swipe-item class="slide3">3</mt-swipe-item>
	        </mt-swipe>
        </div>
	</section>
</template>

<script>
import axios from '~/plugins/axios'
export default {
	data() {
		return {
			
		}
	},
	head () {
      return {
        title: `123`,
        meta: [{
          hid: 'keyword',
          name: 'keyword',
          content: `456`
        }]
      }
    },
	async asyncData({store,query}){
		const [adData, newsData, demandList, goodsList] = await Promise.all([
				axios.get(`/api/index/adlist`).then((data) => data.data.data),
				axios.get(`/api/index/newslist`).then((data) => data.data.data),
				axios.get(`/api/index/demandlist`).then((data) => data.data.data),
				axios.get(`/api/index/goodslist`).then((data) => data.data.data)
		])
		return {
			adData: adData || [],
			newsData: newsData || [],
			demandList: demandList || [],
			goodsList: goodsList || []
		}
	},
	components: {
	},
	watch: {

	},
	mounted() {

	},
	destroyed() {

	},
	methods: {

	}
}
</script>

<style lang="scss" type="text/scss">
	.page-swipe .mint-swipe {
	    height: 200px;
	    color: #fff;
	    font-size: 30px;
	    text-align: center;
	    margin-bottom: 20px;
	}
	.page-swipe .mint-swipe-item {
	    line-height: 200px;
	}
	.page-swipe .slide1 {
	    background-color: #0089dc;
	    color: #fff;
	}
	.page-swipe .slide2 {
	    background-color: #ffd705;
	    color: #000;
	}
	.page-swipe .slide3 {
	    background-color: #ff2d4b;
	    color: #fff;
	}
	.page-swipe-desc {
	    text-align: center;
	    color: #666;
	    margin-bottom: 5px;
	}
</style>