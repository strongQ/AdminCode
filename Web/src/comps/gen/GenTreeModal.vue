<template>
	<el-dialog v-model='dialogVisible' title='弹框选择' draggable width='500px'>
		<el-card class='box-card' style='height: 500px;' body-style='height: 100%;overflow: auto'>
			<template #header>
				<div class='card-header'>
					<div class='tree-h-flex'>
						<div class='tree-h-left'>
							<el-input :prefix-icon='Search' v-model='filterText' placeholder=' ' />
						</div>
						<div class='tree-h-right'>
							<el-dropdown @command='handleCommand'>
                <el-button style='margin-left: 8px;width: 34px'>
									<el-icon class='el-icon--center'>
										<more-filled />
									</el-icon>
								</el-button>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item command='expandAll'>全部展开</el-dropdown-item>
										<el-dropdown-item command='collapseAll'>全部折叠</el-dropdown-item>
										<el-dropdown-item command='refresh'>刷新</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</el-dropdown>
						</div>
					</div>
				</div>
			</template>
			<div style='margin-bottom: 45px'>
				<el-tree highlight-current @node-click='nodeClick' ref='treeRef' class='filter-tree' :data='state.data' :props='defaultProps' :filter-node-method='filterNode' />
			</div>
		</el-card>

		<template #footer>
      <span class='dialog-footer'>
				<el-button type='primary' @click='handleConfirm'>确 认</el-button>
        <el-button @click='dialogVisible = false'>取 消</el-button>
        <el-button @click='clearAndcloseModal'>清空选择</el-button>
      </span>
		</template>
	</el-dialog>

</template>

<script lang='ts' setup>
import { defineExpose, onMounted, reactive, ref, watch } from 'vue';
import type { ElTree } from 'element-plus';
import { Search, MoreFilled } from '@element-plus/icons-vue';
import request from '/@/utils/request';
import { ElMessage } from 'element-plus';

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
  params:{},
}) as any;


const handleCommand = (command: string | number | object) => {
	if ('expandAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = true;
		}
	} else if ('collapseAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = false;
		}
	}
	ElMessage(`click on item ${command}`);
};

// // 初始化表格数据
const initTreeData = async () => {
    
	var res = await request({
		url: props.url,
		method: 'get',
    params:state.params
	});

   
    state.data=res.data.result;
};

const dialogVisible = ref(false);
const openModal = async (data:any) => {
  if(data&&data.params){
    state.params=data.params;
  }else{
    state.params={}
  }
  if(data&&data.reload){
    await initTreeData();
  }
	dialogVisible.value = true;
};

defineExpose({ openModal });

onMounted(async () => {
  if(props.maInit==false){
    await initTreeData();
  }
});

const emits = defineEmits(['close']);
const handleConfirm = () => {
	emits('close', { id: state.id, name: state.name, pid: state.pid,type:state.type });
	dialogVisible.value = false;
};

const clearAndcloseModal = () => {
  emits('close', null);
  dialogVisible.value = false;
};

const nodeClick = (node: any) => {
	state.id = node.id;
	state.name = node.name;
	state.pid = node.pid;
	state.type = node.type;
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
