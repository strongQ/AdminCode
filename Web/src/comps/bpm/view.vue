<template>
	<el-form class='zform zform100' :inline='true' :model='form' label-width='160px' label-position='left'>
		<div class='zform-div'>
			<el-form-item label='流程说明'>
				<div class='zjustify' style='width: 100%'>
				
					<div>
						<el-button type='success' @click='pmanage()' plain>特权人处理</el-button>
					</div>
				</div>
			</el-form-item>
			<div class='zform-item' style='padding-left: 6px'>
				<el-checkbox v-model='state.autag'>显示审批记录</el-checkbox>
			</div>
			<div class='zform-item' v-show='state.autag'>
				<el-table :data='audits' style='width: 100%'>
					<el-table-column prop='crtim' label='时间' width='160' />
					<el-table-column prop='facno' label='节点编号' width='80' />
					<el-table-column prop='facna' label='节点名称' width='200' />
					<el-table-column prop='hamanName' label='操作者' width='90' />
					<el-table-column prop='opinf' label='操作' width='300' />
					<el-table-column prop='opnot' label='处理意见' >
						<template #default='scope'>
							{{scope.row.opnot}}
<!--							<table style="margin-bottom: 0;">-->
<!--								<thead style="display: none">-->
<!--								<tr><th style="width: 200px">文件名</th><th style="width: 60px">大小</th><th style="width: 50px">操作</th></tr>-->
<!--								</thead>-->
<!--								<tbody>-->
<!--								<tr v-for='item in scope.row.atts' :key='item.id'>-->
<!--									<td>{{ item.name }}</td>-->
<!--									<td>{{ item.zsize }}</td>-->
<!--									<td></td>-->
<!--								</tr>-->
<!--								</tbody>-->
<!--							</table>-->
							<div v-for='item in scope.row.atts' :key='item.id' style='color: #57a7da;'>

								<img :src="vdownload" style='top: 3px;cursor: pointer;position: relative' @click='downloadAtt(item.url)'/>
								<span style='cursor: pointer;margin-left: 5px'>{{ item.fileName+item.suffix }}</span>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div v-if='state.cutag'>
                <el-row :gutter="35">
                    <el-col :span="12">
                        <el-form-item label='通知紧急程度'>
					<el-radio-group v-model='form.opurg'>
						<el-radio label='a'><span>一般</span></el-radio>
						<el-radio label='b'><span style='color:blue'>急</span></el-radio>
						<el-radio label='c'><span style='color:red'>紧急</span></el-radio>
					</el-radio-group>
				        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label='操作'>
					<el-radio-group v-model='form.opkey' @change='opChange'>
						<!--						<el-radio label='pass'>通过</el-radio>-->
						<!--						<el-radio label='refuse'>驳回</el-radio>-->
						<!--						<el-radio label='turn'>转办</el-radio>-->
						<!--						<el-radio label='communicate'>沟通</el-radio>-->
						<!--						<el-radio label='abandon'>废弃</el-radio>-->
						<el-radio v-for='item in state.opways' :key='item.id' :label='item.id'>{{ item.name }}</el-radio>
					</el-radio-group>
				       </el-form-item>
                    </el-col>
                </el-row>
				
				<el-row :gutter="35">
                    <el-col :span="12">
                        <el-form-item label='驳回到' v-if="form.opkey=='refuse'">
					<el-select v-model='form.refno' placeholder='请选择' style='width:300px;margin-right: 8px' @change='refChange'>
						<el-option v-for='item in state.refNodes' :key='item.facno' :value='item.facno' :label="item.facno+item.facna"></el-option>
					</el-select>
					<el-checkbox v-model='form.retag'>驳回的节点通过后直接返回本节点</el-checkbox>
				</el-form-item>
				<el-form-item label='转办人员' v-if="form.opkey=='turn'">
					<el-input v-model='cdata.tuman' readonly @click='tumanModal' style='width:300px;margin-right: 8px' />
					<el-checkbox v-model='form.tutag'>流程重新流经本节点时，直接由转办人员处理</el-checkbox>
				</el-form-item>
				<el-form-item label='沟通人员' v-if="form.opkey=='communicate'">
					<el-input v-model='cdata.comen' readonly @click='comenModal' style='width:300px;margin-right: 8px' />
					<el-checkbox v-model='form.cotag'>是否隐藏意见</el-checkbox>
				</el-form-item>
				<el-form-item label='取消沟通人员' v-if="form.opkey=='cacommunicate'">
					<el-checkbox-group v-model="cdata.ccarr">
						<el-checkbox v-for='item in state.ccmen' :key='item.tasid' :label="item.tasid" name="type" >{{item.name}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label='即将流向' v-if="form.opkey=='pass'">
					{{ state.toExmen }}
				</el-form-item>
                    </el-col>
                    <el-col :span="12">

                        <el-form-item label='处理意见'>
					<div style='width: 100%;'>
						<div class='au-flex'>
							<div class="au-msg"  style='padding:3px;'>
								<el-input v-model='form.opnot' type='textarea' :rows='4' placeholder=' ' />
							</div>
							<div class="au-button">
								<el-button type='primary' @click='bpmSubmit()' style='width: 80px;height: 94px;margin-top: 3px;margin-left: 6px'>提 交</el-button>
							</div>
						</div>
					</div>
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
			</div>
			<el-form-item label='当前处理人' v-show='form.facno'>
				{{ form.facno + '.' + form.facna + '(' + state.cuExmen + ')' }}
			</el-form-item>
			<el-form-item label='已经处理人' v-show='form.facno'>
				{{ state.hiHamen }}
			</el-form-item>
			<div class='zform-item' style='padding-left: 6px'>
				<el-checkbox v-model='state.chtag' @change='toggleFlowChart'>流程图</el-checkbox>
			</div>
			<div class='zform-item' v-show='state.chtag'>
				<div style='height:1000px;'>
					<Modeler2 />
				</div>
			</div>
			
            <UserModal ref='userModal' @close='closeUserModal'/>
			<Pmodal ref='pmodal' @close='closePmodal' />
		</div>
	</el-form>
</template>

<script lang='ts' setup>
import { computed, onMounted, reactive, ref, toRaw, toRefs } from 'vue';
import request from '/@/utils/request';
// import { useRoute } from 'vue-router';
// import { store } from '/@/store';
// const route = useRoute();
import Modeler2 from '/@/comps/Activiti/modeler2/index';

import { BpmnStore } from '/@/bpmn/store';
import { ElMessage, ElMessageBox, UploadProps } from 'element-plus';
// import Viewer from 'bpmn-js/lib/NavigatedViewer';
// import Viewer from 'bpmn-js/lib/Modeler';
// import Viewer from 'bpmn-js/lib/Viewer';

import UserModal from '/@/views/system/user/userModal.vue'
import Pmodal from './pmodal.vue';
import vdownload from '/@/assets/img/v-download.png';
import { Session } from '/@/utils/storage';


const state = reactive({
	form: {
		items: [],
		retag: true,
		tutag: false,
		cotag: false
	} as any,
	params: {
		path: '',
		query: '',
	},
	opways: [] as any,
	audits: [] as any,
	chtag: true,
	autag: true,
	xml: null as any,
	refNodes: [] as any,
	cutag: false,
	hiHamen: '',
	cuExmen: '',
	toExmen: '',
	// ccmen:[{id:'11',name:'张三'},{id:'22',name:'李四'}],
	ccmen:[],
	nodeList: [],
	lineList: [],
	toNode:'',
	uploadUrl: '', headers: {} as any,
});

const {
	form, audits,
} = toRefs(state);

state.refNodes = [
	{ id: 'N2', name: '起草节点', exman: 'sa' },
	{ id: 'N4', name: '张三', exman: 'z3' },
	{ id: 'N5', name: '王五', exman: 'w5' },
];


const props = defineProps({
	proid: String,
	modty: String,
});


onMounted(async () => {
	state.uploadUrl = `${import.meta.env.VITE_API_URL}/api/sysFile/uploadFile`;
	state.headers = { 'Authorization':`Bearer ${Session.get('token')}`  };
	await bpmInit();
	await toggleFlowChart();
	// state.params = <any>route;
	// if (params.value.query?.id) {
	//也可以拿到alert(params.value.query?.id);
	// }
});


const bpmInit = async () => {
	// form.value.proid = props.proid;
	const res: any = await request({
		url: '/api/bpmProcMain/zbpm',
		method: 'get',
		params: { proid: props.proid },
	});
    let result=res.data.result;
	audits.value = result.audits;
	state.hiHamen = result.hiHamen;
	state.cuExmen = result.cuExmen;

	
	state.cutag = result.cutag;
	form.value = result.zbpm;
	if (state.cutag) {
		const rest: any = await request({
			url: '/api/bpmProcMain/target',
			method: 'get',
			params: { proid: form.value.proid, facno: form.value.facno,modty:props.modty },
		});
       
        let target=rest.data.result;
		form.value.tarno = target.tarno;
		form.value.tarna = target.tarna;
		form.value.tamen = target.tamen;
		form.value.bacid = target.bacid;
		if (target.tarno == 'NE') {
			state.toExmen = target.tarno + '.' + target.tarna;
		} else {
			state.toExmen = target.tarno + '.' + target.tarna + '(' + target.tamen + ')';
		}
		state.toNode=target.tarno;


		form.value.opkey = 'pass';
		form.value.opurg = 'a';

		if (result.zbpm.tasty === 'review') {
			if(form.value.facno=="N1"){
				state.opways = [
					{ id: 'pass', name: '通过' },
					{ id: 'turn', name: '转办' },
					{ id: 'communicate', name: '沟通' },
					{ id: 'abandon', name: '废弃' },
				];
			}else{
				state.opways = [
					{ id: 'pass', name: '通过' },
					{ id: 'refuse', name: '驳回' },
					{ id: 'turn', name: '转办' },
					{ id: 'communicate', name: '沟通' },
					{ id: 'abandon', name: '废弃' },
				];
			}
		}else if(result.zbpm.tasty === 'to_communicate'){
			state.opways = [
				{ id: 'communicate', name: '沟通' },
				{ id: 'cacommunicate', name: '取消沟通' },
			];
		}else if(result.zbpm.tasty === 'communicate'){
			state.opways = [
				{ id: 'bacommunicate', name: '回复沟通' },
			];
			form.value.opkey = 'bacommunicate';
		}
	}


	// audits.value = await request({
	// 	url: '/bpm/audit/main/list/' + props.proid,
	// 	method: 'get',
	//
	// });

	// form.value = await request({
	// 	url: '/bpm/proc/main/zbpm/' + props.proid,
	// 	method: 'get',
	// });

};

const emit = defineEmits(['submit']);

const bpmSubmit = async () => {
	
	let atids="";
	if(form.value.atts){
		for (const att of form.value.atts) {
			atids+=att.id+",";
		}
		if(atids){
			atids=atids.substring(0,atids.length-1);
		}
	}
	form.value.atids=atids;
	if (form.value.opkey == 'pass') {
		emit('submit', form.value);
		// await request({
		//   url: '/bpm/proc/main/hpass',
		//   method: 'post',
		//   data: form.value,
		// });
	} else if (form.value.opkey == 'refuse') {
		const refInfo = toRaw(form.value);
		if (refInfo.refno) {
			refInfo.tarno = refInfo.refno;
			refInfo.tarna = refInfo.refna;
			refInfo.exman = refInfo.reman;
			emit('submit', form.value);
		} else {
			ElMessage.warning('请选择驳回节点后再驳回');
		}
		// await request({
		//   url: '/bpm/proc/main/hrefuse',
		//   method: 'post',
		//   data: refInfo,
		// });
	} else if (form.value.opkey == 'turn') {
		const turnInfo = toRaw(form.value);
		if (turnInfo.tuman) {
			emit('submit', form.value);
		} else {
			ElMessage.warning('请选择转办人员后再转办');
		}
	} else if (form.value.opkey == 'communicate') {
		const commInfo = toRaw(form.value);
		if (commInfo.coids) {
			emit('submit', form.value);
		} else {
			ElMessage.warning('请选择沟通人员后再沟通');
		}
	} else if (form.value.opkey == 'abandon') {
		if(form.value.opnot){
			emit('submit', form.value);
		}else{
			ElMessage.warning('请填写废弃的处理意见');
		}
	}else if (form.value.opkey == 'bacommunicate') {
		if(form.value.opnot){
			emit('submit', form.value);
		}else{
			ElMessage.warning('请填写回复沟通的处理意见');
		}
	}else if (form.value.opkey == 'cacommunicate') {
		const info = toRaw(form.value);
		if (cdata.ccarr&&cdata.ccarr.length>0) {
			console.log(cdata.ccarr);
			info.ccids=cdata.ccarr.toString();
			emit('submit', form.value);
		} else {
			ElMessage.warning('请选择要取消的人员');
		}
	}
};

const toggleFlowChart = async () => {
	if (!state.xml) {
		const resmap = await request({
			url: '/api/bpmProcMain/xml',
			method: 'get',
			params: { proid: props.proid },
		}) as any;
        let map=resmap.data.result;
		state.xml = map.xml;
		state.nodeList = map.nodeList;
		state.lineList = map.lineList;
		await BpmnStore.importXML(state.xml);

		// const bpmnViewer = new Viewer({
		// 	container: '#modeler-container',
		// }) as any;
		// try {
		// 	const { warnings } = await bpmnViewer.importXML(state.xml);
		// 	// bpmnViewer.get("canvas").zoom("fit-viewport", "auto");
		// 	console.log('rendered');
		// } catch (err) {
		// 	console.log('error rendering', err);
		// }

		const elementRegistry = BpmnStore.getModeler().get('elementRegistry');
		// const userTaskList = elementRegistry.filter(
		// 	(item) => item.type === 'bpmn:Task'
		// );
		// console.log(elementRegistry);
		const list1 = [] as any;
		elementRegistry.forEach((item: any) => {
			for (let i = 0; i < state.nodeList.length; i++) {
				if (item.id == state.nodeList[i]) {
					list1.push(item);
					break;
				}
			}
		});

		const list2 = [] as any;
		elementRegistry.forEach((item: any) => {
			for (let i = 0; i < state.lineList.length; i++) {
				if (item.id == state.lineList[i]) {
					list2.push(item);
					break;
				}
			}
		});

		const list3 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id == form.value.facno) {
				list3.push(item);
			}
		});

		console.log(state.toNode);
		const list4 = [] as any;
		elementRegistry.forEach((item: any) => {
			if (item.id ==	state.toNode) {
				list4.push(item);
			}
		});
		console.log(list4);


		let modeling = BpmnStore.modeler.get('modeling');
		modeling.setColor(list1, { fill: '#e4feef' });
		modeling.setColor(list2, { stroke: '#009900' });
		modeling.setColor(list3, { fill: '#fed6d6' });
		modeling.setColor(list4, { fill: '#e3f1ff' });
	}
};


