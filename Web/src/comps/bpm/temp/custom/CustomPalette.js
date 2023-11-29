// CustomPalette.js
export default class CustomPalette {
	constructor(bpmnFactory, create, elementFactory, palette, translate) {
		this.bpmnFactory = bpmnFactory;
		this.create = create;
		this.elementFactory = elementFactory;
		this.translate = translate;

		palette.registerProvider(this);
	}

	getPaletteEntries(element) {
		const {
			bpmnFactory,
			create,
			elementFactory,
			translate
		} = this;

		function createTask() {
			return function(event) {
				const businessObject = bpmnFactory.create('bpmn:Task'); // 其实这个也可以不要
				const shape = elementFactory.createShape({
					type: 'bpmn:Task',
					businessObject
				});
				console.log(1111)
				console.log(shape) // 只在拖动或者点击时触发
				create.start(event, shape);
				console.log(2222)
			}
		}


		return {
			'create.lindaidai-task': {
				group: 'model',
				className: 'icon-custom lindaidai-task',
				title: translate('创建一个类型为lindaidai-task的任务节点'),
				action: {
					dragstart: createTask(),
					click: createTask(),
				}
			}
		}
	}
}

CustomPalette.$inject = [
	'bpmnFactory',
	'create',
	'elementFactory',
	'palette',
	'translate'
]

