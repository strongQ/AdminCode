import MQTT from '/@/utils/MQTT';
import { OnMessageCallback } from 'mqtt';
import { onUnmounted, ref } from "vue";
export default function useMqtt() {
    const PublicMqtt = ref<MQTT | null>(null);
    
    const startMqtt = (val: string, callback: OnMessageCallback) => {
        //设置订阅地址
        PublicMqtt.value = new MQTT(val);
        //初始化mqtt
        PublicMqtt.value.init();
        //链接mqtt
        PublicMqtt.value.link();
        getMessage(callback);
    };
    const getMessage = (callback: OnMessageCallback) => {
        //   console.log(callback,"18")
        // PublicMqtt.value?.client.on('message', callback);
        // @ts-ignore //忽略提示
        PublicMqtt.value?.get(callback);
    };
    onUnmounted(() => {
        //页面销毁结束订阅
        if (PublicMqtt.value) {
            PublicMqtt.value.unsubscribes();
            PublicMqtt.value.over();
        }
    });
    
    return {
        startMqtt,
    };
}