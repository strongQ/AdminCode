<template>
	<div class="oaFlowCate-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" >
              <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable placeholder="请输入名称"/>
              </el-form-item>
              </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20 search-actions">
          <div><el-button type="primary" icon="ele-Plus" @click="openAddOaFlowCate" v-auth="'oaFlowCate:add'"> 新增 </el-button></div>
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'oaFlowCate:page'"> 查询 </el-button>
          </div>
          </el-col>
      </el-row>
      </el-form>
		</el-card>
		<el-card shadow="hover" style="margin-top: 8px">
			<el-table ref='tableRef'
				:data="tableData"
				style="width: 100%"
				v-loading="loading"
				tooltip-effect="light"
				row-key="id"
				:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				border="">
				<el-table-column type="index" label="序号" width="55" align="center" fixed="" />
				<el-table-column label='分类名称' width='180'>
					<template #default='scope'>
						<span style='cursor:pointer;color: #972fcb' @click='toggle(scope.row)'>{{ scope.row.name }}</span>
					</template>
				</el-table-column>
				 <el-table-column prop="ornum" label="排序号" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="remark" label="备注" fixed="" show-overflow-tooltip="" />
				
				 <el-table-column prop="createTime" label="创建时间" fixed="" show-overflow-tooltip="" />
				<el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('oaFlowCate:edit') || auth('oaFlowCate:delete')">
					<template #default="scope">
						<el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditOaFlowCate(scope.row)" v-auth="'oaFlowCate:edit'"> 编辑 </el-button>
						<el-button icon="ele-Delete" size="small" text="" type="primary" @click="delOaFlowCate(scope.row)" v-auth="'oaFlowCate:delete'"> 删除 </el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- <el-pagination
				v-model:currentPage="tableParams.page"
				v-model:page-size="tableParams.pageSize"
				:total="tableParams.total"
				:page-sizes="[10, 20, 50, 100]"
				small=""
				background=""
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
	/> -->
			<editDialog
			    ref="editDialogRef"
			    :title="editOaFlowCateTitle"
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

	import editDialog from '/@/views/system/oa/oaFlowCate/component/editDialog.vue'
	import { getOaFlowCatePageList, deleteOaFlowCate } from '/@/api/system/oaFlowCate';
import { rmSync } from "fs";


const tableRef = ref();
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
	const editOaFlowCateTitle = ref("");


	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getOaFlowCatePageList(Object.assign(queryParams.value, tableParams.value));

	
	tableData.value = res.data.result ?? [];
	
	loading.value = false;
};

// 打开新增页面
const openAddOaFlowCate = () => {
	editOaFlowCateTitle.value = '添加流程分类';
  editDialogRef.value.openDialog({});
};

// 打开编辑页面
const openEditOaFlowCate = (row: any) => {
	editOaFlowCateTitle.value = '编辑流程分类';
  editDialogRef.value.openDialog(row);
};

// 删除
const delOaFlowCate = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deleteOaFlowCate(row);
      handleQuery();
      ElMessage.success("删除成功");
    })
    .catch(() => {});
};

const toggle=(row:any)=>{
	tableRef.value.toggleRowExpansion(row);
}


handleQuery();
</script>


