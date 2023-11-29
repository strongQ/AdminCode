<template>
	<div>
		<!-- <OrgModal ref='orgModal' @close='closeOrgModal' /> -->
		<FuncModal ref='funcModal' @close='closeFuncModal' />
		<UserModal ref='userModal' @close='closeUserModal'/>

		<el-dialog v-model='state.isShow' :title='state.title' width='600px' draggable>
			<div style='height: 500px'>
				<el-form ref='formRef' :model='form' label-width='140px'>
					<el-tabs v-model='activeName' type='card' @tab-click='tabChange'>
						<el-tab-pane label='基本' name='k1' class='zform zform100 el-form--inline'>
							<div class='zform-div'>
								<el-form-item :label='state.name' prop='name' :rules="[{ required: true, message: '名称不能为空'}]">
									<el-input v-model='form.name' />
								</el-form-item>
								<el-form-item label='审批人类型：' v-show='cdata.show1||cdata.show2'>
									<el-radio-group v-model='form.hatyp' @change='hatypChange'>
										<el-radio label='1'>从组织架构选择</el-radio>
										<el-radio label='2'>使用公式定义器</el-radio>
									</el-radio-group>
								</el-form-item>
								<el-form-item label='审批人：' v-show='cdata.show1||cdata.show2'>
									<el-input v-model='cdata.hamen' readonly @click='hamenModal' />
								</el-form-item>
								<el-form-item label='流转方式：' prop='name' v-show='cdata.show1'>
									<el-radio-group v-model='form.flway'>
										<el-radio label='1'>串行</el-radio>
										<el-radio label='2'>并行</el-radio>
										<el-radio label='3'>会审</el-radio>
									</el-radio-group>
								</el-form-item>
								<el-form-item label='身份重复跳过配置：' v-show='cdata.show1'>
									<el-select v-model='form.remod' style='width: 100%'>
										<el-option value='1' label='仅相邻处理人身份重复跳过' />
										<el-option value='2' label='处理人身份重复跳过' />
										<el-option value='3' label='处理人身份重复不跳过' />
									</el-select>
								</el-form-item>
								<el-form-item label='权限：' v-show='cdata.show1'>
									<el-checkbox v-model='form.edtag' label='编辑主文档' />
								</el-form-item>
								<el-form-item label='流转条件：' v-show='state.cotag'>
									<el-input v-model='form.conds' type='textarea'
														placeholder='编写JS代码，返回true，则往下流。（注1：$代表form对象；注2：如果是表达式，则表达式为返回结果；注3：如果是复杂的多条语句，则z代表返回结果；）' :rows='8' />
								</el-form-item>
								<el-form-item :label='state.notes'>
									<el-input v-model='form.notes' type='textarea' :rows='4' />
								</el-form-item>
							</div>
						</el-tab-pane>
						<el-tab-pane label='操作' name='k2' class='zform zform100 el-form--inline' v-if='cdata.show1'>
							<div class='zform-div'>
								<el-form-item label='操作方式：' prop='name' :rules="[{ required: true, message: '名称不能为空'}]">
									<el-select v-model='form.opway' style='width: 100%' @change='opwayChange'>
										<el-option value='1' label='标准审批' />
										<el-option value='2' label='自定义...' />
									</el-select>
								</el-form-item>
								<el-form-item label='创建人：'>
									<el-table size='small' border :data='form.crops' :row-style="{height: '36px'}" style='width: 100%'>
										<el-table-column label='操作类型' width='100'>
											<template #default='scope'>
												<el-select v-model='scope.row.type' style='width: 100%'>
													<el-option value='1' label='催办' />
													<el-option value='2' label='撤回' />
													<el-option value='3' label='废弃' />
												</el-select>
											</template>
										</el-table-column>
										<el-table-column label='操作名称'>
											<template #default='scope'>
												<el-input v-model='scope.row.name' />
											</template>
										</el-table-column>
										<el-table-column fixed='right' label='操作' width='50' align='center' v-if='form.opway!=="1"'>
											<template #header>
												<el-icon :size='22' style='top: 5px;cursor: pointer' color='#666'>
													<ele-CirclePlus @click='addCroper' />
												</el-icon>
											</template>
											<template #default='scope'>
												<el-icon :size='22' style='top: 3px;cursor: pointer'>
													<ele-CircleClose @click='form.crops.splice(scope.$index, 1)' />
												</el-icon>
											</template>
										</el-table-column>
									</el-table>
								</el-form-item>
								<el-form-item label='处理人：'>
									<el-table size='small' border :data='form.haops' :row-style="{height: '36px'}" style='width: 100%'>
										<el-table-column label='操作类型' width='100'>
											<template #default='scope'>
												<el-select v-model='scope.row.type' style='width: 100%'>
													<el-option value='1' label='通过' />
													<el-option value='2' label='驳回' />
													<el-option value='3' label='转办' />
													<el-option value='4' label='沟通' />
													<el-option value='5' label='废弃' />
												</el-select>
											</template>
										</el-table-column>
										<el-table-column label='操作名称'>
											<template #default='scope'>
												<el-input v-model='scope.row.name' />
											</template>
										</el-table-column>
										<el-table-column fixed='right' label='操作' width='50' align='center' v-if='form.opway!=="1"'>
											<template #header>
												<el-icon :size='22' style='top: 5px;cursor: pointer' color='#666'>
													<ele-CirclePlus @click='addHaoper' />
												</el-icon>
											</template>
											<template #default='scope'>
												<el-icon :size='22' style='top: 3px;cursor: pointer'>
													<ele-CircleClose @click='form.haops.splice(scope.$index, 1)' />
												</el-icon>
											</template>
										</el-table-column>
									</el-table>
								</el-form-item>
							</div>
						</el-tab-pane>
						<el-tab-pane label='事件' name='k3'>
							<el-table size='small' border :data='form.events' :row-style="{height: '36px'}" style='width: 100%'>
								<el-table-column label='事件类型' width='150'>
									<template #default='scope'>
										<el-select v-model='scope.row.type' style='width: 100%'>
											<el-option value='1' label='通过' />
											<el-option value='2' label='驳回' />
											<el-option value='3' label='转办' />
											<el-option value='4' label='沟通' />
											<el-option value='5' label='废弃' />
										</el-select>
									</template>
								</el-table-column>
								<el-table-column label='事件名称'>
									<template #default='scope'>
										<el-input v-model='scope.row.name' />
									</template>
								</el-table-column>
								<el-table-column label='事件监听器'>
									<template #default='scope'>
										<el-select v-model='scope.row.type' style='width: 100%'>
											<el-option value='1' label='测试01' />
											<el-option value='2' label='测试02' />
											<el-option value='3' label='测试03' />
										</el-select>
									</template>
								</el-table-column>
								<el-table-column fixed='right' label='操作' width='50' align='center'>
									<template #header>
										<el-icon :size='22' style='top: 5px;cursor: pointer' color='#666'>
											<ele-CirclePlus @click='addEvent' />
										</el-icon>
									</template>
									<template #default='scope'>
										<el-icon :size='22' style='top: 3px;cursor: pointer'>
											<ele-CircleClose @click='form.events.splice(scope.$index, 1)' />
										</el-icon>
									</template>
								</el-table-column>
							</el-table>
						</el-tab-pane>
					</el-tabs>
				</el-form>


				<!--			<el-row gutter="8">-->
				<!--				<el-col :span='8'>-->
				<!--					<div style='height: 600px'>-->
				<!--					</div>-->
				<!--				</el-col>-->
				<!--				<el-col :span='16'>-->

				<!--				</el-col>-->
				<!--			</el-row>-->
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
import { computed, defineExpose, reactive, ref, toRaw, toRefs } from 'vue';
// import OrgModal from '/@/comps/sys/OrgModal.vue';
import FuncModal from './func.vue';
import { uuid } from '/@/utils/xutil';
import request from '/@/utils/request';

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

