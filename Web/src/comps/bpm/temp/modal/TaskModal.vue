<template>
	<el-dialog v-model='state.isShow' title='表配置' width='1000px' draggable>
		<div style='height: 600px'>
			<el-row gutter="8">
				<el-col :span='8'>
					<div style='height: 600px'>
						<TableTree @node-click='nodeClick'/>
					</div>
				</el-col>
				<el-col :span='16'>
					<el-table ref="tableRef" height='600' :cell-style="{padding:'2px'}" :row-style="{height: '36px'}"
										v-loading='state.loading' :data='state.list'
										border stripe>
						<el-table-column type='selection' width='55' align='center'/>
						<el-table-column label='序号' type='index' width='55' align='center'/>
						<el-table-column label='字段名称' width='120'>
							<template #default='scope'>
								{{ scope.row.name }}
							</template>
						</el-table-column>
						<el-table-column label='字段注释' prop='comet'/>
						<el-table-column label='字段类型' prop='type' width='140'/>
						<el-table-column label='KEY' prop='cokey' width='60'/>
					</el-table>
				</el-col>
			</el-row>
		</div>
		<template #footer>
      <span class='dialog-footer'>
        <el-button type='primary' @click='closeModal'>确认</el-button>
        <el-button @click='state.isShow = false'>取消</el-button>
      </span>
		</template>
	</el-dialog>
</template>

<script lang='ts' setup>
import {defineExpose, reactive, ref} from 'vue';
import TableTree from './tableTree.vue';
import request from "/@/utils/request";
import {vListQuery} from "/@/comps/vxe";

const state = reactive({
	isShow: false,basid:'',
	list:[] as any,
	tabna:'',
});


const openModal = async (data: any) => {
	state.isShow = true;
};

defineExpose({ openModal });

const tableRef=ref();

const emits = defineEmits(['close']);
const closeModal = () => {
	const backData={tabna:state.tabna,fields:[] as any};
	const selectedData= tableRef.value.getSelectionRows();
	for (const row of selectedData) {
		const myRow={} as any;
		myRow.name=row.name;
		myRow.comet=row.comet;
		myRow.type=row.type;
		backData.fields.push(myRow);
	}
	console.log(backData)
	emits('close', backData);
	state.isShow = false;
};

//region a 左侧部门树点击
const nodeClick = async (node: any) => {
	if(node){
		state.tabna = node.name;
		state.basid = node.basid;
		await listQuery();
	}
};
//endregion

const listQuery=async ()=>{
	state.list = await request({
		url: '/bi/model/field/list',
		params:{tabna:state.tabna,basid:state.basid},
		method: 'get',
	});
}

</script>

<style scoped>

</style>
