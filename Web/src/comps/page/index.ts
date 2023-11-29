import request from '/@/utils/request';
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '/@/router';
import { uuid } from '/@/utils/xutil';


export async function listQuery(state: any) {
	const data: any = await request({
		url: state.url,
		method: 'get',
		params: state.form,
	});
	state.list = data.items;
	state.total = data.total;
	state.loading = false;
}

export function listSelect(selection: any, state: any) {
	state.ids = selection.map((item: any) => item.id);
	state.single = selection.length !== 1;
	state.multiple = !selection.length;
}

export async function listDelete(state: any) {
	const delIds = state.ids.join(',');
	if (delIds.length <= 0) {
		ElMessage.warning('请选择后再进行删除');
		return;
	}
	ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			// ElMessage.warning('演示模式，禁用了删除');
			await request({url: state.url + '/' + delIds, method: 'delete',});
			await listQuery(state);
		})
		.catch(() => ElMessage.info('已取消删除'));
}

export const listItemDelete = async (state: any, id: string) => {
	ElMessageBox.confirm('确认要删除吗?', '警告', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			// ElMessage.warning('演示模式，禁用了删除');
			await request({url: state.url + '/' + id, method: 'delete',});
			await listQuery(state);
		})
		.catch(() => ElMessage.info('已取消删除'));
};

export async function treeQuery(state: any) {
	state.list = await request({
		url: state.url + '/tree',
		method: 'get',
		params: state.form,
	});
	state.loading = false;
}

export function treeSelect(selection: any, state: any) {
	state.ids = selection.map((item: any) => item.id);
	state.single = selection.length !== 1;
	state.multiple = !selection.length;
}


export async function treeDelete(state: any) {
	const delIds = state.ids.join(',');
	if (delIds.length <= 0) {
		ElMessage.warning('请选择后再进行删除');
		return;
	}
	ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			// ElMessage.warning('演示模式，禁用了删除');
			await request({url: state.url + '/' + delIds, method: 'delete',});
			await treeQuery(state);
		})
		.catch(() => ElMessage.info('已取消删除'));
}

export const treeItemDelete = async (state: any, id: string) => {
	ElMessageBox.confirm('确认要删除吗?', '警告', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			// ElMessage.warning('演示模式，禁用了删除');
			await request({url: state.url + '/' + id, method: 'delete',});
			await treeQuery(state);
		})
		.catch(() => ElMessage.info('已取消删除'));
};






export const tabEdit =async (url: string, id: string) => {
	await router.push({
		path: url + '/edit',
		query: { id: id },
	});
};

export const tabView =async (url: string, id: string) => {
	await router.push({
		path: url + '/view',
		query: { id: id },
	});
};

export const pageAdd = (url: string) => {
	// if(url.indexOf("?")>0){
	// 	window.open('/#/page/'+url+'&type=add');
	// }else{
	// 	window.open('/#/page/'+url+'?type=add');
	// }
	window.open(import.meta.env.VITE_PUBLIC_PATH +  url);
};


export const pageEdit = (url: string) => {
	window.open(import.meta.env.VITE_PUBLIC_PATH + url);
};

export const pageView = (url: string) => {
	window.open(import.meta.env.VITE_PUBLIC_PATH +  url);
};

export const toFinish = () => {
	window.alert("待完成");
};


