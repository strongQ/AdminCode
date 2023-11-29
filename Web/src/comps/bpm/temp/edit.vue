<template>
  <div>
    <div style="margin-bottom: 10px">
<!--      <svg class="icon" aria-hidden="true" style="height: 25px;width: 40px">-->
<!--        <use xlink:href="#icon-shangchuan"></use>-->
<!--      </svg>-->
<!--      <el-button type='primary' @click='impXml' plain :icon='Upload'>导入</el-button>-->
<!--      <el-button type='primary' @click='expXML' plain :icon='Download'>导出XML</el-button>-->
      <el-button type='primary' @click='expSVG' plain :icon='Download'>导出SVG</el-button>
      <el-button type='primary' @click='codeShow' plain :icon='View'>代码预览</el-button>
      <span style="color: red;margin-left: 10px">注：双击节点或连线编辑信息</span>
    </div>
    <div class='containers'>
      <div class='canvas' ref='canvasRef' style='height: 1000px;'></div>
      <NodeModal ref='nodeModalRef' @close='closeNodeModal' />
    </div>
    <CodeModal ref='codeModalRef'/>
  </div>
</template>

<script lang='ts' setup>
// import BpmnModeler from 'bpmn-js/lib/Modeler'
import { Download,Upload,View} from '@element-plus/icons-vue';
import { defineExpose, onMounted, reactive, ref, toRefs } from 'vue';
import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
// import customModule from './custom';
import CustomModeler from './customModeler';
import NodeModal from './modal.vue';
import CodeModal from './code.vue';
import { putNodeNum, putLineNum, getLineNum, getNodeNum } from './customModeler/custom/store';
import { useRoute } from 'vue-router';

const route = useRoute();

const canvasRef = ref();

const state = reactive({
	data: [] as any,
	bpmnModeler: {} as any,
	numFlag: 'x' as any,
});

const props = defineProps({
	prxml: String,
});

const { bpmnModeler } = toRefs(state);

onMounted(async () => {

	if (route.query?.uuid) {
		state.numFlag = route.query?.uuid;
	} else if (route.query?.id) {
		state.numFlag = route.query?.id;
	}
	console.log('numFlag2:' + state.numFlag);
	bpmnModeler.value = new CustomModeler({
		container: canvasRef.value,
		additionalModules: [{
			__init__: [
				'labelEditingProvider',
			],
			labelEditingProvider: ['value', null],
		},
		],
	});

	bpmnModeler.value.get('keyboard').bind(document);

	
	if (props.prxml) {
		bpmnModeler.value.importXML(props.prxml, (err: any) => {
			if (err) {
				console.error(err);
			} else {
				console.log('ok');
			}
		});
	} else {
		bpmnModeler.value.importXML(defxml, (err: any) => {
			if (err) {
				console.error(err);
			} else {
				console.log('ok');
			}
		});
	}
	addModelerListener();
	addEventBusListener();


});


const addModelerListener = () => {
	// const bpmnjs = this.bpmnModeler
	// const that = this
	// 这里我是用了一个forEach给modeler上添加要绑定的事件
	const events = ['shape.added', 'shape.move.end', 'shape.removed','connection.added', 'connect.end', 'connect.move'];
	events.forEach(function(event) {
		bpmnModeler.value.on(event, e => {
			const elementRegistry = bpmnModeler.value.get('elementRegistry');
			const shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
			if (event == 'shape.added') {
				if (e.element.id.substring(0, 1) == 'N' && e.element.id.substring(0, 2) !== 'NS' && e.element.id.substring(0, 2) !== 'NE') {
					// shape.name="审批节点"
					putNodeNum(state.numFlag, e.element.id.substring(1) - 0);
				}
			} else if (event == 'connection.added') {
				// console.log("创建了线段");
				// console.log(e.element);
				if (e.element.id.substring(0, 1) == 'L') {
					putLineNum(state.numFlag, e.element.id.substring(1) - 0);
				}else{
					//如果更新Line的ID?
					// bpmnModeler.value.get('modeling').updateProperties(e.element, {
					// 	id: "L"+(getLineNum(state.numFlag)-0+1),
					// 	// data:JSON.stringify(data),
					// });
					// putLineNum(state.numFlag, (getLineNum(state.numFlag)-0+1));
				}
			}
		});
	});
};

let currNode = {};
// let lastNum=10;

const addEventBusListener = () => {
	const eventBus = bpmnModeler.value.get('eventBus'); // 需要使用eventBus
	const eventTypes = ['element.dblclick']; // 需要监听的事件集合
	eventTypes.forEach(function(eventType) {
		eventBus.on(eventType, function(e) {
			if (!e || e.element.type == 'bpmn:Process') return;


			const elementRegistry = bpmnModeler.value.get('elementRegistry');
			const shape = elementRegistry.get(e.element.id); // 传递id进去


			// if(e.element.id.substring(0,1)!="N"){
			//
			// 	// bpmnModeler.value.get('modeling').updateProperties(shape,{
			// 	// 	name: '我哎你'
			// 	// })
			//
			// 	// // e.element.id="N"+(++lastNum);
			// 	// shape.id="N"+(++lastNum);
			// 	++lastNum;
			// 	shape.id="N"+lastNum;
			// 	shape.businessObject.id="N"+lastNum;
			//
			// 	console.log('新增了shape');
			// 	// console.log(e.element.id);
			// 	// 展示新增图形的属性
			// }

			console.log('双击了shape');
			console.log(shape);
			nodeModalRef.value.open(shape);
			currNode = shape;


			// openNodeModal(shape);


			// console.log(shape.businessObject.id);
			// shape.businessObject.name='李四';
			// bpmnModeler.value.get('modeling').updateProperties(shape,{
			// 	name: '我是修改后的Task名称'
			// })

			// this.getModeling().updateProperties(this.getShape(), {
			// 	[modelName]: multiple ? [newElement] : newElement,
			// });
			console.log(shape); // {Shape}
			// console.log(e.element) // {Shape}
			// console.log(JSON.stringify(shape)===JSON.stringify(e.element)) // true

		});
	});
};


