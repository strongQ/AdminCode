<template>
	 <div class="oaFlowTemp-container">
    <el-row :gutter="8" style="width: 100%">
      <el-col :span="4" :xs="24">
        <CateTree url='/api/oaFlowCate/tree' @node-click='nodeClick' />
      </el-col>

      <el-col :span="20" :xs="24">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable placeholder="请输入名称"/>
              </el-form-item>
              </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20 search-actions">
          <div><el-button type="primary" icon="ele-Plus" @click="openAddOaFlowTemp" v-auth="'oaFlowTemp:add'"> 新增 </el-button></div>
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'oaFlowTemp:page'"> 查询 </el-button>
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
				 <el-table-column prop="remark" label="备注" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="name" label="名称" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="ornum" label="排序号" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="createTime" label="创建时间" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="updateTime" label="更新时间" fixed="" show-overflow-tooltip="" />
				<el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('oaFlowTemp:edit') || auth('oaFlowTemp:delete')">
					<template #default="scope">
						<el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditOaFlowTemp(scope.row)" v-auth="'oaFlowTemp:edit'"> 编辑 </el-button>
						<el-button icon="ele-Delete" size="small" text="" type="primary" @click="delOaFlowTemp(scope.row)" v-auth="'oaFlowTemp:delete'"> 删除 </el-button>
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
			<!-- <editDialog
			    ref="editDialogRef"
			    :title="editOaFlowTempTitle"
			    @reloadTable="handleQuery"
      /> -->
		</el-card>
		</el-col>	
		</el-row>
		</div>
	
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { ElMessageBox, ElMessage } from "element-plus";
	import { auth } from '/@/utils/authFunction';
	//import { formatDate } from '/@/utils/formatTime';

	
	import { getOaFlowTempPageList, deleteOaFlowTemp } from '/@/api/system/oaFlowTemp';
	import CateTree from '/@/comps/gen/GenTree.vue';


	    const selectNode=ref<any>({});
		
		const loading = ref(false);
		const tableData = ref<any>([]);
const queryParams = ref<any>
	({});
	const tableParams = ref({
	page: 1,
	pageSize: 10,
	total: 0,
	});
	const editOaFlowTempTitle = ref("");


	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getOaFlowTempPageList(Object.assign(queryParams.value, tableParams.value));
	tableData.value = res.data.result?.items ?? [];
	tableParams.value.total = res.data.result?.total;
	loading.value = false;
};

//region a 左侧部门树点击
const nodeClick = async (node: any) => {
	queryParams.value.cateId=node.id;
	selectNode.value=node;
	await handleQuery();
};

// 打开新增页面
const openAddOaFlowTemp = () => {
	editOaFlowTempTitle.value = '添加流程模板';

 let url="";

 if(selectNode.value.id){
	url=`catid=${selectNode.value.id}&catna=${selectNode.value.name}`;
 }
 
 pageAdd(url);
 
};

// 打开编辑页面
const openEditOaFlowTemp = (row: any) => {
	editOaFlowTempTitle.value = '编辑流程模板';
 let url=`id=${row.id}`
  pageAdd(url);
};

// 删除
const delOaFlowTemp = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deleteOaFlowTemp(row);
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



 const pageAdd = (url: string) => {
	// if(url.indexOf("?")>0){
	// 	window.open('/#/page/'+url+'&type=add');
	// }else{
	// 	window.open('/#/page/'+url+'?type=add');
	// }
	window.open("#/oa/ofte?"+url);
};
</script>


