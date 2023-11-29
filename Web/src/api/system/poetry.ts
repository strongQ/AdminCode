import request from '/@/utils/request';
enum Api {
  AddPoetry = '/api/poetry/add',
  DeletePoetry = '/api/poetry/delete',
  UpdatePoetry = '/api/poetry/update',
  GetPoetryPage = '/api/poetry/page',
  GetRandom="/api/poetry/random"
}

// 增加诗香文地
export const addPoetry = (params?: any) =>
	request({
		url: Api.AddPoetry,
		method: 'post',
		data: params,
	});

// 删除诗香文地
export const deletePoetry = (params?: any) => 
	request({
			url: Api.DeletePoetry,
			method: 'post',
			data: params,
		});

// 编辑诗香文地
export const updatePoetry = (params?: any) => 
	request({
			url: Api.UpdatePoetry,
			method: 'post',
			data: params,
		});

// 分页查询诗香文地
export const getPoetryPageList = (params?: any) => 
	request({
			url: Api.GetPoetryPage,
			method: 'get',
			data: params,
		});
		// 获取随机诗
		export const getRandomPoetry = (params?: any) => 
		request({
				url: Api.GetRandom,
				method: 'get',
				data: params,
			});
