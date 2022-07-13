<template>
	<view class="details">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item  v-for="(item) in swipers" :key="item.index">
					<view class="swiper-item">
						<image :src="item.img"  mode="aspectFill" class="lunimg" @tap="godetail"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="price">
			<text class="price_1">$2199</text>
			<text class="price_2">$2599</text>
		</view>
		<view class="wenzi">
			<view class="biaoti">Apple iPhone 13 (A2634) 128GB 星光色 支持移动联通电信5G 双卡双待手机</view>
			<view>货号：SD82382328</view>
			<view>库存：292</view>
			<view>详细介绍</view>
		</view>
		<image src="../../static/detail.jpg" class="detailstu"></image>
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
				swipers:[],
			};
		},
		methods:{
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
				const swipersdata = [{'id':1,"img":"../../static/zhutu02.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"},{'id':2,"img":"../../static/zhutu04.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/fourthScreenChildPage/Mainbusiness.html"},{'id':3,"img":"../../static/zhutu05.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"}];
				this.swipers = swipersdata;
				
			},
			godetail(){
				uni.navigateTo({
					url:"/pages/detail/detail"
				})
			}
		},
		// 发送请求
		onLoad() {
			this.getSwipers();
			
		},
	}
</script>

<style lang="scss" scoped>
	.details{
		width: 750rpx;
		box-sizing: border-box;
		.price{
			margin-left: 50rpx;
			.price_1{
				color:#b50e03;
				font-size: 40rpx;
				line-height: 60px;
				font-weight: 500;
			}
			.price_2{
				margin-left: 20rpx;
				color: #ccc;
				font-size: 38rpx;
				text-decoration: line-through;
				line-height: 60px;
				
			}
		}
		.wenzi{
			padding-left: 50rpx;
			padding-right:50rpx;
			width: 750rpx;
			box-sizing: border-box;
			view{
				line-height: 30px;
				font-size: 32rpx;
			}
		}
		.detailstu{
			width: 750rpx;
			height: 2000px;
		}
		.uni-margin-wrap {
				width: 750rpx;
			}
			.swiper {
				height: 420rpx;
				width: 750rpx;
				.swiper-item {
					display: block;
					height: 420rpx;
					line-height: 420rpx;
					text-align: center;
					.lunimg{
						width: 750rpx;
						height: 420rpx;
					
					}
				}
			}
	}
	
</style>
