<template>
	<div>
		<top/>
		<my-header/>
	    <nuxt/>
	    <my-footer/>
	    <login/>
	</div>
</template>

<script>
import top from '~/components/top.vue'
import myHeader from '~/components/header.vue'
import myFooter from '~/components/footer.vue'
import login from '~/components/login.vue'

export default {
	data() {
		return {
			
		}
	},
	components: {
		top,
		myHeader,
		myFooter,
		login
	},
	mounted() {

	},
	destroyed() {

	},
	methods: {

	}
}
</script>

<style lang="scss" type="text/scss" rel="stylesheed/scss" scoped>
	

</style>