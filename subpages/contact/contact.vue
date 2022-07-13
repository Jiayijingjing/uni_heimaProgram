<template>
	<view class="lianxi">
		<image src="../../static/aboutus.jpg" class="aboutus"></image>
		<view class="wenben">
			<view class="tel" @tap="tell">联系电话： 400-618-8888（点击拨打）</view>
			<view class="add">地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代广场</view>
		</view>
		<map class="map" :latitude="latitude" :scale="scale"  :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.9120,
				longitude: 116.39742,
				scale:13,
			    markers: [{
					latitude: 39.9120,
					longitude: 116.39742,	
					iconPath: '../../static/ditubiaoji.png',
					width:30,
					height:30
				}]
			};
		},
		methods:{
			tell(){
				let phone = '‭123456789‬'
				  uni.makePhoneCall({
					phoneNumber:phone,
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.lianxi{
		.aboutus{
			width: 100%;
			height:180px;
		}
		.wenben{
			padding-left: 10px;
			padding-right: 10px;
			
			.tel{
				height: 30px;
				line-height: 30px;
				font-size: 30rpx;
				border-bottom: 1px solid #f0f0f0;
			}
			.add{
				height: 60px;
				line-height: 30px;
				font-size: 30rpx;
				border-bottom: 1px solid #f0f0f0;
			}
		}
		
	}
.map{
	width: 750rpx;
	height: 750rpx;
}
</style>
