import request from '/@/utils/request';
enum Api {
  AddOaFlowTemp = '/api/oaFlowTemp/add',
  DeleteOaFlowTemp = '/api/oaFlowTemp/delete',
  UpdateOaFlowTemp = '/api/oaFlowTemp/update',
  GetOaFlowTempPage = '/api/oaFlowTemp/page',
  GetOaFlowTempList = '/api/oaFlowTemp/List',
  GetOaFlowTemp= '/api/oaFlowTemp/detail'
}

// 增加流程模板
export const addOaFlowTemp = (params?: any) =>
	request({
		url: Api.AddOaFlowTemp,
		method: 'post',
		data: params,
	});

// 删除流程模板
export const deleteOaFlowTemp = (params?: any) => 
	request({
			url: Api.DeleteOaFlowTemp,
			method: 'post',
			data: params,
		});

// 编辑流程模板
export const updateOaFlowTemp = (params?: any) => 
	request({
			url: Api.UpdateOaFlowTemp,
			method: 'post',
			data: params,
		});

// 分页查询流程模板
export const getOaFlowTempPageList = (params?: any) => 
	request({
			url: Api.GetOaFlowTempPage,
			method: 'get',
			data: params,
		});
// 查询流程模板列表
export const getOaFlowTempList = (params?: any) => 
	request({
			url: Api.GetOaFlowTempList,
			method: 'get',
			data: params,
		});
// 分页查询流程模板
export const getOaFlowTemp = (params?: any) => 
	request({
			url: Api.GetOaFlowTemp,
			method: 'get',
			data: params,
		});
