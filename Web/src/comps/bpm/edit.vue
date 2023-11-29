<template>
	<el-form class='zform zform100' :inline="true" :model='form' label-width='150px' label-position='left'>
		<el-row :gutter="35">
              <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
			
			<el-form-item label='紧急程度：'>
				<el-radio-group v-model='form.opurg'>
					<el-radio label='1'><span style='color:red'>紧急</span></el-radio>
					<el-radio label='2'><span style='color:blue'>急</span></el-radio>
					<el-radio label='3'><span>一般</span></el-radio>
				</el-radio-group>
			</el-form-item>
			</el-col>
			<el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
			<el-form-item label='即将流向：'>
				{{ state.toExmen }}
			</el-form-item>
			</el-col>	
			<el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
			<el-form-item label='处理意见：'>
				<el-input  v-model='form.opnot' type='textarea' :rows='3' placeholder=' '/>
			</el-form-item>
			</el-col>

		</el-row>
			<el-form-item label='附件'>
				<el-upload
					:action='state.uploadUrl' :headers='state.headers'
					:on-preview='handlePreview' style='width:800px' :on-success='handleSuccess'
					:on-remove='handleRemove'
					multiple :limit='10' :on-exceed='handleExceed' v-model:file-list='form.atts'>
					<el-button type='primary'>上传附件</el-button>
				</el-upload>
			</el-form-item>
			<div class="zform-item" style="padding-left: 6px">
				<el-checkbox v-model='state.chtag' @change='toggleFlowChart'>流程图</el-checkbox>
			</div>
			<div class="zform-item" v-show='state.chtag'>
				<div style='background-color: white;height:1000px'>
					<Modeler2 />
				</div>
			</div>
		
	</el-form>
</template>

<script lang='ts' setup>
import {defineExpose, onMounted, reactive, toRaw, toRefs} from 'vue';
import {useRoute} from 'vue-router';
import request from "/@/utils/request";
import Modeler2 from '/@/comps/Activiti/modeler2/index';
import {BpmnStore} from "/@/bpmn/store";
import { Session } from '/@/utils/storage';
import { ElMessage, ElMessageBox, UploadProps } from 'element-plus';

const route = useRoute();

const state = reactive({
	form: {opurg:'3'} as any,
	chtag: true,
	params: {
		path: '',
		query: '',
	},
	toExmen: '',
	tarno:'',
	xml: null as any,
	uploadUrl: '', headers: {} as any,
});

const {
	form, params,
} = toRefs(state);


onMounted(async () => {
	state.uploadUrl = `${import.meta.env.VITE_API_URL}/api/sysFile/uploadFile`;
	state.headers = { 'Authorization':`Bearer ${Session.get('token')}`  };
	state.params = <any>route;
	
	toggleFlowChart();
});


const getOperateInfo = () => {
	
	const formInfo=toRaw(form.value);
	let atids="";
	if(formInfo.atts){
		for (const att of formInfo.atts) {
			atids+=att.id+",";
		}
		if(atids){
			atids=atids.substring(0,atids.length-1);
		}
	}
	formInfo.atids=atids;
	return formInfo;
};


defineExpose({getOperateInfo});


const props = defineProps({
	temid: String,
});


const toggleFlowChart = async () => {
	if (!state.xml) {
		let res= await request({
			url: '/api/bpmProcMain/teXml',
			method: 'get',
			params:{temid:props.temid}
		}) as any;

		let map=res.data.result;
		form.value.tarno = map.tarno;
		form.value.tarna = map.tarna;
		form.value.tamen = map.tamen;
		state.toExmen = map.tarno + '.' + map.tarna + '(' + map.tamen + ')';

		state.xml=map.xml;
		await BpmnStore.importXML(state.xml);
		const elementRegistry = BpmnStore.getModeler().get('elementRegistry');
		const list1 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id == 'NS') {
				list1.push(item);
			}
		});

		const list2 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id == 'L1') {
				list2.push(item);
			}
		});

		const list3 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id == 'N1') {
				list3.push(item);
			}
		});

		const list4 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id == map.tarno) {
				list4.push(item);
			}
		});


		let modeling = BpmnStore.modeler.get('modeling');
		modeling.setColor(list1, {fill: '#e4feef'});
		modeling.setColor(list2, {stroke: '#009900'});
		modeling.setColor(list3, {fill: '#fed6d6'});
		modeling.setColor(list4, {fill: '#e3f1ff'});
	}
};

//region -----附件逻辑-----
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
	console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
	
	ElMessageBox.confirm('请选择对应的附件操作', '附件操作',
		{
			confirmButtonText: '预览',
			cancelButtonText: '取消',
			type: 'info',
		},
	).then(async () => {
		window.open(uploadFile.path);
	}).catch(() => {

	});
};

const handleSuccess = (d: any, b: any, c: any) => {
	let a=d.result;
	
	if(d.code!=200){
		ElMessage.warning(
		d.message
	);
	return;
	}
	
	// c[c.length - 1] = { ...a };
	c[c.length - 1].id = a.id;
	// c[c.length - 1].name = a.name+" ["+a.size+"]";
	c[c.length - 1].name = a.name;
	
	c[c.length - 1].path = a.url;
	
	if (form.value.id) {
		c[c.length - 1].audid = form.value.id;
	}
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
	ElMessage.warning(
		`The limit is 3, you selected ${files.length} files this time, add up to ${
			files.length + uploadFiles.length
		} totally`,
	);
};
//endregion

// const fileList = ref<UploadUserFile[]>([
// 	{
// 		name: 'food.jpeg',
// 		url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// 	},
// 	{
// 		name: 'food2.jpeg',
// 		url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// 	},
// ])

</script>

<style scoped>

</style>
