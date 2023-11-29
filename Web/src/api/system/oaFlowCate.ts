import request from '/@/utils/request';
enum Api {
  AddOaFlowCate = '/api/oaFlowCate/add',
  DeleteOaFlowCate = '/api/oaFlowCate/delete',
  UpdateOaFlowCate = '/api/oaFlowCate/update',
  GetOaFlowCatePage = '/api/oaFlowCate/page',
}

// 增加流程分类
export const addOaFlowCate = (params?: any) =>
	request({
		url: Api.AddOaFlowCate,
		method: 'post',
		data: params,
	});

// 删除流程分类
export const deleteOaFlowCate = (params?: any) => 
	request({
			url: Api.DeleteOaFlowCate,
			method: 'post',
			data: params,
		});

// 编辑流程分类
export const updateOaFlowCate = (params?: any) => 
	request({
			url: Api.UpdateOaFlowCate,
			method: 'post',
			data: params,
		});

// 分页查询流程分类
export const getOaFlowCatePageList = (params?: any) => 
	request({
			url: Api.GetOaFlowCatePage,
			method: 'get',
			data: params,
		});


