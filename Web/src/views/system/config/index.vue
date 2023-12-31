<template>
	<div class="sys-config-container">
		<el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
			<el-form :model="state.queryParams" ref="queryForm" :inline="true">
        <el-row :gutter="35">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <el-form-item label="配置名称" prop="name">
              <el-input placeholder="配置名称" clearable @keyup.enter="handleQuery" v-model="state.queryParams.name" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">  
            <el-form-item label="配置编码" prop="code">
              <el-input placeholder="配置编码" clearable @keyup.enter="handleQuery" v-model="state.queryParams.code" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">  
            <el-form-item label="分组编码" prop="groupCode">
              <el-input placeholder="分组编码" clearable @keyup.enter="handleQuery" v-model="state.queryParams.groupCode" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20 search-actions">
            <div>
              <el-button type="primary"  icon="ele-Plus" @click="openAddConfig" v-auth="'sysConfig:add'"> 新增 </el-button>
            </div>
            <div>
              <el-form-item>
                <el-button icon="ele-Refresh" @click="resetQuery"> 重置 </el-button>
                <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'sysConfig:page'" plain> 查询 </el-button> 
              </el-form-item>
            </div>
          </el-col>
        </el-row>
			</el-form>
		</el-card>

		<el-card shadow="hover" style="margin-top: 8px">
			<el-table :data="state.configData" style="width: 100%" v-loading="state.loading" border>
				<el-table-column type="index" label="序号" width="55" align="center" />
				<el-table-column prop="name" label="配置名称" show-overflow-tooltip />
				<el-table-column prop="code" label="配置编码" show-overflow-tooltip />
				<el-table-column prop="value" label="属性值" show-overflow-tooltip />
				<el-table-column prop="sysFlag" label="内置参数" width="100" align="center" show-overflow-tooltip>
					<template #default="scope">
						<el-tag v-if="scope.row.sysFlag === 1"> 是 </el-tag>
						<el-tag type="danger" v-else> 否 </el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="groupCode" label="分组编码" show-overflow-tooltip />
				<el-table-column prop="orderNo" label="排序" width="70" align="center" show-overflow-tooltip />
				<el-table-column prop="createTime" label="修改时间" align="center" show-overflow-tooltip />
				<el-table-column prop="remark" label="备注" show-overflow-tooltip />
				<el-table-column label="操作" width="140" fixed="right" align="center" show-overflow-tooltip>
					<template #default="scope">
						<el-button icon="ele-Edit" size="small" text type="primary" @click="openEditConfig(scope.row)" v-auth="'sysConfig:update'"> 编辑 </el-button>
						<el-button icon="ele-Delete" size="small" text type="danger" @click="delConfig(scope.row)" v-auth="'sysConfig:delete'"> 删除 </el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				v-model:currentPage="state.tableParams.page"
				v-model:page-size="state.tableParams.pageSize"
				:total="state.tableParams.total"
				:page-sizes="[10, 20, 50, 100]"
				small
				background
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
			/>
		</el-card>
		<EditConfig ref="editConfigRef" :title="state.editConfigTitle" />
	</div>
</template>

<script lang="ts" setup name="sysConfig">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import mittBus from '/@/utils/mitt';
import EditConfig from '/@/views/system/config/component/editConfig.vue';

import { getAPI } from '/@/utils/axios-utils';
import { SysConfigApi } from '/@/api-services/api';
import { SysConfig } from '/@/api-services/models';

const editConfigRef = ref<InstanceType<typeof EditConfig>>();
const state = reactive({
	loading: false,
	configData: [] as Array<SysConfig>,
	queryParams: {
		name: undefined,
		code: undefined,
		groupCode: undefined,
	},
	tableParams: {
		page: 1,
		pageSize: 10,
		total: 0 as any,
	},
	editConfigTitle: '',
});

onMounted(async () => {
	handleQuery();

	mittBus.on('submitRefresh', () => {
		handleQuery();
	});
});

onUnmounted(() => {
	mittBus.off('submitRefresh');
});

// 查询操作
const handleQuery = async () => {
	state.loading = true;
	var res = await getAPI(SysConfigApi).apiSysConfigPageGet(state.queryParams.name, state.queryParams.code, state.queryParams.groupCode, state.tableParams.page, state.tableParams.pageSize);
	state.configData = res.data.result?.items ?? [];
	state.tableParams.total = res.data.result?.total;
	state.loading = false;
};

// 重置操作
const resetQuery = () => {
	state.queryParams.name = undefined;
	state.queryParams.code = undefined;
	state.queryParams.groupCode = undefined;
	handleQuery();
};

// 打开新增页面
const openAddConfig = () => {
	state.editConfigTitle = '添加配置';
	editConfigRef.value?.openDialog({});
};

// 打开编辑页面
const openEditConfig = (row: any) => {
	state.editConfigTitle = '编辑配置';
	editConfigRef.value?.openDialog(row);
};

// 删除
const delConfig = (row: any) => {
	ElMessageBox.confirm(`确定删除配置：【${row.name}】?`, '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			await getAPI(SysConfigApi).apiSysConfigDeletePost({ id: row.id });
			handleQuery();
			ElMessage.success('删除成功');
		})
		.catch(() => {});
};

// 改变页面容量
const handleSizeChange = (val: number) => {
	state.tableParams.pageSize = val;
	handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
	state.tableParams.page = val;
	handleQuery();
};
</script>
