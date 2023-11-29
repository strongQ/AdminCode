<template>
	<div class="oaFlowCate-container">
		<el-dialog v-model="isShowDialog" :title="props.title" :width="700" draggable="">
			<el-form :model="ruleForm" ref="ruleFormRef" size="default" label-width="100px" :rules="rules">
				<el-row :gutter="35">
					<el-form-item v-show="false">
						<el-input v-model="ruleForm.id" />
					</el-form-item>
					
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="名称" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入名称" clearable />
							
						</el-form-item>
						
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
					<el-form-item label='上级分类：'>
								<el-input :value='ruleForm.parent?.name' :suffix-icon='Search' :readonly='true' @click='openCateModal'></el-input>
							</el-form-item>

						</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="排序号" prop="ornum">
							<el-input-number v-model="ruleForm.ornum" placeholder="请输入排序号" clearable />
							
						</el-form-item>
						
					</el-col>

					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="备注" prop="remark">
							<el-input v-model="ruleForm.remark" placeholder="请输入备注" clearable />
							
						</el-form-item>
						
					</el-col>
					
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel" size="default">取 消</el-button>
					<el-button type="primary" @click="submit" size="default">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
	<CateModal url='api/oaFlowCate/tree' ref='cateModal' @close='cateChoose' />
</template>

<script lang="ts" setup>
	import { ref,onMounted } from "vue";
	import { ElMessage } from "element-plus";
	import type { FormRules } from "element-plus";
	import CateModal from '/@/comps/gen/GenTreeModal.vue';
	import { addOaFlowCate, updateOaFlowCate } from "/@/api/system/oaFlowCate";
	//父级传递来的参数
	var props = defineProps({
	title: {
	type: String,
	default: "",
	},
	});
	//父级传递来的函数，用于回调
	const emit = defineEmits(["reloadTable"]);
	const ruleFormRef = ref();
	const isShowDialog = ref(false);
	const ruleForm = ref<any>({});
		//自行删除非必填规则
		const rules = ref<FormRules>({
 
 
  name: [{required: true, message: '请输入名称！', trigger: 'blur',},],
  ornum: [{required: true, message: '请输入排序号！', trigger: 'blur',},]
 
});

//分类弹框逻辑
const cateModal = ref();
const openCateModal = () => {
	cateModal.value.openModal();
};
const cateChoose = (node: any) => {
	ruleForm.value.parent = { id: node.id, name: node.name };
	ruleForm.value.pid=node.id;
};

// 打开弹窗
const openDialog = (row: any) => {
  ruleForm.value = JSON.parse(JSON.stringify(row));
  isShowDialog.value = true;
};

// 关闭弹窗
const closeDialog = () => {
  emit("reloadTable");
  isShowDialog.value = false;
};

// 取消
const cancel = () => {
  isShowDialog.value = false;
};

// 提交
const submit = async () => {
  ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
    if (isValid) {
      let values = ruleForm.value;
      if (ruleForm.value.id != undefined && ruleForm.value.id > 0) {
        await updateOaFlowCate(values);
      } else {
        await addOaFlowCate(values);
      }
      closeDialog();
    } else {
      ElMessage({
        message: `表单有${Object.keys(fields).length}处验证失败，请修改后再提交`,
        type: "error",
      });
    }
  });
};





// 页面加载时
onMounted(async () => {
});

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>




