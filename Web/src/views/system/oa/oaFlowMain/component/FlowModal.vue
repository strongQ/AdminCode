<template>
	<el-dialog v-model='state.isShow' title='流程模板选择' width='800px' draggable>
		<div style='height: 440px'>
			<el-tabs v-model='activeName' type='card' @tab-click='tabChange'>
				
				<el-tab-pane label='按分类选择' name='k2'>
					<el-row>
						<el-col :span='12'>
							<div style='height: 390px;'>
								<CateTree :maInit='false' @node-click='nodeClick' url='/api/oaFlowCate/tree' ref='cateTreeRef' />
							</div>
						</el-col>
						<el-col :span='12'>
							<div style='border: 1px solid #ccc;height: 390px;margin-left: 5px;overflow: auto'>
								<ul class='z-cate-tree'>
									<li v-for='item in tierItems' :key='item.id' class='f-flow' title='444444444' @click='tierItemClick(item)'>
										<el-checkbox v-model='item.checked' />
										<img :src='vbootPng'>
										<span class='layui-elip f-flow-name'>{{ item.name }}</span>
										<span class='layui-elip f-flow-cate'>{{ item.catna }}</span>
									</li>
								</ul>
							</div>
						</el-col>
					</el-row>
				</el-tab-pane>
				
			</el-tabs>
		</div>
		<template #footer>
      <span class='dialog-footer'>
        <el-button type='primary' @click='closeModal'>确 认</el-button>
        <el-button @click='state.isShow = false'>取 消</el-button>
        <el-button @click='clearAndcloseModal' style='margin-left: 20px'>清空选择</el-button>
      </span>
		</template>
	</el-dialog>
</template>

<script lang='ts' setup>
import { defineExpose, reactive, ref, toRaw, toRefs } from 'vue';
import request from '/@/utils/request';
import CateTree from '/@/comps/gen/GenTree.vue';
import { ElMessage } from 'element-plus';
import {  getOaFlowTempList } from '/@/api/system/oaFlowTemp';
import vbootPng from '/@/assets/img/template.png';

let p_flow_type = -1;//
let p_tab_key = 'k1';
let p_tier_init_flag = false;//层级架构页签初始化标记

const cateTreeRef = ref();

const state = reactive({
	isShow: false,
	receSearch: '' as string,
	receItems: [] as any,
	tierItems: [] as any,
	seldItem:null,
});

const { receItems, tierItems,seldItem } = toRefs(state);

const activeName = ref('k2');

//region z Tab切换
async function tabChange(tab: any) {
	p_tab_key = tab.paneName;
	if (p_tab_key === 'k2') {
		if (!p_tier_init_flag) {
			await cateTreeRef.value.init();
			p_tier_init_flag = true;
		}
	}
}

//endregion


//region x.1 最近使用



const receInit = async () => {
	receItems.value = await request({
		url: '/oa/flow/rece/list?type=' + p_flow_type,
		method: 'get',
	});
};



//endregion


//region x.2 层级架构

async function nodeClick(node: any) {
	if (node && node.id) {

		var res=await getOaFlowTempList({cateId:node.id});
		
		tierItems.value=res.data.result;
		
	}
}

function tierItemClick(item: any) {
	item.checked = !item.checked;
	if(item.checked==true){
    for (let i = 0; i < tierItems.value.length; i++) {
      if (tierItems.value[i].id !== item.id) {
        tierItems.value[i].checked = false;
      }
    }
		seldItem.value=item;
	}else{
		seldItem.value = null;
	}
}

//endregion

//region x.3 常用群组

//endregion

//region x.4 我的收藏

//endregion



//region 与父组件的交互逻辑
const openModal = async () => {
 // await receInit();


	state.isShow = true;

	
};

defineExpose({ openModal });

const emits = defineEmits(['close']);
const closeModal = () => {
	if(seldItem.value==null){
		ElMessage.warning('请选择一个流程模板再发起流程');
		return false;
	}
	const rawSeldItem = toRaw(seldItem.value) as any;
	// if (rawSeldItem && rawSeldItem.id) {
	// 	//更新后台数据库最近使用的TEMPS
	// 	request({
	// 		url: '/oa/flow/rece',
	// 		method: 'post',
	// 		data: [rawSeldItem],
	// 	});
	// }
	state.isShow = false;
	emits('close', rawSeldItem);
};

const clearAndcloseModal = () => {
	state.isShow = false;
	emits('close', null);
};

//endregion

</script>

<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}

.layui-elip {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}


.f-flow:before,
.f-flow:after {
	content: " ";
	display: table;
}

.f-flow:after {
	clear: both;
}

.f-flow input, .f-flow label {
	float: left;
	margin-top: 10px;
	margin-right: 8px;
}

.f-flow img {
	width: 50px;
	height: 50px;
	float: left;
	border-radius: 100%;
	margin-right: 8px;
}


.f-flow .f-flow-name,
.f-flow .f-flow-cate {
	display: block;
}

.f-flow .f-flow-name {
	margin-top: 6px;
}

.f-flow .f-flow-cate {
	color: #a599b2;
}

/*最近*/


/*搜索查询*/
.z-flow-search li {
	/*width: 280px;*/
	width: 50%;
	float: left;
	cursor: pointer;
	padding: 2px;
	list-style-type: none;
	/*margin: 3px;*/
}

.z-flow-search li:hover {
	background-color: #f7efec;
}

.dark .z-flow-search li:hover {
	background-color: #1f1f1f;
}


/*流程分类树*/
.z-cate-tree li {
	margin: 3px;
	cursor: pointer;
	padding: 3px;
	list-style-type: none;
}

.z-cate-tree li:hover {
	background-color: #f7efec;
}

.z-cate-tree .z-flow-search li:hover {
	background-color: #1f1f1f;
}
</style>
