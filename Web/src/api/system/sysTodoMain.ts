import request from '/@/utils/request';
enum Api {
  AddSysTodoMain = '/api/sysTodoMain/add',
  DeleteSysTodoMain = '/api/sysTodoMain/delete',
  UpdateSysTodoMain = '/api/sysTodoMain/update',
  GetSysTodoMainPage = '/api/sysTodoMain/page',
}

// 增加流程待办
export const addSysTodoMain = (params?: any) =>
	request({
		url: Api.AddSysTodoMain,
		method: 'post',
		data: params,
	});

// 删除流程待办
export const deleteSysTodoMain = (params?: any) => 
	request({
			url: Api.DeleteSysTodoMain,
			method: 'post',
			data: params,
		});

// 编辑流程待办
export const updateSysTodoMain = (params?: any) => 
	request({
			url: Api.UpdateSysTodoMain,
			method: 'post',
			data: params,
		});

// 分页查询流程待办
export const getSysTodoMainPageList = (params?: any) => 
	request({
			url: Api.GetSysTodoMainPage,
			method: 'get',
			data: params,
		});


