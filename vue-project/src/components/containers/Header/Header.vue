<template>
	<header class='app-header'>
		<tab-bar :isNavShow='isNavShow' :toggleNav='toggleNav'></tab-bar>
		<tab-nav :isNavShow='isNavShow' :toggleNav='toggleNav'></tab-nav>
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

<style>
</style>