const refChange = (id: any) => {
	for (let i = 0; i < state.refNodes.length; i++) {
		if (state.refNodes[i].id == id) {
			form.value.refna = state.refNodes[i].facna;
			form.value.reman = state.refNodes[i].haman;
			break;
		}
	}
};


const opChange = async (key: any) => {
	if (key == 'refuse') {
		let res= await request({
			url: '/api/bpmProcMain/refnodes',
			method: 'get',
			params: { proid: props.proid, facno: form.value.facno },
		});
		
        state.refNodes =res.data.result;
		state.form.refno = state.refNodes[0].facno;
		refChange(state.refNodes[0].id);

		// 驳回时要不要上色
		// const elementRegistry = BpmnStore.getModeler().get('elementRegistry');
		// const list4 = [] as any;
		// elementRegistry.forEach((item: any) => {
		// 	if (item.id ==	state.form.refno) {
		// 		list4.push(item);
		// 	}
		// });
		// let modeling = BpmnStore.modeler.get('modeling');
		// modeling.setColor(list4, {fill: '#e3f1ff'});

		// state.refNodes = [
		//   { id: 'N2', name: '起草节点', exman: 'sa' },
		//   { id: 'N4', name: '张三', exman: 'z3' },
		//   { id: 'N5', name: '王五', exman: 'w5' },
		//   { id: 'N6', name: 'xxx', exman: 'w5' },
		// ];
	}
	else if(key == 'cacommunicate'){
		let res = await request({
			url: '/api/bpmProcMain/communicateMen',
			method: 'get',
			params: { proid: props.proid, facno: form.value.facno },
		});
        state.ccmen=res.data.result;
	}
};


