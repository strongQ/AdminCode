<template>
	<div class="sysTodoMain-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" >
              <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable placeholder="请输入名称"/>
              </el-form-item>
              </el-col>

			  <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" >
              <el-form-item label="类型">
				<el-select v-model='queryParams.type' placeholder='请选择' style='width:300px;margin-right: 8px' >
						<el-option :key="0" :value="0" :label="'待办'"></el-option>
						<el-option :key="1" :value="1" :label="'已办'"></el-option>
					</el-select>
              </el-form-item>
              </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="mb20 search-actions">
         
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'sysTodoMain:page'"> 查询 </el-button>
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
				<el-table-column label='待办主题' fixed="" width='250'>
					<template #default='scope'>
						<span style='cursor:pointer;color: #3e9ece' @click='pageView(scope.row.link)'>{{ scope.row.name }}</span>
					</template>
				</el-table-column>
				 <el-table-column prop="handleName" label="待处理人" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="remark" label="备注" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="createtime" label="创建时间" fixed="" show-overflow-tooltip="" />
				 <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if=" auth('sysTodoMain:delete')">
					<template #default="scope">
						
						<el-button icon="ele-Delete" size="small" text="" type="primary" @click="delSysTodoMain(scope.row)" v-auth="'oaFlowTemp:delete'"> 删除 </el-button>
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
			    :title="editSysTodoMainTitle"
			    @reloadTable="handleQuery"
      />
		</el-card>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { ElMessageBox, ElMessage } from "element-plus";
	import { auth } from '/@/utils/authFunction';
	//import { formatDate } from '/@/utils/formatTime';
	import {  pageView } from '/@/comps/page/index';
	import editDialog from '/@/views/system/oa/sysTodoMain/component/editDialog.vue'
	import { getSysTodoMainPageList, deleteSysTodoMain } from '/@/api/system/sysTodoMain';


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
	const editSysTodoMainTitle = ref("");

	queryParams.value.type=0;

	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getSysTodoMainPageList(Object.assign(queryParams.value, tableParams.value));
	tableData.value = res.data.result?.items ?? [];
	tableParams.value.total = res.data.result?.total;
	loading.value = false;
};

// 打开新增页面
const openAddSysTodoMain = () => {
	editSysTodoMainTitle.value = '添加流程待办';
  editDialogRef.value.openDialog({});
};

// 打开编辑页面
const openEditSysTodoMain = (row: any) => {
	editSysTodoMainTitle.value = '编辑流程待办';
  editDialogRef.value.openDialog(row);
};

// 删除
const delSysTodoMain = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deleteSysTodoMain(row);
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
</script>


