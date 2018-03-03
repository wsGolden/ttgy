<template>
	<header class='app-header'>
		<img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" alt="" />
		
	</header>
</template>

<script>
	import TabBar from './TabBar'
	import TabNav from './Nav'
	export default{
		name:'app-header',
		data(){
			return{
				isNavShow:false
			}
		},
		components:{
			TabBar,TabNav
		},
		methods:{
			toggleNav(){
				this.isNavShow = !this.isNavShow
			}
		}
	}
</script>

<style lang='sass'>
	    width: .51rem;
    height: .14rem;
    margin-right: .05rem;
</style>