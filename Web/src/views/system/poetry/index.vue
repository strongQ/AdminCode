<template>
	<div class="poetry-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">

			<el-collapse  accordion>
      <el-collapse-item title="查询" name="1">
       
      
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="标题">
              <el-input v-model="queryParams.title" clearable placeholder="请输入标题"/>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="朝代">
              <el-input v-model="queryParams.dynasty" clearable placeholder="请输入朝代"/>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="诗人">
              <el-input v-model="queryParams.author" clearable placeholder="请输入诗人"/>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="内容">
              <el-input v-model="queryParams.content" clearable placeholder="请输入内容"/>
              </el-form-item>
              </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20 search-actions">
          <div><el-button type="primary" icon="ele-Plus" @click="openAddPoetry" v-auth="'poetry:add'"> 新增 </el-button></div>
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'poetry:page'"> 查询 </el-button>
		  <el-button type="primary" plain icon="ele-Search" @click="randomQuery" v-auth="'poetry:page'"> 随机 </el-button>
          </div>
          </el-col>
      </el-row>
	</el-form>
	</el-collapse-item>
	</el-collapse>
	
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
				<el-table-column prop="content" label="内容" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="title" label="标题" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="dynasty" label="朝代" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="author" label="诗人" fixed="" show-overflow-tooltip="" />
				
				<el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('poetry:edit') || auth('poetry:delete')">
					<template #default="scope">
						<el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditPoetry(scope.row)" v-auth="'poetry:edit'"> 编辑 </el-button>
						
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
			    :title="editPoetryTitle"
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

	import editDialog from '/@/views/system/poetry/component/editDialog.vue'
	import { getPoetryPageList, deletePoetry,getRandomPoetry } from '/@/api/system/poetry';


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
	const editPoetryTitle = ref("");


	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getPoetryPageList(Object.assign(queryParams.value, tableParams.value));
	tableData.value = res.data.result?.items ?? [];
	tableParams.value.total = res.data.result?.total;
	loading.value = false;
};
// 随机诗
const randomQuery=async()=>{
	loading.value = true;
	var res = await getRandomPoetry({number:5});
	tableData.value = res.data.result ?? [];
	console.log(res);
	loading.value = false;

}


// 打开新增页面
const openAddPoetry = () => {
	editPoetryTitle.value = '添加诗香文地';
  editDialogRef.value.openDialog({});
};

// 打开编辑页面
const openEditPoetry = (row: any) => {
	editPoetryTitle.value = '编辑诗香文地';
  editDialogRef.value.openDialog(row);
};

// 删除
const delPoetry = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deletePoetry(row);
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