<template>
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
			<el-tree highlight-current ref='treeRef' class='filter-tree' :data='state.data' :props='defaultProps' :filter-node-method='filterNode' @node-click="nodeClick"/>
		</div>
	</el-card>
</template>

<script lang='ts' setup>
import { defineExpose, onMounted, reactive, ref, watch } from 'vue';
import type { ElTree } from 'element-plus';
import { Search, MoreFilled } from '@element-plus/icons-vue';
import request from '/@/utils/request';

const props = defineProps({
	url: String,
	maInit: Boolean,
});


interface Tree {
	id: number;
	name: string;
	children?: Tree[];
}

const filterText = ref('');
const treeRef = ref<InstanceType<typeof ElTree>>();


const defaultProps = {
	children: 'children',
	label: 'name',
};

watch(filterText, (val) => {
	treeRef.value!.filter(val);
});

const filterNode = (value: string, data: Tree) => {
	if (!value) return true;
	return data.name.includes(value);
};


const state = reactive({
	data: [] as any,
});


const handleCommand =async (command: string | number | object) => {
	if ('expandAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = true;
		}
	} else if ('collapseAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = false;
		}
	}else if('refresh' == command){
    await initTreeData();
  }else if('rootNode' == command){
    emits('node-click', { id: '', name: '',type:'' });
  }
};


// // 初始化表格数据
const initTreeData = async () => {
	var res = await request({
		url: props.url,
		method: 'get',
	});
	state.data=res.data.result;
};

const emits = defineEmits(['node-click']);
const nodeClick = (node:any) => {
  emits('node-click', { id: node.id, name: node.name,type:node.type });
};


onMounted(() => {
	
	if(props.maInit==false){
		
		initTreeData();
	}
});

const init = async () => {
	await initTreeData();
};
defineExpose({ init });

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
