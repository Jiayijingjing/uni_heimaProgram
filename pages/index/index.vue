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
					<view class="nav_item" v-for="(item,index) in yuanlist" :key="index"  @tap="gotosubpage(item.path)">
						<view class="yuan"><image :src="item.src"></image></view>
						<text>{{item.title}}</text>
					</view>
				</view>
				<view class="hot_goods">
					<view class="tit">推荐商品</view>
					<gooodslist :goods="goods" ></gooodslist>
					<view v-if="ends" class="ends">-----到底了-----</view>
				</view>
				
	</view>
</template>

<script>
	import gooodsl from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
							background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500,
							swipers:[],
							yuanlist:[{
								title:'黑马超市',
								src:'../../static/main01.png',
								path:'/subpages/goods/goods'
							},
							{
								title:'联系我们',
								src:'../../static/main02.png',
								path:'/subpages/contact/contact'
							},
							{
								title:'社区图片',
								src:'../../static/main03.png',
								path:'/subpages/pics/pics'
							},
							{
								title:'推荐商品',
								src:'../../static/main04.png',
								path:'/subpages/videos/videos'
							}
							],
							goods:[],
							ends:false,
							num:0
							
			}
		},
		
		// 发送请求
		onLoad() {
			this.getSwipers();
			this.getgoods();
		},
		components:{"gooodslist":gooodsl},
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
						const swipersdata = [{'id':1,"img":"../../static/datu.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"},{'id':2,"img":"../../static/zhutu04.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/fourthScreenChildPage/Mainbusiness.html"},{'id':3,"img":"../../static/zhutu05.jpg","url":"http://stu-projects-web.itheima.net/shenzhen/photo-studio/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%E9%A1%B5%E9%9D%A2/%E4%BA%8C%E7%BA%A7%E5%AD%90%E9%A1%B5%E9%9D%A2/%E6%96%B0%E9%97%BB%E5%88%97%E8%A1%A8%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html"}];
						this.swipers = swipersdata;
						
					},
					gotosubpage(url){
						uni.navigateTo({
							url
						})
					},
					getgoods(){
						//替代发请求获取数据
						const hotgoodslist = [{'id':1,"title":"华为HUAWEI荣耀plus6 16G双4G版最新款","url":"../../static/phone/a01.jpg"},
							{'id':2,"title":"荣耀70 IMX800三主摄 双曲屏设计Plus5G手机","url":"../../static/phone/a02.jpg"},
							{'id':3,"title":"小米 Civi骁龙778G Plus 3200万双柔光自拍 ","url":"../../static/phone/a03.jpg"},
							{'id':4,"title":"Redmi 10A 5000mAh大电量 1300万AI相机","url":"../../static/phone/a04.jpg"},
							{'id':5,"title":"OPPO A36 6+128GB 晴川蓝 高通骁龙680","url":"../../static/phone/a01.jpg"},
							{'id':6,"title":"Apple iPhone 13 (A2634) 128GB 星光色","url":"../../static/phone/a02.jpg"},
							{'id':7,"title":"OPPO Reno8新品上市opporeno8手机正品","url":"../../static/phone/a03.jpg"},
							{'id':8,"title":"Redmi K40S 骁龙870 三星E4 AMOL120Hz直屏 ","url":"../../static/phone/a04.jpg"},
							{'id':9,"title":"小米12S Pro 骁龙8+处理器 徕卡2K超视感屏","url":"../../static/phone/a01.jpg"},
							{'id':10,"title":"vivo iQOO U5x 8GB+128GB骁龙680","url":"../../static/phone/a02.jpg"},
							{'id':11,"title":"Redmi K50 Pro 天玑9000 2K柔性直屏","url":"../../static/phone/a04.jpg"},
							{'id':12,"title":"Apple iPhone 12天玑9000  128GB 白色","url":"../../static/phone/a03.jpg"},
							{'id':13,"title":"小米12S Pro 骁龙8+处理器 徕卡2K超视感屏","url":"../../static/phone/a02.jpg"},
							{'id':14,"title":"vivo iQOO U5x 8GB+128GB骁龙680","url":"../../static/phone/a04.jpg"}];
							this.goods = hotgoodslist;
					},
					getmoregoods(){
							const hotgoodslist = [{"title":"华为HUAWEI荣耀plus6 16G双4G版最新款","url":"../../static/phone/a01.jpg"},
								{"title":"荣耀70 IMX800三主摄 双曲屏设计Plus5G手机","url":"../../static/phone/a02.jpg"},
								{"title":"小米 Civi骁龙778G Plus 3200万双柔光自拍 ","url":"../../static/phone/a03.jpg"},
								{"title":"Redmi 10A 5000mAh大电量 1300万AI相机","url":"../../static/phone/a04.jpg"},
								{"title":"OPPO A36 6+128GB 晴川蓝 高通骁龙680","url":"../../static/phone/a01.jpg"},
								{"title":"Apple iPhone 13 (A2634) 128GB 星光色","url":"../../static/phone/a02.jpg"},
								{"title":"OPPO Reno8新品上市opporeno8手机正品","url":"../../static/phone/a03.jpg"},
								{"title":"Redmi K40S 骁龙870 三星E4 AMOL120Hz直屏 ","url":"../../static/phone/a04.jpg"},
								{"title":"小米12S Pro 骁龙8+处理器 徕卡2K超视感屏","url":"../../static/phone/a01.jpg"},
								{"title":"vivo iQOO U5x 8GB+128GB骁龙680","url":"../../static/phone/a02.jpg"},
								{"title":"Redmi K50 Pro 天玑9000 2K柔性直屏","url":"../../static/phone/a04.jpg"},
								{"title":"Apple iPhone 12天玑9000  128GB 白色","url":"../../static/phone/a03.jpg"},
								{"title":"小米12S Pro 骁龙8+处理器 徕卡2K超视感屏","url":"../../static/phone/a02.jpg"},
								{"title":"vivo iQOO U5x 8GB+128GB骁龙680","url":"../../static/phone/a04.jpg"}];
								this.goods =[...this.goods,...hotgoodslist] ;
					}
					
		},
		onReachBottom() {
			if(this.num >2){
				this.ends = true;
				return;
			}
			this.num ++;
			
			this.getmoregoods();
		}
		
		
	}
</script>

<style lang="scss" scoped>
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
		

		
		.nav{
			display: flex;
			flex-direction: row;
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
				margin-top: 14rpx;
			}
		}
		.ends{
			height: 40px;
			line-height: 40px;
			text-align: center;
			color: #9d9d9d;
		}
		
</style>