const { form } = toRefs(state);
const activeName = ref('k1');
const open = async (shape: any) => {
	state.form.type=shape.type;
	state.form.id = shape.businessObject.id;
	console.log(state.form.type);
	state.cotag=false;
	state.name='节点名称：';
	state.notes='节点备注：';
	switch (state.form.type) {
		case "bpmn:UserTask":
			state.title="审批节点 "+state.form.id;
			if(state.form.id=="N1"){
				state.title="起草节点 "+state.form.id;
			}
			break;
		case "bpmn:ReceiveTask":
			state.title="抄送节点 "+state.form.id;
			break;
		case "bpmn:StartEvent":
			state.title="开始节点 "+state.form.id;
			break;
		case "bpmn:EndEvent":
			state.title="结束节点 "+state.form.id;
			break;
		case "bpmn:ScriptTask":
			state.title="脚本节点 "+state.form.id;
			break;
		case "bpmn:ServiceTask":
			state.title="服务节点 "+state.form.id;
			break;
		case "bpmn:ExclusiveGateway":
			state.title="互斥网关 "+state.form.id;
			break;
		case "bpmn:ParallelGateway":
			state.title="并行网关 "+state.form.id;
			break;
		case "bpmn:SequenceFlow":
			state.title="连线 "+state.form.id;
			state.name='连线名称：';
			state.notes='连线备注：';
			if(shape.source.type=="bpmn:ExclusiveGateway"){
				state.cotag=true;
			}
			break;
		default:
			state.title="未知节点 "+state.form.id;
			break;
	}


	state.form.name = shape.businessObject.name;
	state.form.flway = shape.businessObject.$attrs.flway;
	if(!state.form.flway){
		state.form.flway="1";
	}
	state.form.hatyp = shape.businessObject.$attrs.hatyp;
	if(!state.form.hatyp){
		state.form.hatyp="1";
	}
	state.form.conds = shape.businessObject.$attrs.conds;

	
	if (shape.businessObject.$attrs.hamen) {
		
		if(state.form.hatyp=="1"){
			
			var res= await request({
				url: '/api/sysUser/realName',
				method: 'get',
				params: { id: shape.businessObject.$attrs.hamen },
			});
			state.form.hamen=shape.businessObject.$attrs.hamen;
			state.form.realName=res.data.result;
		}else{
			state.form.hamen=shape.businessObject.$attrs.hamen;
		}
	} else {
		state.form.hamen = [];
	}
	// console.log(shape.businessObject.$attrs);
	state.isShow = true;
};

