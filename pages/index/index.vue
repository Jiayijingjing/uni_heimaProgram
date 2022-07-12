<template>
	<view >
				<view class="uni-margin-wrap">
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item  v-for="(item) in swipers" :key="item.index">
							<view class="swiper-item">
								<image :src="item.img"  mode="aspectFill" class="lunimg"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="nav">
					<view class="nav_item">
						<view class="yuan"><image src="../../static/main01.png"></image></view>
						<text>黑马超市</text>
					</view>
					<view class="nav_item">
						<view class="yuan"><image src="../../static/main02.png"></image></view>
						<text>黑马超市</text>
					</view>
					<view class="nav_item">
						<view class="yuan"><image src="../../static/main03.png"></image></view>
						<text>黑马超市</text>
					</view>
					<view class="nav_item">
						<view class="yuan"><image src="../../static/main04.png"></image></view>
						<text>黑马超市</text>
					</view>
				</view>
				<view class="hot_goods">
					<view class="tit">推荐商品</view>
					<view class="goods_list">
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
						<view class="goods_item">
							<image src="../../static/zhutu03.jpg.png" class=""></image>
							<view class="price">
								<text class="price_1">$2199</text>
								<text class="price_2">$2599</text>
							</view>
							<view class="name">华为HUAWEI荣耀plus6 16G双4G版最新款</view>
						</view>
					</view>
				</view>
				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500,
							swipers:[]
			}
		},
		// 发送请求
		onLoad() {
			this.getSwipers();
		},
		methods: {
					changeIndicatorDots(e) {
			            this.indicatorDots = !this.indicatorDots
			        },
			        changeAutoplay(e) {
			            this.autoplay = !this.autoplay
			        },
			        intervalChange(e) {
			            this.interval = e.target.value
			        },
			        durationChange(e) {
			            this.duration = e.target.value
			        },
					getSwipers(){
						const swipersdata = [{'id':1,"img":"../../static/datu.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"},{'id':2,"img":"../../static/zhutu02.jpg.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/fourthScreenChildPage/Mainbusiness.html"},{'id':3,"img":"../../static/zhutu03.jpg.png","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"}];
						this.swipers = swipersdata;
						
					}
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
			width: 750rpx;
			width: 100%;
		}
		.swiper {
			height: 380rpx;
		}
		.swiper-item {
			display: block;
			height: 380rpx;
			line-height: 380rpx;
			text-align: center;
		}

		.lunimg{
			width: 750rpx;
			height: 380rpx;
		
		}
		.nav{
			display: flex;
			flex-direction: row;
		}
		
		.nav_item{
			width: 25%;
			text-align: center;
			font-size: 30rpx;
		.yuan {
			width: 120rpx;
			height: 120rpx;
			background-color: #b50e03;
			border-radius: 60rpx;
			margin: 10rpx auto;
			line-height: 120rpx;
			image{
				margin-top: 32rpx;
				width: 54rpx;
				height: 54rpx;
			}
		  }
		}
		.hot_goods{
			width: 750rpx;
			background-color: #eee;
			overflow: hidden;
			margin-top: 10rpx;
			
			.tit{
				height: 50px;
				line-height: 50px;
				color: #b50e03;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				margin-top: 10rpx;
			}
		}
		.goods_list{
			padding: 0 15rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.goods_item{
				background:#fff;
				width: 355rpx;
				padding: 15rpx;
				box-sizing: border-box;
				margin-top: 7px;
				image{
					width: 100%;
					height: 150px;
				}
				.price_1{
					color:#b50e03;
					font-size: 30rpx;
				}
				.price_2{
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
					
				}
				.name{
					font-size:28rpx;
					line-height: 50rpx;
					padding-top: 10rpx;
					padding-bottom: 15rpx;
				}
			}
		}
</style>
