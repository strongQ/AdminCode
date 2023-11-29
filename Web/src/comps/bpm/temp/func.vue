<template>
	<el-dialog v-model='dialogVisible' title='公式定义器' draggable width='900px'>
		<div style='height: 440px'>
			<el-row gutter='8'>
				<el-col :span='8'>
					<el-card class='box-card' style='height: 100%;' body-style='height: 100%;overflow: auto'>
						<template #header>
							<div class='card-header'>
								<div class='tree-h-flex'>
									<div class='tree-h-left'>
										<el-input :prefix-icon='Search' v-model='filterText' placeholder='输入名称查询' />
									</div>
									<div class='tree-h-right'>
										<el-dropdown @command='handleCommand'>
											<el-button style='margin-left: 8px;width: 34px'>
												<el-icon class='el-icon--center'>
													<MoreFilled />
												</el-icon>
											</el-button>
											<template #dropdown>
												<el-dropdown-menu>
													<el-dropdown-item command='expandAll'>全部展开</el-dropdown-item>
													<el-dropdown-item command='collapseAll'>全部折叠</el-dropdown-item>
													<el-dropdown-item command='rootNode'>根节点</el-dropdown-item>
													<el-dropdown-item command='refresh'>刷新</el-dropdown-item>
												</el-dropdown-menu>
											</template>
										</el-dropdown>
									</div>
								</div>
							</div>
						</template>
						<div style='margin-bottom: 45px'>
							<el-tree highlight-current ref='treeRef' class='filter-tree' :data='state.data' :props='defaultProps' :filter-node-method='filterNode' @node-click='nodeClick' />
						</div>
					</el-card>
				</el-col>
				<el-col :span='16' >
					<el-card class='box-card' style='height: 100%;' body-style='height: 100%;overflow: auto'>
						<template #header>
							<div class='card-header'>
								<div class='zjustify'>
									<div>
<!--										<el-input v-model='state.form.name' placeholder='输入名称回车查询' class='list-search' clearable @keyup.enter='listQuery()' />-->
<!--										<el-button type='primary' @click='listQuery()' plain>查 询</el-button>-->
									</div>
									<div>
										<el-button type='primary' @click='handleConfirm'>确 认</el-button>
										<el-button @click='dialogVisible = false'>取 消</el-button>
									</div>
								</div>
							</div>
						</template>
						<div style='margin-bottom: 45px'>
							<el-input type='textarea' placeholder='测试' :rows='8' v-model='state.form.func'/>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</el-dialog>
</template>


<script lang='ts' setup>
import { defineExpose, onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import request from '/@/utils/request';

const state = reactive({
	loading: true, ids: [],
	form: {func:''}, single: true, multiple: true, list: [], total: 0,
});

const props = defineProps({
	url: String,
	maInit: Boolean,
});

onMounted(() => {

});


const dialogVisible = ref(false);
const open = async (data: any) => {
	dialogVisible.value = true;
};
defineExpose({ open });

const emits = defineEmits(['close']);

const handleConfirm = () => {
	// const chooseIds = state.ids.join(',');
	// if (chooseIds.length <= 0) {
	// 	ElMessage.warning('请先点击选择项');
	// 	return;
	// } else if (state.ids.length >= 2) {
	// 	ElMessage.warning('请选择单个选择项，不要多选');
	// 	return;
	// }
	emits('close', { func: state.form.func });
	dialogVisible.value = false;
};

</script>

<style scoped>
.tree-h-flex {
	display: flex;
}

.tree-h-left {
	flex: 1;
	width: 100%;
}

.tree-h-right {
	width: 42px;
	min-width: 42px;
}
</style>
