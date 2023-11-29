import request from '/@/utils/request';
enum Api {
  AddOaFlowMain = '/api/oaFlowMain/add',
  DeleteOaFlowMain = '/api/oaFlowMain/delete',
  UpdateOaFlowMain = '/api/oaFlowMain/update',
  GetOaFlowMainPage = '/api/oaFlowMain/page',
  GetOaFlowMain = '/api/oaFlowMain/detail',
}

// 增加流程实例
export const addOaFlowMain = (params?: any) =>
	request({
		url: Api.AddOaFlowMain,
		method: 'post',
		data: params,
	});

// 删除流程实例
export const deleteOaFlowMain = (params?: any) => 
	request({
			url: Api.DeleteOaFlowMain,
			method: 'post',
			data: params,
		});

// 编辑流程实例
export const updateOaFlowMain = (params?: any) => 
	request({
			url: Api.UpdateOaFlowMain,
			method: 'post',
			data: params,
		});

// 分页查询流程实例
export const getOaFlowMainPageList = (params?: any) => 
	request({
			url: Api.GetOaFlowMainPage,
			method: 'get',
			data: params,
		});
// 查询流程实例
export const getOaFlowMain = (params?: any) => 
	request({
			url: Api.GetOaFlowMain,
			method: 'get',
			data: params,
		});


