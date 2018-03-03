<template>
	<div class='app-header-nav'>
		<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
			<nav v-if='isNavShow'>
			<ul class='nav-list'>
				<li   @click='toggleNav' v-for='nav in navs' :key='nav.id' class='nav-item'><router-link :to='nav.path'  href="#">{{nav.title}}<i class='fa fa-angle-right'></i></router-link></li>
				
			</ul>
		</nav>
		</transition>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<div @click='toggleNav' class="mask" v-if='isNavShow'></div>
		</transition>
		
	</div>
</template>

<script>

	export default{
		name:'app-header-nav',
		props:['isNavShow','toggleNav'],
		data(){
			return {
				navs:[
				{id:1,title:'首页',path:'/home'},
				{id:2,title:'影片',path:'/films'},
				{id:3,title:'影院',path:'/abc'},
				{id:4,title:'我的',path:'/aaa'},
				{id:5,title:'二级路由示例',path:'/second'}

				]
			}
		},
		components:{
		
		}
	}
</script>

<style lang="scss" scoped>
.router-link-exact-active{
    color: #fff!important; 
}
.app-header-nav{
  position: fixed;
  left: 0;right: 0;top: 0;
  z-index: 499;
  

  nav{
    padding-top: 50px;
    width: 2.65rem;
    
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    animation-duration: 0.5s;
  }
  .mask{
    z-index:9;
    background: rgba(0,0,0,0.5);
    animation-duration: 0.5s;
    height: 100vh;
  }
  .nav-list{
    border-top: 1px solid #222;  

    li{
      line-height: 50px;
      a{
        width: 100%;
        padding: 0 16px;
        border-bottom: 1px dotted #333;
        display: flex;justify-content: space-between;align-items: center;
        color: #999;
      }
    }
  }
}
</style>