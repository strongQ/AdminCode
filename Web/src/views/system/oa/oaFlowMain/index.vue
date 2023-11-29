<template>
	<div class="oaFlowMain-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable placeholder="请输入名称"/>
              </el-form-item>
              </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20 search-actions">
          <div><el-button type="primary" icon="ele-Plus" @click="openAddOaFlowMain" v-auth="'oaFlowMain:add'"> 新增 </el-button></div>
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'oaFlowMain:page'"> 查询 </el-button>
          </div>
          </el-col>
      </el-row>
      </el-form>
		</el-card>
		<el-card shadow="hover" style="margin-top: 8px">
			<el-table
				:data="tableData"
				style="width: 100%"
				v-loading="loading"
				tooltip-effect="light"
				row-key="id"
				border="">
				<el-table-column type="index" label="序号" width="55" align="center" fixed="" />
				
				<el-table-column label='流程主题' fixed="" width='200'>
					<template #default='scope'>
						<span style='cursor:pointer;color: #3e9ece' @click='pageView("/#/oa/ofmv?id="+scope.row.id)'>{{ scope.row.name }}</span>
					</template>
				</el-table-column>
				 <el-table-column prop="temName" label="流程模板" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="createUser" label="申请人" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="createtime" label="创建时间" fixed="" show-overflow-tooltip="" />
				 <el-table-column  label="送审时间" fixed="" show-overflow-tooltip="" >
					<template #default='scope'>
						<span>{{scope.row.updatetime?scope.row.updatetime:scope.row.createtime }}</span>
					</template>
				 </el-table-column>
					<el-table-column label='状态' prop='state' width='60' header-align='center' align='center'>
					<template #default='scope'>
						<el-tag v-show="scope.row.state==='30'" type='success' size='small'>结束</el-tag>
						<el-tag v-show="scope.row.state==='20'" type='warning' size='small'>待审</el-tag>
						<el-tag v-show="scope.row.state==='11'" type='danger' size='small'>驳回</el-tag>
						<el-tag v-show="scope.row.state==='10'" type='primary' size='small'>草稿</el-tag>
						<el-tag v-show="scope.row.state==='00'" type='info' size='small'>废弃</el-tag>
					</template>
				</el-table-column>
				 <el-table-column label='当前环节' fixed="" prop='facno' width='160' />
				<el-table-column label='当前处理人' fixed="" prop='handleName' width='160' />
				<el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('oaFlowMain:edit') || auth('oaFlowMain:delete')">
					<template #default="scope">
						
						<el-button icon="ele-Delete" size="small" text="" type="primary" @click="delOaFlowMain(scope.row)" v-auth="'oaFlowMain:delete'"> 删除 </el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				v-model:currentPage="tableParams.page"
				v-model:page-size="tableParams.pageSize"
				:total="tableParams.total"
				:page-sizes="[10, 20, 50, 100]"
				small=""
				background=""
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
	/>
			<editDialog
			    ref="editDialogRef"
			    :title="editOaFlowMainTitle"
			    @reloadTable="handleQuery"
      />
		</el-card>

		<FlowModal ref='flowModalRef' @close='closeFlowModal' />
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { ElMessageBox, ElMessage } from "element-plus";
	import { auth } from '/@/utils/authFunction';
	//import { formatDate } from '/@/utils/formatTime';
	import {  pageView } from '/@/comps/page/index';
	import editDialog from '/@/views/system/oa/oaFlowMain/component/editDialog.vue'
	import { getOaFlowMainPageList, deleteOaFlowMain } from '/@/api/system/oaFlowMain';
	import FlowModal from './component/FlowModal.vue';

	//弹框逻辑
const flowModalRef = ref();
		const editDialogRef = ref();
		const loading = ref(false);
		const tableData = ref<any>([]);
const queryParams = ref<any>
	({});
	const tableParams = ref({
	page: 1,
	pageSize: 10,
	total: 0,
	});
	const editOaFlowMainTitle = ref("");


	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getOaFlowMainPageList(Object.assign(queryParams.value, tableParams.value));
	tableData.value = res.data.result?.items ?? [];
	tableParams.value.total = res.data.result?.total;
	loading.value = false;
};

// 打开新增页面
const openAddOaFlowMain = () => {
// 	editOaFlowMainTitle.value = '添加流程实例';
//   editDialogRef.value.openDialog({});
openFlowModal();
};

// 打开编辑页面
const openEditOaFlowMain = (row: any) => {
	editOaFlowMainTitle.value = '编辑流程实例';
  editDialogRef.value.openDialog(row);
};

// 删除
const delOaFlowMain = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deleteOaFlowMain(row);
      handleQuery();
      ElMessage.success("删除成功");
    })
    .catch(() => {});
};

// 改变页面容量
const handleSizeChange = (val: number) => {
  tableParams.value.pageSize = val;
  handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
  tableParams.value.page = val;
  handleQuery();
};


handleQuery();


const closeFlowModal = (node: any) => {
	setTimeout(() => {
		if (node && node.id) {
			window.open('#/oa/ofme?temid=' + node.id);
		}
	}, 50);
};
const openFlowModal = () => {
	flowModalRef.value.openModal();
};
</script>


