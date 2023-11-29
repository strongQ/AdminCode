/* eslint-disable no-unused-vars */
import inherits from 'inherits'

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer'
import {
    isObject,
    assign,
    forEach
} from 'min-dash';
import {
    append as svgAppend,
    create as svgCreate,
    classes as svgClasses
} from 'tiny-svg'

import { customElements, customConfig, hasLabelElements } from '../../utils/util'
/**
 * A renderer that knows how to render custom elements.
 */
export default function CustomRenderer(eventBus, styles, textRenderer) {
    BaseRenderer.call(this, eventBus, 2000)

    var computeStyle = styles.computeStyle

    function renderLabel(parentGfx, label, options) {

        options = assign({
            size: {
                width: 100
            }
        }, options);

        var text = textRenderer.createText(label || '', options);

        svgClasses(text).add('djs-label');

        svgAppend(parentGfx, text);

        return text;
    }

    this.drawCustomElements = function(parentNode, element) {
        // console.log(678)
        // console.log(parentNode)
        console.log("自定义渲染")
        console.log(element)
        const type = element.type // 获取到类型
        if (type !== 'label') {
            console.log("type="+type);
            if (type === 'bpmn:Task') { // or customConfig[type]
                console.log("重构")
                let data={};
                data.tabna = "sys_org [组织架构汇总表]";
                data.fields = [
                    {name:'id',comet:'主键'},
                    {name:'name',comet:'名称'}
                ];
                if(element.businessObject.$attrs.data){
                    data=JSON.parse(element.businessObject.$attrs.data)
                }

                const { url, attr } = customConfig[type];
                attr.height=44+data.fields.length*18.3;
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
                // tableName.innerHTML="测试一下 [sys_org_dept]";
                tableName.innerHTML=data.tabna;
                svgAppend(parentNode, tableName);

                const customDiv = svgCreate('text', {
                    "font-size": "14",
                    "font-family":'Courier New',
                    "fill": "#000"
                })

                customDiv.innerHTML="<tspan x='8' dy='38' fill='green'>名称</tspan>";
                for (const field of data.fields) {
                    customDiv.innerHTML+="<tspan x='8' dy='1.3em'>"+field.name+"</tspan>";
                }
                customDiv.innerHTML+="<tspan x='70' y='38' fill='green'>描述</tspan>";
                for (const field of data.fields) {
                    customDiv.innerHTML+="<tspan x='70' dy='1.3em'>"+field.comet+"</tspan>";
                }

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
            }else if(type === 'bpmn:UserTask'){
                const { url, attr } = customConfig[type];
                const myShape = svgCreate('rect',{
                    "width":attr.width,
                    "height":attr.height,
                    "fill":"transparent",
                    "stroke":"black",
                    "stroke-width":"2",
                    "rx":'10'
                })
                svgAppend(parentNode, myShape);

                const titleDiv = svgCreate('text', {
                    "font-size": "14",
                    "font-family":'Courier New',
                    "fill": "#000",
                    "text-anchor":"middle",
                })
                titleDiv.innerHTML="<tspan x='50' dy='20' fill='black'>"+element.id+"</tspan>";
                svgAppend(parentNode, titleDiv);

                const contDiv = svgCreate('text', {
                    "font-size": "12",
                    "font-family":"Courier New",
                    "fill": "#000",
                    "text-anchor":"middle",
                })
                contDiv.innerHTML="";
                if(element.businessObject.name){
                    const size= Math.ceil(element.businessObject.name.length/7);
                    if(size===1){
                        contDiv.innerHTML+="<tspan x='50' dy='48'>"+element.businessObject.name+"</tspan>";
                    }else if(size===2){
                        contDiv.innerHTML+="<tspan x='50' dy='45'>"+element.businessObject.name.substring(0,7)+"</tspan>";
                        contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(7)+"</tspan>";
                    }else if(size===3){
                        contDiv.innerHTML+="<tspan x='50' dy='42'>"+element.businessObject.name.substring(0,7)+"</tspan>";
                        contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(7,14)+"</tspan>";
                        contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(14)+"</tspan>";
                    }else if(size>3){
                        contDiv.innerHTML+="<tspan x='50' dy='42'>"+element.businessObject.name.substring(0,7)+"</tspan>";
                        contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(7,14)+"</tspan>";
                        contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(14,19)+"..."+"</tspan>";
                    }
                    // else{
                    //     for(let i=0;i<size;i++){
                    //         if(i!==size-1){
                    //             if(i===0){
                    //                 contDiv.innerHTML+="<tspan x='50' dy='36'>"+element.businessObject.name.substring(i*7,7*(i+1))+"</tspan>";
                    //             }else{
                    //                 contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(i*7,7*(i+1))+"</tspan>";
                    //             }
                    //         }else{
                    //             if(i===0){
                    //                 contDiv.innerHTML+="<tspan x='50' dy='38'>"+element.businessObject.name.substring(i*7)+"</tspan>";
                    //             }else{
                    //                 contDiv.innerHTML+="<tspan x='50' dy='16'>"+element.businessObject.name.substring(i*7)+"</tspan>";
                    //             }
                    //         }
                    //     }
                    // }
                }
                // contDiv.innerHTML="<tspan x='8' dy='38'>"+element.businessObject.name+"</tspan>";
                svgAppend(parentNode, contDiv);

                if(element.id==="N1"){
                    const imgPath = svgCreate('path', {
                        "d":"m 17,15 c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z",
                        "fill": "white",
                        "stroke-width": "0.5px",
                        "stroke": "black"
                    })
                    svgAppend(parentNode, imgPath);
                }else{

                    const imgPath1 = svgCreate('path', {
                        "d":"m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5",
                        "fill": "white",
                        "stroke-width": "0.5px",
                        "stroke": "black"
                    })

                    const imgPath2 = svgCreate('path', {
                        "d":"m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 ",
                        "fill": "white",
                        "stroke-width": "0.5px",
                        "stroke": "black"
                    })

                    const imgPath3 = svgCreate('path', {
                        "d":"m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z",
                        "fill": "black",
                        "stroke-width": "0.5px",
                        "stroke": "black"
                    })


                    svgAppend(parentNode, imgPath1);
                    svgAppend(parentNode, imgPath2);
                    svgAppend(parentNode, imgPath3);
                }

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
        } else {
            // element
            const shape = this.bpmnRenderer.drawShape(parentNode, element)
            return shape
        }
    }
}

inherits(CustomRenderer, BaseRenderer)

CustomRenderer.$inject = ['eventBus', 'styles', 'textRenderer']

CustomRenderer.prototype.canRender = function(element) {
    // ignore labels
    return true
        // return !element.labelTarget;
}

CustomRenderer.prototype.drawShape = function(p, element) {
    console.log(element)
    console.log(element.type)
    if (customElements.includes(element.type)) {
        return this.drawCustomElements(p, element)
    }
}

CustomRenderer.prototype.getShapePath = function(shape) {
    console.log(shape)
}
