
export const myRequest = (options)=>{
	return new Promise((resolve,reject) =>{
		uni.request({
			url:'https://api.apiopen.top/api/sentences',
			success: (res) => {
				        if(res.result.name !== 's'){
							return uni.showToast({
								title: '获取数据失败',
								duration: 2000
							});
						}
						resolve(res);
						
				},
				fail:(err)=>{
					uni.showToast({
						title:'请求接口失败'
					})
					reject(err)
				}
		})
	})
}