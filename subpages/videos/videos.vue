<template>
	<view class="goodlist">
		<gooodsl :goods="goods"></gooodsl>
	</view>
</template>

<script>
	import gooodsl from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				goods:[]
			};
		},
		components:{'gooodsl':gooodsl},
		mounted() {
			this.getgoodslist();
			
		},
		methods:{
			getgoodslist(){
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
					
			}
		},
		onPullDownRefresh() {
			this.goods =[];
			setTimeout(() => {
				this.getgoodslist();
				uni.stopPullDownRefresh();
			},400)
		}
	}
</script>

<style lang="scss" scoped>
.goodlist{
	background-color: #eee;
}

</style>
