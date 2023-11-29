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
  name: 'Modeler',
  emits: ['bpmnMounted'],
  setup( props, { emit }) {
    const bpmnContext = BpmnStore;
    onMounted(() => {
      bpmnContext.initModeler({
        container: '#modeler-container',
        additionalModules: [
          //添加翻译
          { translate: ['value', translate('zh')] },
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