const nodeModalRef = ref();

// const openNodeModal = () => {
// 	nodeModalRef.value.open();
// };

const closeNodeModal = (data: any) => {
	if(data.conds){
		bpmnModeler.value.get('modeling').updateProperties(currNode, {
			name: data.name,
			conds: data.conds,
		});
	}else{
		bpmnModeler.value.get('modeling').updateProperties(currNode, {
			name: data.name,
			hamen: data.hamen,			
			flway: data.flway,
			hatyp: data.hatyp,
			// data:JSON.stringify(data),
		});
	}
};

const getXml = async () => {
	let backXml = '';
	await bpmnModeler.value.saveXML({ format: true }).then(res => {
		backXml = res.xml;
	});
	return backXml;
};

defineExpose({ getXml });


const defxml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
	'<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:activiti="http://activiti.org/bpmn" id="sample-diagram" targetNamespace="http://activiti.org/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">\n' +
	'  <bpmn2:process id="Process_1" name="1" isExecutable="true">\n' +
	'    <bpmn2:startEvent id="NS" name="开始节点">\n' +
	'      <bpmn2:outgoing>L1</bpmn2:outgoing>\n' +
	'    </bpmn2:startEvent>\n' +
	'    <bpmn2:sequenceFlow id="L1" sourceRef="NS" targetRef="N1" />\n' +
	'    <bpmn2:endEvent id="NE" name="结束节点">\n' +
	'      <bpmn2:incoming>L2</bpmn2:incoming>\n' +
	'    </bpmn2:endEvent>\n' +
	'    <bpmn2:userTask id="N1" name="起草节点" activiti:assignee="l4" activiti:candidateUsers="">\n' +
	'      <bpmn2:documentation>起草节点，表单数据一般从绑定的表单提取</bpmn2:documentation>\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:formProperty id="userid" type="string" />\n' +
	'        <activiti:formProperty id="money" type="int" />\n' +
	'        <activiti:properties>\n' +
	'          <activiti:property name="编辑" value="edit" />\n' +
	'          <activiti:property name="撤回" value="back" />\n' +
	'          <activiti:property name="提交" value="commit" />\n' +
	'        </activiti:properties>\n' +
	'      </bpmn2:extensionElements>\n' +
	'      <bpmn2:incoming>L1</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L2</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'    <bpmn2:sequenceFlow id="L2" sourceRef="N1" targetRef="NE" />\n' +
	'  </bpmn2:process>\n' +
	'  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
	'    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
	'      <bpmndi:BPMNEdge id="Flow_1u6pmzo_di" bpmnElement="L1">\n' +
	'        <di:waypoint x="360" y="78" />\n' +
	'        <di:waypoint x="360" y="160" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_0rj5mf6_di" bpmnElement="L2">\n' +
	'        <di:waypoint x="360" y="240" />\n' +
	'        <di:waypoint x="360" y="452" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNShape id="Event_0byql27_di" bpmnElement="NS">\n' +
	'        <dc:Bounds x="342" y="42" width="36" height="36" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="339" y="12" width="43" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_0g48n8q_di" bpmnElement="N1">\n' +
	'        <dc:Bounds x="310" y="160" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Event_1h4oob7_di" bpmnElement="NE">\n' +
	'        <dc:Bounds x="342" y="452" width="36" height="36" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="339" y="495" width="43" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNShape>\n' +
	'    </bpmndi:BPMNPlane>\n' +
	'  </bpmndi:BPMNDiagram>\n' +
	'</bpmn2:definitions>\n';

const impXml=()=>{

}

const expXML=async ()=>{
  await bpmnModeler.value.saveXML({ format: true }).then(res => {
    download(res.xml, 'process', 'bpmn');
  });
}

const expSVG=async ()=>{
  await bpmnModeler.value.saveSVG({ format: true }).then(res => {
    download(res.svg, 'process', 'svg');
  });
}

//文本下载
const download = (data: string, filename: string, type: string): void => {
  const blob = new Blob([data]);
  const tempLink = document.createElement('a'); // 创建a标签
  const href = window.URL.createObjectURL(blob); // 创建下载的链接
  //filename
  const fileName = `${filename}.${type}`;
  tempLink.href = href;
  tempLink.target = '_blank';
  tempLink.download = fileName;
  document.body.appendChild(tempLink);
  tempLink.click(); // 点击下载
  document.body.removeChild(tempLink); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放掉blob对象
};

const codeModalRef = ref() as any;
const codeShow=async ()=>{
  await bpmnModeler.value.saveXML({ format: true }).then(res => {
    codeModalRef.value.openModal(res.xml);
  });
}

</script>

<style scoped>
.containers {
	position: absolute;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
	background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTQwIDBIMHY0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+') repeat !important;
}

.dark .containers{
	background-color: #666 !important;
}

.canvas {
	width: 100%;
	height: 100%;
}

.panel {
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}

</style>
