<template>
	<div class="swiper-container app-home-banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for='billboard in billboards' :key='billboard.id'>
				<img width="100%" :src="billboard.pic_url" alt="..." :title="billboard.name" />
			</div>
		</div>
	</div>
</template>

<script>
	//https://m.maizuo.com/v4/api/billboard/home?__t=1519788843553
//	https://m.douyu.com/index/getHomeData
//	import $ from 'zepto'
	import Swiper from 'swiper'
	import axios from 'axios'

	export default{
		name:'app-home-banner',
		data(){
			return{
				billboards:[]
			}
		},
		methods:{
			getBillBoards(){
				axios.get(this.$root.config.host+'dy/index/getHomeData').then(res=>{
//					,{
//					params:{__t:Date.now()}
//				}

					console.log(this.$root.config.host)
//					console.log(res.data.data.billboards)
				//将获取到的轮播图数据 放入到billboards数组里
				console.log(res.data.banner)
					this.billboards = res.data.banner
					
				})
//				axios.get(this.$root.config.host+'mz/v4/api/billboard/home',{
//					params:{__t:Date.now()}
//				}).then(res=>{
////					console.log(res.data.data.billboards)
//				//将获取到的轮播图数据 放入到billboards数组里
//				console.log('fasfas')
//				console.log(res.data.data.billboards)
//					this.billboards = res.data.data.billboards
//				})
			} 
		},
		created(){
			console.log(this.$root.config.host)
			this.getBillBoards()
		},
		updated(){
			new Swiper('.app-home-banner',{
				loop:true
			})
		}
	}
</script>

<style lang='scss'>
</style>