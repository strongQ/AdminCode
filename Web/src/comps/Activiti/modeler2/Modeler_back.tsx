import './modeler.css';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

import { defineComponent, onMounted } from 'vue';
import createDefaultBpmnXml from '/@/bpmn/defaultBpmnXml';
import activitiModdel from '/@/bpmn/resources/activiti-moddel.json';
import translate from '/@/bpmn/i18n';
import { BpmnStore } from '/@/bpmn/store';

export default defineComponent({
  name: 'Modeler2',
  emits: ['bpmnMounted'],
  setup( props, { emit }) {
    const bpmnContext = BpmnStore;
    onMounted(() => {
      bpmnContext.initModeler({
        container: '#modeler-container',
        additionalModules: [
          //添加翻译
          {
            translate: ['value', translate('zh')],
            paletteProvider:["value",''],//禁用/清空左侧工具栏
            labelEditingProvider:["value",''],//禁用节点编辑
            contextPadProvider:["value",''],//禁用图形菜单
            bendpoints:["value",{}],//禁用连线拖动
            // zoomScroll:["value",''],//禁用滚动
            // moveCanvas:['value',''],//禁用拖动整个流程图
            move:['value','']//禁用单个图形拖动
          },
        ],
        moddleExtensions: {
          activiti: activitiModdel,
        },
      });
      const defaultProcessIdAndName = '1';
      bpmnContext
        .importXML(createDefaultBpmnXml(defaultProcessIdAndName, defaultProcessIdAndName))
        .then((result: Array<string>) => {
          if (result.length) {
            console.warn('importSuccess warnings', result);
          }
        })
        .catch((err: any) => {
          console.warn('importFail errors ', err);
        });
      emit("bpmnMounted");
    });

    return () => <div id="modeler-container" />;
  },
});
