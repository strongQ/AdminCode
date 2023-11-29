<template>
  <el-dialog v-if="state.show" v-model='state.show' title='代码预览' draggable width='90%'>
    <CodeMirror
        v-model:value="state.code"
        :options="state.cmOptions"
        border
        placeholder="test placeholder"
        height="500px"
    />
  </el-dialog>
</template>

<script lang='ts' setup>
import {defineExpose, reactive} from 'vue';
// import CodeMirror from 'codemirror';
import CodeMirror from "codemirror-editor-vue3";

// import 'codemirror/lib/codemirror.css'; // 引入css文件
// import 'codemirror/theme/idea.css';
// import 'codemirror/theme/darcula.css';
// import 'codemirror/mode/javascript/javascript.js'; // 引入语言模式 可以从 codemirror/mode/ 下引入多个
// import 'codemirror/mode/clike/clike.js'; // 引入语言模式 可以从 codemirror/mode/ 下引入多个

//https://renncheung.github.io/codemirror-editor-vue3/instructions/props.html

const state = reactive({
  cmShow:true,
  show: false,
  code:'',
  cmOptions: {
    readOnly: true,
    // mode: 'text/x-nginx-conf', // Language mode
    // mode: 'javascript', // Language mode
    // mode: 'text/x-csharp', // Language mode
    mode: 'text/x-java', // Language mode
    // theme: 'darcula', // Theme
    lineNumbers: true, // Show line number
    smartIndent: true, // Smart indent
    indentUnit: 4, // The smart indent unit is 2 spaces in length
    foldGutter: true, // Code folding
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true, // Display the style of the selected row
  }
});


const openModal = async (data: any) => {
  state.code = data;
  state.show = true;
};

defineExpose({openModal});

</script>
