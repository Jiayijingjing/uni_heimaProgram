<template>
		<view class="goods_list">
			<view class="goods_item" v-for="(item,index) in goods" :key="index"  @tap="gooddetail(index)">
				<image :src="item.url"></image>
				<view class="price">
					<text class="price_1">$2199</text>
					<text class="price_2">$2599</text>
				</view>
				<view class="name">{{item.title}}</view>
			</view>
		</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['goods'],
		methods:{
			gooddetail(index){
				uni.navigateTo({
					url:'../../pages/gooddetail/gooddetail?id='+index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
					height: 140px;
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
