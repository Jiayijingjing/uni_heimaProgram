<template>
	<view class="shequ">
		<scroll-view class="left" scroll-y  show-scrollbar="false" >
			<view  :key="index" @tap="gotolist(index)"  :class="active === index ?'shequred':'' " v-for="(item,index) in list">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y ref="images" @scroll="scroll" :scroll-top="scrollTop">
			<image :src="it" v-for="(it,index) in nowlist" :key="index"></image>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				active:0,
				nowlist:[],
				scrollTop: 0,
				oldScrollTop:0
			};
		},
		mounted() {
			this.getlist();
			this.nowlist= this.list[0].lista;

		},
		methods:{
			getlist(){
				const lists = [{"id":1,"title":"家居生活","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":2,"title":"家用电器","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":3,"title":"摄影设计","lista":['../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":4,"title":"明星美女","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":5,"title":"空间设计","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":6,"title":"广告摄影","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":7,"title":"摄影学习","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":8,"title":"户型设计","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":9,"title":"摄影器材","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":10,"title":"明星写真","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":11,"title":"京东秒杀","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":12,"title":"酒店旅游","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":13,"title":"安装维修","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":14,"title":"教育文化","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":15,"title":"汽车用品","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":16,"title":"钟表珠宝","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":17,"title":"宠物动物","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":18,"title":"个护清洁","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":19,"title":"家装厨具","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":20,"title":"童装内衣","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":21,"title":"手机数码","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']},
				{"id":21,"title":"运动户外","lista":['../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg','../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg']},
				{"id":22,"title":"医药保健","lista":['../../static/about02.jpg','../../static/about03.jpg','../../static/zhutu02.jpg','../../static/zhutu03.jpg','../../static/about03.jpg','../../static/about02.jpg','../../static/zhutu03.jpg','../../static/zhutu02.jpg']}
				];
				this.list = lists;
			},
			gotolist(index){
				this.active = index;
				this.nowlist=[];
				this.nowlist = this.list[index].lista;
				
				this.scrollTop = this.oldScrollTop;
				//当视图渲染结束 重新设置为0
				this.$nextTick(() =>{
					this.scrollTop = 0
				});	
			},
			 scroll (e) {
				//记录scroll  位置
				this.oldScrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
	}
.shequ{
	width: 750rpx;
	height: 100%;
	display: flex;
	flex-direction: row;
	.left{
		width: 200rpx;
		view{
			height: 60px;
			line-height:60px;
			font-size: 36rpx;
			width: 200rpx;
			text-align: center;
			box-sizing: border-box;
			text-align: center;
			border-bottom: 1px solid #f0f0f0;
			border-right: 1px solid #f0f0f0;
			
		}
	}
	.right{
		width: 100%;
		image{
			width: 100%;
		}
	}
}
.shequred{
	background-color: #b50e03;
}
</style>
