<template>
	<div class="containers">
		<div class="canvas" ref="canvasRef" style='height: 1000px;'></div>
		<OrgModal ref='orgModal' @close='closeOrgModal'/>
	</div>

</template>

<script lang='ts' setup>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import { onMounted, reactive, ref, toRefs } from 'vue';
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import OrgModal from '/@/comps/sys/OrgModal.vue';
import customModule from './custom'
import CustomModeler from './customModeler'


const orgModal = ref();

const openOrgModal = () => {
	orgModal.value.openModal({
		opener: 'opman',
		orgType: 8,
	});
};

const canvasRef = ref();

const state = reactive({
	data: [] as any,
	bpmnModeler:{} as any,
});

const { bpmnModeler } = toRefs(state);

onMounted( () => {
	bpmnModeler.value=new BpmnModeler({
		container: canvasRef.value,
		additionalModules: [
			customModule
		]
	})
	// bpmnModeler.value=new CustomModeler({
	// 	container: canvasRef.value,
	// 	additionalModules: [
	// 	]
	// })
	bpmnModeler.value.importXML(xmlStr, (err:any) => {
		if (err) {
			console.error(err)
		} else {
			console.log("ok")
		}
	})
	// addModelerListener();
	addEventBusListener();
});


const addModelerListener=()=> {
	// const bpmnjs = this.bpmnModeler
	// const that = this
	// 这里我是用了一个forEach给modeler上添加要绑定的事件
	const events = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end','connect.move']
	events.forEach(function(event) {
		bpmnModeler.value.on(event, e => {
			console.log(event, e)
			var elementRegistry =  bpmnModeler.value.get('elementRegistry')
			var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
			console.log(shape)
		})
	})
}

let lastClickTime=0;
let currNode={};

const addEventBusListener=()=> {
	const eventBus = bpmnModeler.value.get('eventBus') // 需要使用eventBus
	const eventTypes = ['element.click'] // 需要监听的事件集合
	eventTypes.forEach(function(eventType) {
		eventBus.on(eventType, function(e) {
			if (!e || e.element.type == 'bpmn:Process') return

			var elementRegistry = bpmnModeler.value.get('elementRegistry')
			var shape = elementRegistry.get(e.element.id) // 传递id进去

			if(new Date().getTime()-lastClickTime<=500){
				openOrgModal();
				currNode=shape;
			}
			lastClickTime=new Date().getTime();
			// console.log(e)

			console.log(shape.businessObject.id);
			// shape.businessObject.name='李四';
			// bpmnModeler.value.get('modeling').updateProperties(shape,{
			// 	name: '我是修改后的Task名称'
			// })

			// this.getModeling().updateProperties(this.getShape(), {
			// 	[modelName]: multiple ? [newElement] : newElement,
			// });
			console.log(shape) // {Shape}
			// console.log(e.element) // {Shape}
			// console.log(JSON.stringify(shape)===JSON.stringify(e.element)) // true

		})
	})
}




const closeOrgModal=()=>{

	bpmnModeler.value.get('modeling').updateProperties(currNode,{
		name: '我是双击修改后的Task名称'
	})

}





















































const xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n' +
	'<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:activiti="http://activiti.org/bpmn" id="sample-diagram" targetNamespace="http://activiti.org/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">\n' +
	'  <bpmn2:process id="Process_1" name="1" isExecutable="true">\n' +
	'    <bpmn2:startEvent id="N1" name="开始节点">\n' +
	'      <bpmn2:outgoing>L1</bpmn2:outgoing>\n' +
	'    </bpmn2:startEvent>\n' +
	'    <bpmn2:sequenceFlow id="L1" sourceRef="N1" targetRef="N2" />\n' +
	'    <bpmn2:exclusiveGateway id="N9" name="条件分支">\n' +
	'      <bpmn2:documentation>判断审批金额是否大于100</bpmn2:documentation>\n' +
	'      <bpmn2:incoming>L4</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L6</bpmn2:outgoing>\n' +
	'      <bpmn2:outgoing>L5</bpmn2:outgoing>\n' +
	'    </bpmn2:exclusiveGateway>\n' +
	'    <bpmn2:sequenceFlow id="L4" sourceRef="N4" targetRef="N9" />\n' +
	'    <bpmn2:sequenceFlow id="L6" name="王五分支线" sourceRef="N9" targetRef="N6">\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:executionListener expression="money&#60;=100" event="take" />\n' +
	'      </bpmn2:extensionElements>\n' +
	'    </bpmn2:sequenceFlow>\n' +
	'    <bpmn2:sequenceFlow id="L5" name="李四分支线" sourceRef="N9" targetRef="N5">\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:executionListener expression="money&#62;100" event="take" />\n' +
	'      </bpmn2:extensionElements>\n' +
	'    </bpmn2:sequenceFlow>\n' +
	'    <bpmn2:sequenceFlow id="L7" sourceRef="N5" targetRef="N7" />\n' +
	'    <bpmn2:sequenceFlow id="L8" sourceRef="N6" targetRef="N7" />\n' +
	'    <bpmn2:endEvent id="N3" name="结束节点">\n' +
	'      <bpmn2:incoming>L2</bpmn2:incoming>\n' +
	'    </bpmn2:endEvent>\n' +
	'    <bpmn2:sequenceFlow id="L2" sourceRef="N7" targetRef="N3" />\n' +
	'    <bpmn2:sequenceFlow id="L3" sourceRef="N2" targetRef="N4" />\n' +
	'    <bpmn2:userTask id="N2" name="起草节点" activiti:assignee="z3" activiti:candidateUsers="">\n' +
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
	'      <bpmn2:outgoing>L3</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'    <bpmn2:userTask id="N4" name="张三审批" activiti:assignee="z3" activiti:candidateUsers="">\n' +
	'      <bpmn2:documentation>审批节点</bpmn2:documentation>\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:properties>\n' +
	'          <activiti:property name="审批" value="approve" />\n' +
	'          <activiti:property name="驳回" value="reject" />\n' +
	'        </activiti:properties>\n' +
	'      </bpmn2:extensionElements>\n' +
	'      <bpmn2:incoming>L3</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L4</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'    <bpmn2:userTask id="N5" name="李四审批" activiti:assignee="l4" activiti:candidateUsers="">\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:properties>\n' +
	'          <activiti:property name="审批" value="approve" />\n' +
	'          <activiti:property name="驳回" value="reject" />\n' +
	'        </activiti:properties>\n' +
	'      </bpmn2:extensionElements>\n' +
	'      <bpmn2:incoming>L5</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L7</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'    <bpmn2:userTask id="N6" name="王五审批" activiti:assignee="w5" activiti:candidateUsers="">\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:properties>\n' +
	'          <activiti:property name="审批" value="approve" />\n' +
	'          <activiti:property name="驳回" value="reject" />\n' +
	'        </activiti:properties>\n' +
	'      </bpmn2:extensionElements>\n' +
	'      <bpmn2:incoming>L6</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L8</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'    <bpmn2:userTask id="N7" name="赵六审批" activiti:assignee="z6" activiti:candidateUsers="">\n' +
	'      <bpmn2:extensionElements>\n' +
	'        <activiti:formProperty id="userid" type="string" />\n' +
	'        <activiti:taskListener class="do some thing" event="complete" />\n' +
	'        <activiti:properties>\n' +
	'          <activiti:property name="审批" value="approve" />\n' +
	'        </activiti:properties>\n' +
	'      </bpmn2:extensionElements>\n' +
	'      <bpmn2:incoming>L7</bpmn2:incoming>\n' +
	'      <bpmn2:incoming>L8</bpmn2:incoming>\n' +
	'      <bpmn2:outgoing>L2</bpmn2:outgoing>\n' +
	'    </bpmn2:userTask>\n' +
	'  </bpmn2:process>\n' +
	'  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
	'    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
	'      <bpmndi:BPMNEdge id="Flow_0uh8wmt_di" bpmnElement="L3">\n' +
	'        <di:waypoint x="560" y="200" />\n' +
	'        <di:waypoint x="560" y="250" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_01hb865_di" bpmnElement="L2">\n' +
	'        <di:waypoint x="560" y="670" />\n' +
	'        <di:waypoint x="560" y="732" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_1t81399_di" bpmnElement="L8">\n' +
	'        <di:waypoint x="690" y="550" />\n' +
	'        <di:waypoint x="690" y="630" />\n' +
	'        <di:waypoint x="610" y="630" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_00vdr2t_di" bpmnElement="L7">\n' +
	'        <di:waypoint x="430" y="550" />\n' +
	'        <di:waypoint x="430" y="630" />\n' +
	'        <di:waypoint x="510" y="630" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_1bnjbaa_di" bpmnElement="L5">\n' +
	'        <di:waypoint x="535" y="400" />\n' +
	'        <di:waypoint x="430" y="400" />\n' +
	'        <di:waypoint x="430" y="470" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="456" y="382" width="55" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_12ug1tp_di" bpmnElement="L6">\n' +
	'        <di:waypoint x="585" y="400" />\n' +
	'        <di:waypoint x="690" y="400" />\n' +
	'        <di:waypoint x="690" y="470" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="611" y="382" width="56" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_1miguqf_di" bpmnElement="L4">\n' +
	'        <di:waypoint x="560" y="330" />\n' +
	'        <di:waypoint x="560" y="375" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNEdge id="Flow_1u6pmzo_di" bpmnElement="L1">\n' +
	'        <di:waypoint x="560" y="68" />\n' +
	'        <di:waypoint x="560" y="120" />\n' +
	'      </bpmndi:BPMNEdge>\n' +
	'      <bpmndi:BPMNShape id="Event_0byql27_di" bpmnElement="N1">\n' +
	'        <dc:Bounds x="542" y="32" width="36" height="36" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="539" y="2" width="43" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Gateway_0qd58o6_di" bpmnElement="N9" isMarkerVisible="true">\n' +
	'        <dc:Bounds x="535" y="375" width="50" height="50" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="538" y="432" width="44" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Event_1h4oob7_di" bpmnElement="N3">\n' +
	'        <dc:Bounds x="542" y="732" width="36" height="36" />\n' +
	'        <bpmndi:BPMNLabel>\n' +
	'          <dc:Bounds x="539" y="775" width="43" height="14" />\n' +
	'        </bpmndi:BPMNLabel>\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_0g48n8q_di" bpmnElement="N2">\n' +
	'        <dc:Bounds x="510" y="120" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_04wpn1b_di" bpmnElement="N4">\n' +
	'        <dc:Bounds x="510" y="250" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_0j8meci_di" bpmnElement="N5">\n' +
	'        <dc:Bounds x="380" y="470" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_0pa1f64_di" bpmnElement="N6">\n' +
	'        <dc:Bounds x="640" y="470" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'      <bpmndi:BPMNShape id="Activity_0qmb4lo_di" bpmnElement="N7">\n' +
	'        <dc:Bounds x="510" y="590" width="100" height="80" />\n' +
	'      </bpmndi:BPMNShape>\n' +
	'    </bpmndi:BPMNPlane>\n' +
	'  </bpmndi:BPMNDiagram>\n' +
	'</bpmn2:definitions>\n';



</script>

<style scoped>
.containers{
	position: absolute;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
}
.canvas{
	width: 100%;
	height: 100%;
}
.panel{
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}

</style>
