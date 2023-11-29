<template>
	<div>
		
		<el-dialog v-model='state.isShow' :title='state.title' width='600px' draggable>
			<div style='height: 500px'>
				<el-form ref='formRef' :model='form' label-width='140px'>
					<div class='zform-div'>
						<el-form-item label='处理意见'>
							<el-input v-model='form.opnot' type='textarea' :rows='4' placeholder='待实现' />
						</el-form-item>
						<el-form-item label='操作'>
							<el-radio-group v-model='form.opkey'>
								<el-radio label='finalpass'>终审通过</el-radio>
								<el-radio label='jump'>前后跳转</el-radio>
								<el-radio label='abandon'>直接废弃</el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
				</el-form>
			</div>
			<template #footer>
      <span class='dialog-footer'>
        <el-button type='primary' @click='closeModal'>确认</el-button>
        <el-button @click='state.isShow = false'>取消</el-button>
      </span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang='ts' setup>
import { defineExpose, reactive, toRefs } from 'vue';
import UserModal from '/@/views/system/user/userModal.vue'


const state = reactive({
	isShow: false, basid: '',title:'',cotag:false,name:'节点名称：',notes:'节点备注：',
	list: [] as any, form: {
		flway: '1', remod: '1', opway: '1',type:'bpmn:UserTask',
		crops: [
			{ ornum: 1, type: '1', name: '催办' },
			{ ornum: 2, type: '2', name: '撤回' },
			{ ornum: 3, type: '3', name: '废弃' },
		],
		haops: [
			{ ornum: 1, type: '1', name: '通过' },
			{ ornum: 2, type: '2', name: '驳回' },
			{ ornum: 3, type: '3', name: '转办' },
			{ ornum: 4, type: '4', name: '沟通' },
			{ ornum: 5, type: '5', name: '废弃' },
		],
		events: [],
	} as any,
	tabna: '',
});

const open = async () => {
	// console.log(shape.businessObject.$attrs);
	state.isShow = true;
};

defineExpose({ open });

const { form } = toRefs(state);

const closeModal=()=>{
	state.isShow=false;
}

</script>

<style scoped>

</style>