//region -----组织架构逻辑-----
const userModal = ref();
const cdata = reactive({}) as any;

const tumanModal = () => {
	userModal.value.open();
};

const comenModal = () => {
	// orgModal.value.openModal({
	// 	opener: 'comen',
	// 	orgType: 8,
	// 	selectMode: 2,
	// 	orgs: toRaw(form.value.comen),
	// });
    userModal.value.open();
};

const closeUserModal = (data: any) => {
	if (form.value.opkey=='turn') {
		if (data) {
			form.value.tuman = {};
			form.value.tuman = { id: data.id, name: data.realName };
			form.value.tumid = data.id;
		} else {
			form.value.tuman = null;
			form.value.tumid = null;
		}
	} else if (form.value.opkey=='communicate') {
		if (data) {
			form.value.comen = data
			form.value.coids = data.id;
			
		} else {
			form.value.comen = null;
			form.value.coids = null;
		}
	}
};

cdata.tuman = computed(() => {
	return form.value.tuman ? form.value.tuman.name : '';
});

cdata.comen = computed(() => {
	let names = '';
	if (form.value.comen ) {
		names=form.value.comen.realName;
	}
	return names;
});
//endregion

//region -----附件逻辑-----
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
	console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
	console.log(uploadFile);
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
	// c[c.length - 1] = { ...a };
    let a=d.result;
	
	if(d.code!=200){
		ElMessage.warning(
		d.message
	);
	return;
	}
	
	c[c.length - 1].id = a.id;
	// c[c.length - 1].name = a.name+" ["+a.size+"]";
	c[c.length - 1].name = a.name;
	c[c.length - 1].filid = a.filid;
	c[c.length - 1].filna = a.filna;
	c[c.length - 1].path = a.path;
	c[c.length - 1].ornum = c.length;
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

const downloadAtt=async (path:string)=>{
	window.open(path);
}
//endregion



const pmodal = ref();
const pmanage= ()=>{
	pmodal.value.open();
}

const closePmodal = (data: any) => {
	alert(data);
};

</script>

<style scoped>
.au-flex {
	display: flex;
	background-color: white;
}

.au-msg {
	flex: 1;
	width: 200px;
}

.au-button {
	width: 85px;
	
}
</style>
