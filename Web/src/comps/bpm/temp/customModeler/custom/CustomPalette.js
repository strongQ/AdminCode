/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
import { assign } from "min-dash";
import { getNodeNum } from './store';
let numFlag="x";

export default function PaletteProvider(palette, create, elementFactory,handTool,lassoTool,
                                        spaceTool, globalConnect, bpmnFactory) {
    this.create = create
    this.elementFactory = elementFactory
    this.handTool = handTool;
    this.lassoTool = lassoTool;
    this.spaceTool = spaceTool;
    this.globalConnect = globalConnect
    this.bpmnFactory = bpmnFactory
    palette.registerProvider(this);
    if(window.location.hash.indexOf("uuid=")>0){
        numFlag = window.location.hash.split("uuid=")[1];
    }else if(window.location.hash.indexOf("?id=")>0){
        numFlag = window.location.hash.split("?id=")[1];
    }
    console.log("numFlag1:"+numFlag);
}

PaletteProvider.$inject = [
    'palette',
    'create',
    'elementFactory',
    "handTool",
    "lassoTool",
    "spaceTool",
    'globalConnect',
    'bpmnFactory'
]

PaletteProvider.prototype.getPaletteEntries = function(element) {
    const {
        create,
        elementFactory,
        bpmnFactory,
        handTool,
        lassoTool,
        spaceTool,
        globalConnect,
        translate,
    } = this;

    // function createTask() {
    //     return function(event) {
    //         const id ="N"+(getNodeNum(numFlag)-0+1);
    //         const businessObject = bpmnFactory.create('bpmn:Task', { id,custom: 2 });
    //         // businessObject['custom'] = 1 // 这样不行
    //         const shape = elementFactory.createShape({
    //             type: 'bpmn:Task',
    //             businessObject
    //         });
    //         const label = elementFactory.createLabel();
    //         console.log(shape) // 只在拖动或者点击时触发
    //         console.log(label) // 只在拖动或者点击时触发
    //         create.start(event, shape);
    //         // create.start(event, label);
    //     }
    // }


    function createUserNode() {
        return function(event) {
           
            console.log(numFlag);
            const id ="N"+(getNodeNum(numFlag)-0+1);
            const businessObject = bpmnFactory.create('bpmn:UserTask', {id, custom: 2,name:"审批节点" });
            // businessObject['custom'] = 1 // 这样不行
            const shape = elementFactory.createShape({
                type: 'bpmn:UserTask',
                businessObject
            });
           // const label = elementFactory.createLabel();
            console.log(shape) // 只在拖动或者点击时触发
            //console.log(label) // 只在拖动或者点击时触发
            create.start(event, shape);
            // create.start(event, label);
        }
    }

    // function createStratEvent() {
    //     return function(event) {
    //         const shape = elementFactory.createShape({
    //             type: 'bpmn:StartEvent'
    //         });
    //         create.start(event, shape);
    //     }
    // }

    // function createGateway() {
    //     return function(event) {
    //         const shape = elementFactory.createShape({
    //             type: 'bpmn:ExclusiveGateway'
    //         });
    //         create.start(event, shape);
    //     }
    // }

    function createAction(type, group, className, title, options) {
        function createListener(event) {
            const id ="N"+(getNodeNum(numFlag)-0+1);
            let name="";
            if(type==="bpmn:ReceiveTask"){
                name="抄送节点";
            }else if(type==="bpmn:ScriptTask"){
                name="脚本节点";
            }else if(type==="bpmn:ServiceTask"){
                name="服务节点";
            }else if(type==="bpmn:ExclusiveGateway"){
                name="互斥网关";
            }else if(type==="bpmn:ParallelGateway"){
                name="并行网关";
            }
            console.log(type);
            const taskBusinessObject = bpmnFactory.create(type, { id,name,custom:2 })
            var shape = elementFactory.createShape(assign({ type: type }, options,{ businessObject: taskBusinessObject }));
            // var shape = elementFactory.createShape(assign({ type: type }, options));
            if (options) {
                shape.businessObject.di.isExpanded = options.isExpanded;
            }
            create.start(event, shape);
        }

        var shortType = type.replace(/^bpmn:/, "");

        return {
            group: group,
            className: className,
            title: title || translate("Create {type}", { type: shortType }),
            action: {
                dragstart: createListener,
                click: createListener
            }
        };
    }

    return {
        "hand-tool": {
            group: "tools",
            className: "bpmn-icon-hand-tool",
            title: "激活抓手工具",
            action: {
                click: function (event) {
                    handTool.activateHand(event);
                }
            }
        },
        "lasso-tool": {
            group: "tools",
            className: "bpmn-icon-lasso-tool",
            title: "激活套索工具",
            action: {
                click: function (event) {
                    lassoTool.activateSelection(event);
                }
            }
        },
        "space-tool": {
            group: "tools",
            className: "bpmn-icon-space-tool",
            title: "激活空间工具",
            action: {
                click: function (event) {
                    spaceTool.activateSelection(event);
                }
            }
        },
        "global-connect-tool": {
            group: "tools",
            className: "bpmn-icon-connection-multi",
            title: "激活连接工具",
            action: {
                click: function (event) {
                    globalConnect.toggle(event);
                }
            }
        },
        "tool-separator": {//工具分割线
            group: 'tools',
            separator: true
        },
        // "create.user-task": createAction(
        //   "bpmn:UserTask",
        //   "activity",
        //   "bpmn-icon-user-task",
        //   "添加审批节点"
        // ),
        // 'create.user-task2': {
        //     group: 'model',
        //     className: 'bpmn-icon-user-task',
        //     title: '添加审批节点',
        //     action: {
        //         dragstart: createUserNode(),
        //         click: createUserNode()
        //     }
        // },
        'create.user-task': {
            group: 'model',
            className: 'bpmn-icon-user-task',
            title: '添加审批节点',
            action: {
                dragstart: createUserNode(),
                click: createUserNode()
            }
        },
        "create.receive-task": createAction(
          "bpmn:ReceiveTask",
          "activity",
          "bpmn-icon-receive-task",
          "添加抄送节点"
        ),
        "create.script-task": createAction(
          "bpmn:ScriptTask",
          "activity",
          "bpmn-icon-script-task",
          "添加脚本节点"
        ),
        "create.service-task": createAction(
          "bpmn:ServiceTask",
          "activity",
          "bpmn-icon-service-task",
          "添加服务节点"
        ),
        "create.exclusive-gateway": createAction(
          "bpmn:ExclusiveGateway",
          "activity",
          "bpmn-icon-gateway-xor",
          "添加互斥网关"
        ),
        "create.parallel-gateway": createAction(
          "bpmn:ParallelGateway",
          "activity",
          "bpmn-icon-gateway-parallel",
          "添加并行网关"
        ),
        // "create.data-object": createAction(
        //   "bpmn:DataObject",
        //   "activity",
        //   "bpmn-icon-data-object",
        //   "添加数据对象"
        // ),
        // "create.data-store": createAction(
        //   "bpmn:DataStore",
        //   "activity",
        //   "bpmn-icon-data-store",
        //   "添加数据存储"
        // ),
        "create.participant": createAction(
          "bpmn:Participant",
          "activity",
          "bpmn-icon-participant",
          "添加泳道"
        ),
        "create.group": createAction(
          "bpmn:Group",
          "activity",
          "bpmn-icon-group",
          "添加分组"
        ),
        // "create.data-store": createAction(
        //   "bpmn:DataStore",
        //   "activity",
        //   "bpmn-icon-data-store",
        //   "添加数据存储"
        // ),
        // 'create.user-node': {
        //     group: 'model',
        //     className: 'bpmn-icon-user-task',
        //     title: '添加审批节点',
        //     action: {
        //         dragstart: createUserNode(),
        //         click: createUserNode()
        //     }
        // },
        // 'create.lindaidai-task': {
        //     group: 'model',
        //     className: 'icon-custom lindaidai-task',
        //     title: '创建一个类型为lindaidai-task的任务节点',
        //     action: {
        //         dragstart: createTask(),
        //         click: createTask()
        //     }
        // },
        // 'create.exclusive-gateway': {
        //     group: 'gateway',
        //     className: 'bpmn-icon-gateway-none',
        //     title: '创建一个网关',
        //     action: {
        //         dragstart: createGateway(),
        //         click: createGateway()
        //     }
        // }
    }
}
