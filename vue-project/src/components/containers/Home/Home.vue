<template>
	<div class="main-box home">
		<app-banner></app-banner>
		<!--filmsbox.info将影片的信息传入到filmsbox组件中-->
		<!--组件传参-->
		
	</div>
</template>

<script>
	import AppBanner from './Banner'
	//引入电影列表的组件
//	import AppFilmsBox from './FilmsBox'
	export default{
		name:'home',
		data(){
			return{
//				filmsboxs:[
//					{id:1,info:{url:'now-playing',type:'hot',count:'5',title:'热映'}},
//					{id:2,info:{url:'coming-soon',type:'coming',count:'3',title:'即将上映'}}
//				]
			}
		},
		components:{
			AppBanner
		}
	}
</script>

<style lang='scss'>
</style>