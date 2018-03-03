


import Vue from 'vue'
//对时间戳进行过滤的方法
Vue.filter('date',function(value,modifire){
	let date = new Date(value)
	
	return (date.getMonth()+1)+'月'+(date.getDate()+1)+'日'+(modifire?"上映":'')
})
