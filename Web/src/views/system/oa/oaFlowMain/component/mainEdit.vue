<template>
	<div :style='{ height: `calc(100vh)`}' class='zpage'>
		<el-card class='box-card' :body-style="{padding:'2px 8px'}" shadow='never'>
			<template #header>
				<div class='zjustify'>
					<div>
						<div style='line-height: 32px'>流程实例</div>
					</div>
					<div>
						<el-button type='success' @click='save' plain>提 交</el-button>
						<el-button type='info' @click='close' plain>关 闭</el-button>
					</div>
				</div>
			</template>
			<div style='margin-top: 8px;margin-bottom: 8px'>
				<el-form ref='formRef' :model='form' label-width='140px'>
					<el-tabs type='card' v-model='activeName'>
						<el-tab-pane label='基本信息' class='zform zform100' name='tab1'>
							<div class='zform-div'>
								<el-form-item label='主题：' prop='name' :rules="[{ required: true, message: '主题不能为空'}]">
									<el-input v-model='form.name'></el-input>
								</el-form-item>
								<el-form-item label='备注：'>
									<el-input v-model='form.remark' type='textarea' :rows='4'></el-input>
								</el-form-item>
							</div>
						</el-tab-pane>
						<el-tab-pane label='审批内容' name='tab2'>
							<v-form-render v-if='state.vformShow' :form-json='formJson' :form-data='formData' :option-data='optionData' ref='vFormRef'>
							</v-form-render>
							<div style='color: green'>注：此页面内容通过在线表单设计器渲染</div>
						</el-tab-pane>
						<el-tab-pane label='流程处理' name='tab3'>
							<BpmEdit v-if='form.protd' :temid='form.protd' ref='bpmRef' />
						</el-tab-pane>
						<!-- <el-tab-pane label='权限信息' name='tab4'>
							
						</el-tab-pane> -->
					</el-tabs>
				</el-form>
			</div>
		</el-card>
	</div>
</template>
<script lang='ts' setup>
import { onMounted, reactive, ref, toRefs } from 'vue';

import { useRoute } from 'vue-router';
import BpmEdit from '/@/comps/bpm/edit.vue';

import { NextLoading } from '/@/utils/loading';
import { ElMessage, FormInstance } from 'element-plus';
import {  getOaFlowTemp} from '/@/api/system/oaFlowTemp';
import { getOaFlowMain,addOaFlowMain,updateOaFlowMain } from '/@/api/system/oaFlowMain';
const route = useRoute();
const formRef = ref<FormInstance>();
const activeName = ref('tab1');

const bpmRef = ref() as any;

const isEdit=ref(false);
const state = reactive({
	
	params: { path: '', query: '' },
	form: { avtag: true } as any,
	formJson: {} as any,
	formData: {} as any,
	vformShow: false,
});

const { form, formJson, formData } = toRefs(state);

onMounted(() => {
	NextLoading.done();
	editInitx(state, route);
});

const editInitx = async (state: any, route: any) => {
	state.params = <any>route;
	let id = state.params.query?.id;
	if (id) {

        isEdit.value=true;
        let res=await getOaFlowMain({id:id});
        state.form=res.data.result;
		
	} else {
        
		let temid = state.params.query?.temid;
        let res=await getOaFlowTemp({id:temid});
	
        let data=res.data.result;
		form.value.protd = data.protd;
		form.value.temid = temid;
		form.value.avtag = true;
		formJson.value = JSON.parse(data.vform);
		formData.value = {};
		
		state.vformShow = true;

	}
};

// const formData = reactive({})
const optionData = reactive({});
const vFormRef = ref(null) as any;

const save = async () => {
	vFormRef.value.getFormData().then(async formData => {
		// Form Validation OK
		form.value.zform = JSON.stringify(formData);
		form.value.zbpm = bpmRef.value.getOperateInfo();
		// alert(JSON.stringify(formData));
        let result:any=null;
		if(isEdit.value){
           result= await updateOaFlowMain(form.value);
        }
        else{
           result= await addOaFlowMain(form.value);
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
       


	}).catch(error => {
		ElMessage.error(error);
	});
};

const close=()=>{
	setTimeout(() => {
            window.close();
        }, 1000);
        }


</script>

<style scoped>
.zpage {
	overflow: auto;
}


</style>
