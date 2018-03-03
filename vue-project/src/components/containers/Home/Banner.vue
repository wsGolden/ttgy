<template>
	<div class="swiper-container app-home-banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for='billboard in billboards' :key='billboard.id'>
				<img width="100%" :src="billboard.image" alt="..." :title="billboard.name" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	//https://m.maizuo.com/v4/api/billboard/home?__t=1519788843553
//	https://m.douyu.com/index/getHomeData
//https://wap.fruitday.com/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=
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
				axios.get('/v3/ad/homepage?connect_id=&type=2&lonlat=116.25198%2C40.116466&ad_code=110114&tab_id=').then(res=>{
//					,{
//					params:{__t:Date.now()}
//				}

					console.log(this.$root.config.host)
//					console.log(res.data.data.billboards)
				//将获取到的轮播图数据 放入到billboards数组里
				console.log(res.data.data.banner.mainBanners[0].content)
					this.billboards = res.data.data.banner.mainBanners[0].content
					
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
				loop:true,
				 autoplay: true,
				pagination: {
			      el: '.swiper-pagination',
			    }
			})
		}
	}
</script>

<style lang='scss'>
	.swiper-pagination-bullet-active{
		    opacity: 1;
    background: #ff7e05;
	}
</style>