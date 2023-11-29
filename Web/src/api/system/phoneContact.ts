import request from '/@/utils/request';
enum Api {
  AddPhoneContact = '/api/phoneContact/add',
  DeletePhoneContact = '/api/phoneContact/delete',
  UpdatePhoneContact = '/api/phoneContact/update',
  GetPhoneContactPage = '/api/phoneContact/page',
}

// 增加通讯录
export const addPhoneContact = (params?: any) =>
	request({
		url: Api.AddPhoneContact,
		method: 'post',
		data: params,
	});

// 删除通讯录
export const deletePhoneContact = (params?: any) => 
	request({
			url: Api.DeletePhoneContact,
			method: 'post',
			data: params,
		});

// 编辑通讯录
export const updatePhoneContact = (params?: any) => 
	request({
			url: Api.UpdatePhoneContact,
			method: 'post',
			data: params,
		});

// 分页查询通讯录
export const getPhoneContactPageList = (params?: any) => 
	request({
			url: Api.GetPhoneContactPage,
			method: 'get',
			data: params,
		});