defineExpose({ open });

const emits = defineEmits(['close']);
const closeModal = () => {
	const backData = {} as any;
	backData.name = state.form.realName;
	
	
    backData.hamen = state.form.hamen;
	
	backData.flway = state.form.flway;
	backData.hatyp = state.form.hatyp;
	if(state.cotag){
		backData.conds=state.form.conds;
	}
	emits('close', backData);
	state.isShow = false;
};

const cdata = reactive({}) as any;
//region -----组织架构逻辑-----
const userModal = ref();
const funcModal = ref();

const hatypChange=()=>{
	form.value.hamen=null;
}
const hamenModal = () => {
	if(state.form.hatyp=="1"){
		userModal.value.open();
		// orgModal.value.openModal({
		// 	opener: 'hamen',
		// 	orgType: 44,
		// 	selectMode: 2,
		// 	orgs: toRaw(form.value.hamen),
		// });
	}else if(state.form.hatyp=="2"){
		funcModal.value.open({});
	}
};

const closeUserModal = (data: any) => {
	
	
	if(!data) return;
		
	    form.value.hamen = data.id;
		
		if (form.value.name === '审批节点'||form.value.name === '') {
			
			form.value.realName = data.realName;
		}
	
};

const closeFuncModal = (data: any) => {
	form.value.hamen = data.func;
};



cdata.hamen = computed(() => {
	
	
		return form.value.realName;
	
});

cdata.show1 = computed(() => {
	if(state.form.id=="NS"||state.form.id=="N1"||state.form.id=="NE"){
		return false;
	}else if(state.form.type!=="bpmn:UserTask"){
		return false;
	}else{
		return true;
	}
});

cdata.show2 = computed(() => {
	if(state.form.type==="bpmn:ReceiveTask"){
		return true;
	}else{
		return false;
	}
});
//endregion

//region -----操作逻辑-----
const addCroper = () => {
	let newOrnum = 1;
	if (form.value.crops.length > 0) {
		newOrnum = form.value.crops[form.value.crops.length - 1].ornum + 1;
	}
	if (form.value.id) {
		form.value.crops.push({
			id: uuid(), maiid: form.value.id, ornum: newOrnum,
		});
	} else {
		form.value.crops.push({
			id: uuid(), ornum: newOrnum,
		});
	}
};

const addHaoper = () => {
	let newOrnum = 1;
	if (form.value.haops.length > 0) {
		newOrnum = form.value.haops[form.value.haops.length - 1].ornum + 1;
	}
	if (form.value.id) {
		form.value.haops.push({
			id: uuid(), maiid: form.value.id, ornum: newOrnum,
		});
	} else {
		form.value.haops.push({
			id: uuid(), ornum: newOrnum,
		});
	}
};

const opwayChange = () => {
	if (state.form.opway == '1') {
		state.form.crops = [
			{ ornum: 1, type: '1', name: '催办' },
			{ ornum: 2, type: '2', name: '撤回' },
			{ ornum: 3, type: '3', name: '废弃' },
		];
		state.form.haops = [
			{ ornum: 1, type: '1', name: '通过' },
			{ ornum: 2, type: '2', name: '驳回' },
			{ ornum: 3, type: '3', name: '转办' },
			{ ornum: 4, type: '4', name: '沟通' },
			{ ornum: 5, type: '5', name: '废弃' },
		];
	} else {
		// state.form.crops = [];
		// state.form.haops = [];
	}
};
//endregiton

const addEvent = () => {
	let newOrnum = 1;
	if (form.value.events.length > 0) {
		newOrnum = form.value.events[form.value.events.length - 1].ornum + 1;
	}
	if (form.value.id) {
		form.value.events.push({
			id: uuid(), maiid: form.value.id, ornum: newOrnum,
		});
	} else {
		form.value.events.push({
			id: uuid(), ornum: newOrnum,
		});
	}
};


</script>

<style scoped>

</style>
