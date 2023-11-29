import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
    append as svgAppend,
    attr as svgAttr,
    create as svgCreate
} from 'tiny-svg';
import { customElements, customConfig, hasLabelElements } from '../utils/util'
import { is } from 'bpmn-js/lib/util/ModelUtil';

const HIGH_PRIORITY = 1500

export default class CustomRenderer extends BaseRenderer {
    constructor(eventBus, bpmnRenderer, modeling) {
        super(eventBus, HIGH_PRIORITY);

        this.bpmnRenderer = bpmnRenderer;
        this.modeling = modeling;
    }

    canRender(element) {
        // ignore labels
        return !element.labelTarget;
    }

    drawShape(parentNode, element) {
        console.log(element)
        const type = element.type // 获取到类型
        // if (customElements.includes(type)) { // or customConfig[type]
        if (type === 'bpmn:Task') { // or customConfig[type]
            const { url, attr } = customConfig[type]
            // const customIcon = svgCreate('image', {
            //     ...attr,
            //     href: url
            // })
            // let color = element.businessObject.color;
            // console.log(element.businessObject.di);
            // element.businessObject.di.set('bioc:stroke', "red")
            // const shape = this.bpmnRenderer.drawShape(parentNode, element);
            const myShape = svgCreate('rect',{
                "width":attr.width,
                "height":attr.height,
                "fill":"transparent",
                "stroke":"black",
                "stroke-width":"1",
            })
            svgAppend(parentNode, myShape)

            const myLine = svgCreate('line',{
                "x1":"0",
                "y1":"1.5em",
                "x2":attr.width,
                "y2":"1.5em",
                "stroke":"black",
                "stroke-width":"1",
            })
            svgAppend(parentNode, myLine);

            const tableName = svgCreate('text', {
                "font-size": "14",
                "fill": "blue",
                "x":attr.width/2,
                "dy":"15",
                "text-anchor":"middle",
            })
            tableName.innerHTML="测试一下 [sys_org_dept]";
            svgAppend(parentNode, tableName);

            const customDiv = svgCreate('text', {
                "font-size": "14",
                "font-family":'Courier New',
                "fill": "#000"
            })
            customDiv.innerHTML="<tspan x='8' dy='38' fill='green'>名称</tspan>\n" +
              "                <tspan x='8' dy='1.3em'>crtim</tspan>\n" +
              "                <tspan x='8' dy='1.3em'>uptim</tspan>\n" +
              "                <tspan x='8' dy='1.3em'>crman</tspan>\n" +
              "                 <tspan x='70' y='38' fill='green'>描述</tspan>\n" +
              "                <tspan x='70' dy='1.3em'>创建时间</tspan>\n" +
              "                <tspan x='70' dy='1.3em'>更新时间</tspan>\n" +
              "                <tspan x='70' dy='1.3em'>创建人</tspan>" ;
            element['width'] = attr.width // 这里我是取了巧, 直接修改了元素的宽高
            element['height'] = attr.height
            // let color = element.businessObject.color
            // element.businessObject.di.set('bioc:stroke', color)
            // svgAppend(parentNode, customIcon)
            svgAppend(parentNode, customDiv)
                // 判断是否有name属性来决定是否要渲染出label
            // if (!hasLabelElements.includes(type) && element.businessObject.name) {
            //     const text = svgCreate('text', {
            //         x: attr.x,
            //         y: attr.y + attr.height + 20,
            //         "font-size": "14",
            //         "fill": "#000"
            //     })
            //     text.innerHTML = element.businessObject.name
            //     svgAppend(parentNode, text)
            //     console.log(text)
            // }
            // this.modeling.resizeShape(element, {
            //     x: element.x,
            //     y: element.y,
            //     width: element['width'] / 2,
            //     height: element['height'] / 2
            // })
            // return customIcon
            return myShape
        }
        // else if (true) {
        //     console.log('我是绿色的')
        //     // let color = element.businessObject.color
        //     // element.businessObject.di.set('bioc:stroke', color)
        //     const shape = this.bpmnRenderer.drawShape(parentNode, element)
        //     return shape
        // }
        const shape = this.bpmnRenderer.drawShape(parentNode, element)
        return shape
    }

    getShapePath(shape) {
        return this.bpmnRenderer.getShapePath(shape);
    }
}

CustomRenderer.$inject = ['eventBus', 'bpmnRenderer', 'modeling'];
