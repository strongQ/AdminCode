const customElements = ['bpmn:Task','bpmn:UserTask'] // 自定义元素的类型
const customConfig = { // 自定义元素的配置
    'bpmn:Task': {
        // 'url': require('@assets/rules.png'),
        // 'url': require('../../assets/rules.png'),
        // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 220, height: 80}
    },
    'bpmn:UserTask': {
        // 'url': require('@assets/rules.png'),
        // 'url': require('../../assets/rules.png'),
        'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 100, height: 80}
    },
    'bpmn:UserNode': {
        // 'url': require('@assets/rules.png'),
        // 'url': require('../../assets/rules.png'),
        'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
        'attr': { x: 0, y: 0, width: 220, height: 80}
    },
    // 'bpmn:StartEvent': {
    //     'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/start.png',
    //     'attr': { x: 0, y: 0, width: 40, height: 40 }
    // }
}
const hasLabelElements = ['bpmn:StartEvent', 'bpmn:EndEvent'] // 一开始就有label标签的元素类型

export { customElements, customConfig, hasLabelElements }
