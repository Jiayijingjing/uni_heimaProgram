<template>
	<view>
		<view class="item" v-for="(item,index) in list" @tap="gotodetail(index)">
			<image :src="item.url"></image>
			<view class="right">
				<view class="text">{{item.text}}</view>
				<view class="shuju">
					<text class="time">发表时间：{{item.time}}</text>
					<text class="num">浏览：{{item.num}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		mounted() {
			this.getlist();
		},
		methods:{
			getlist(){
				const datas = [
				{"text":"根据方案，到2025年，两横三纵城镇化战略格局全面形成，城市群承载人口和经济的能力明显增强","time":"2015-09-05","num":"145","url":"../../static/about03.jpg"},
				{"text":"全面取消城区常住人口300万以下的城市落户限制，确保外地与本地农业转移人口进城落户标准","time":"2016-05-25","num":"566","url":"../../static/about02.jpg"},
				{"text":"完善城区常住人口500万以上的超大特大城市积分落户政策，精简积分项目，确保社会保险缴纳年限","time":"2018-01-26","num":"344","url":"../../static/zhutu03.jpg"},
				{"text":"农业转移人口市民化质量显著提升，城镇基本公共服务覆盖全部未落户常住人口率差距明显缩小。","time":"2013-03-14","num":"31","url":"../../static/zhutu02.jpg"},
				{"text":"超大特大城市中心城区非核心功能有序疏解，大中城市功能品质进一步提升，小城市以县城为重要载体","time":"2022-05-06","num":"544","url":"../../static/about03.jpg"},
				{"text":"根据方案，到2025年，两横三纵城镇化战略格局全面形成，城市群承载人口和经济的能力明显增强","time":"2015-09-05","num":"145","url":"../../static/about03.jpg"},
				{"text":"全面取消城区常住人口300万以下的城市落户限制，确保外地与本地农业转移人口进城落户标准","time":"2016-05-25","num":"566","url":"../../static/about02.jpg"},
				{"text":"完善城区常住人口500万以上的超大特大城市积分落户政策，精简积分项目，确保社会保险缴纳年限","time":"2018-01-26","num":"344","url":"../../static/zhutu03.jpg"},
				{"text":"农业转移人口市民化质量显著提升，城镇基本公共服务覆盖全部未落户常住人口率差距明显缩小。","time":"2013-03-14","num":"31","url":"../../static/zhutu02.jpg"},
				{"text":"超大特大城市中心城区非核心功能有序疏解，大中城市功能品质进一步提升，小城市以县城为重要载体","time":"2022-05-06","num":"544","url":"../../static/about03.jpg"},
				{"text":"根据方案，到2025年，两横三纵城镇化战略格局全面形成，城市群承载人口和经济的能力明显增强","time":"2015-09-05","num":"145","url":"../../static/about03.jpg"},
				{"text":"全面取消城区常住人口300万以下的城市落户限制，确保外地与本地农业转移人口进城落户标准","time":"2016-05-25","num":"566","url":"../../static/about02.jpg"},
				{"text":"完善城区常住人口500万以上的超大特大城市积分落户政策，精简积分项目，确保社会保险缴纳年限","time":"2018-01-26","num":"344","url":"../../static/zhutu03.jpg"},
				{"text":"农业转移人口市民化质量显著提升，城镇基本公共服务覆盖全部未落户常住人口率差距明显缩小。","time":"2013-03-14","num":"31","url":"../../static/zhutu02.jpg"},
				{"text":"超大特大城市中心城区非核心功能有序疏解，大中城市功能品质进一步提升，小城市以县城为重要载体","time":"2022-05-06","num":"544","url":"../../static/about03.jpg"}
				];
				this.list = datas;
			},
			gotodetail(index){
				uni.navigateTo({
					url:'/pages/detail/detail?id='+index
				})
			}
		}
	}
</script >

<style lang="scss" scoped>
.item{
	display: flex;
	flex-direction: row;
	width: 750rpx;
	padding: 6px;
	border-bottom: 1px solid  #b50e03;
	box-sizing: border-box;
	image{
		height: 340px;
		height: 100px;
		
	}
	.right{
		padding-left: 8px;
		view{
			line-height: 22px;
			font-size:30rpx;
		}
		.shuju{
			margin-top:10px;
			display: flex;
			flex-direction: row;
			justify-content:space-between;
			font-size:24rpx;
			text{
				
			}
		}
	}
}
</style>
