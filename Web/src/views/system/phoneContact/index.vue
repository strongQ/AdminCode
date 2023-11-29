<template>
	<div class="phoneContact-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="queryParams" ref="queryForm" :inline="true">
			<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="号码">
              <el-input v-model="queryParams.phone" clearable placeholder="请输入号码"/>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="名称">
              <el-input v-model="queryParams.name" clearable placeholder="请输入名称"/>
              </el-form-item>
              </el-col>
            
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="地址">
              <el-input v-model="queryParams.address" clearable placeholder="请输入地址"/>
              </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" >
              <el-form-item label="创建时间">
					<el-date-picker placeholder="请选择创建时间" value-format="YYYY/MM/DD" type="daterange" v-model="queryParams.createtimeRange" />
              </el-form-item>
              </el-col>      
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20 search-actions">
          <div><el-button type="primary" icon="ele-Plus" @click="openAddPhoneContact" v-auth="'phoneContact:add'"> 新增 </el-button></div>
          <div>
          <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
          <el-button type="primary" plain icon="ele-Search" @click="handleQuery" v-auth="'phoneContact:page'"> 查询 </el-button>
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
				 <el-table-column prop="phone" label="号码" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="name" label="名称" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="relationphone" label="关联号码" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="address" label="地址" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="createtime" label="创建时间" fixed="" show-overflow-tooltip="" />
				 <el-table-column prop="updatetime" label="更新时间" fixed="" show-overflow-tooltip="" />
				<el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('phoneContact:edit') || auth('phoneContact:delete')">
					<template #default="scope">
						<el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditPhoneContact(scope.row)" v-auth="'phoneContact:edit'"> 编辑 </el-button>
						<el-button icon="ele-Delete" size="small" text="" type="primary" @click="delPhoneContact(scope.row)" v-auth="'phoneContact:delete'"> 删除 </el-button>
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
			    :title="editPhoneContactTitle"
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

	import editDialog from '/@/views/system/phoneContact/component/editDialog.vue'
	import { getPhoneContactPageList, deletePhoneContact } from '/@/api/system/phoneContact';


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
	const editPhoneContactTitle = ref("");


	// 查询操作
	const handleQuery = async () => {
	loading.value = true;
	var res = await getPhoneContactPageList(Object.assign(queryParams.value, tableParams.value));
	tableData.value = res.data.result?.items ?? [];
	tableParams.value.total = res.data.result?.total;
	loading.value = false;
};

// 打开新增页面
const openAddPhoneContact = () => {
	editPhoneContactTitle.value = '添加通讯录';
  editDialogRef.value.openDialog({});
};

// 打开编辑页面
const openEditPhoneContact = (row: any) => {
	editPhoneContactTitle.value = '编辑通讯录';
  editDialogRef.value.openDialog(row);
};

// 删除
const delPhoneContact = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
	    await deletePhoneContact(row);
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


