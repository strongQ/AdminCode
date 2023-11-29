<template>
	<el-card class='box-card' :body-style="{padding:'2px 8px'}" shadow='never'>
		<template #header>
			<div class='zjustify'>
				<div>
					<div style='line-height: 32px'>流程模板</div>
				</div>
				<div>
					<el-button type='success' @click='save(form)' plain>保 存</el-button>
					<el-button type='info' plain>复 制</el-button>
					<el-button type='info' @click='pageClose' plain>关 闭</el-button>
				</div>
			</div>
		</template>
		<CateModal url='api/oaFlowCate/tree' ref='cateModal' @close='cateChoose' />
		<div style='margin-top: 8px;margin-bottom: 8px'>
			<el-form ref='formRef' :model='form' label-width='140px'>
				<el-tabs type='card' v-model='activeName'>

					<el-tab-pane label='基本信息' name='tab1' class='zform el-form--inline'>
						<div class="zform-div">
							<el-form-item label='模板名称：' prop='name' :rules="[{ required: true, message: '名称不能为空'}]">
								<el-input v-model='form.name'></el-input>
							</el-form-item>
							<el-form-item label='所属分类：' prop='cate' :rules="[{ required: true, message: '分类不能为空'}]">
								<el-input :value='form.catna' :suffix-icon='Search' :readonly='true' @click='openCateModal'></el-input>
							</el-form-item>
							<el-form-item label='排序号：'>
								<el-input-number v-model='form.ornum' controls-position='right' style='width: 100%'/>
							</el-form-item>
							<el-form-item label='是否可用：'>
								<el-switch v-model='form.isEnable'>
								</el-switch>
							</el-form-item>
						</div>
					</el-tab-pane>

					<el-tab-pane label='表单配置' name='tab2'>
						<el-row style='border-top: 1px solid #d2d2d2;'>
							<el-col :span='24'>
								<v-form-designer  ref='vFormRef'/>
							</el-col>
						</el-row>
					</el-tab-pane>

					<el-tab-pane label='流程配置' name='tab3'>
						<div style='width: 100%;height: 720px'>
							<BpmTempEdit ref="bpmTempEditRef" v-if='state.bpmShowTag'  :prxml='form.prxml'/>
						</div>
					</el-tab-pane>

					<el-tab-pane label='其他信息' name='tab9' class='zform el-form--inline'>
						<div class="zform-div">
							<el-form-item label='备注：' style="width: 100%">
								<el-input style="font-family: 'Courier New', Helvetica, Arial, sans-serif; font-size:16px"
													type='textarea' :rows='4' v-model='form.remark'>
								</el-input>
							</el-form-item>
						
							<el-form-item label='创建时间：' style="width: 25%">
								<div class='zinput'> {{ form.createTime }}</div>
							</el-form-item>
							
							<el-form-item label='更新时间：' style="width: 25%">
								<div class='zinput'> {{ form.updateTime }}</div>
							</el-form-item>
						</div>
					</el-tab-pane>

				</el-tabs>
			</el-form>
		</div>
	</el-card>
</template>
<script lang='ts'>
export default { name: 'OaFlowTempEditNew' };
</script>
<script lang='ts' setup>
import { onMounted, reactive, ref, toRefs } from 'vue';
// import { pageSave, pageClose } from '/@/comps/page/edit';
import { useRoute } from 'vue-router';
import { NextLoading } from '/@/utils/loading';
import CateModal from '/@/comps/gen/GenTreeModal.vue';
import BpmTempEdit from '/@/comps/bpm/temp/edit.vue';
import { FormInstance,ElMessage } from 'element-plus';

import { addOaFlowTemp, getOaFlowTemp,updateOaFlowTemp } from '/@/api/system/oaFlowTemp';
import { stat } from 'fs';
const route = useRoute();
const formRef = ref<FormInstance>();
const activeName = ref('tab1');

const vFormRef = ref(null) as any;

const state = reactive({
	bpmShowTag:false,
	params: { path: '', query: {} as any},
	form: { avtag: 0,protd:0,prxml:'',isEnable:false } as any,
	vformShow: true,
	isEnable:false
});

const { form } = toRefs(state);

const isEdit=ref(false);




onMounted(async () => {
	NextLoading.done();
	state.params = <any>route;
	let id = state.params.query?.id;
	if (id) {
		isEdit.value=true;
		var res=await getOaFlowTemp({id:id});
	
		state.form = res.data.result;
		state.form.isEnable=res.data.result.avtag==1?true:false;
		vFormRef.value.setFormJson(JSON.parse(state.form.vform));
	} else {
		let catid = state.params.query?.catid;
		if (catid) {
			state.form.catid=catid;
			state.form.catna=state.params.query?.catna;
			
		}
		
		vFormRef.value.setFormJson({
			"widgetList": [],
			"formConfig": {
				"modelName": "formData",
				"refName": "vForm",
				"rulesName": "rules",
				"labelWidth": 80,
				"labelPosition": "left",
				"size": "",
				"labelAlign": "label-left-align",
				"cssCode": "",
				"customClass": "",
				"functions": "",
				"layoutType": "PC",
				"jsonVersion": 3,
				"onFormCreated": "",
				"onFormMounted": "",
				"onFormDataChange": "",
				"onFormValidate": ""
			}
		});
	}
	state.bpmShowTag=true;
});

const bpmTempEditRef=ref();

async function save(state: any) {
	// xFlow.value.getData();
	NextLoading.loading=true;
	form.value.prxml =await bpmTempEditRef.value.getXml();
	form.value.vform = JSON.stringify(vFormRef.value.getFormJson());

	
	form.value.avtag=form.value.isEnable?1:0;

	let result:any=null;
	if(isEdit.value){
		result=await updateOaFlowTemp(form.value);
	}
	else{
		result=await addOaFlowTemp(form.value);
	}
	

	if(result.data.code==200){

		ElMessage({
            showClose: true,
            message: '保存成功，1秒后页面按自动关闭',
            type: 'success',
            duration:1000
        })
        setTimeout(() => {
            window.close();
        }, 1000);
	}
	


	NextLoading.loading=false;
	//await pageSave({formRef:formRef.value, state});
}

const pageClose=()=>{
window.close();
}


//region -----分类弹框逻辑-----
const cateModal = ref();
const openCateModal = () => {
	cateModal.value.openModal();
};
const cateChoose = (node: any) => {
	if (node == null) {
		state.form.catid=null;
			state.form.catna="";
	} else {
		state.form.catid=node.id;
			state.form.catna=node.name;
	}
};
//endregion

</script>

<style scoped>

</style>
