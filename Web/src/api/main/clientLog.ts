import request from '/@/utils/request';
enum Api {
  AddClientLog = '/api/clientLog/add',
  DeleteClientLog = '/api/clientLog/delete',
  UpdateClientLog = '/api/clientLog/update',
  GetClientLogPage = '/api/clientLog/page',
}

// 增加ClientLogService
export const addClientLog = (params?: any) =>
	request({
		url: Api.AddClientLog,
		method: 'post',
		data: params,
	});

// 删除ClientLogService
export const deleteClientLog = (params?: any) => 
	request({
			url: Api.DeleteClientLog,
			method: 'post',
			data: params,
		});

// 编辑ClientLogService
export const updateClientLog = (params?: any) => 
	request({
			url: Api.UpdateClientLog,
			method: 'post',
			data: params,
		});

// 分页查询ClientLogService
export const getClientLogPageList = (params?: any) => 
	request({
			url: Api.GetClientLogPage,
			method: 'get',
			data: params,
		});


