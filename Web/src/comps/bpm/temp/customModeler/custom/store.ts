const nodeNumMap = { } as any;
const lineNumMap = { } as any;

export const putNodeNum = (id:string,num: Number) => {
	let flag=false;
	for (let key in nodeNumMap) {
		if(key==id){
			flag=true;
			if(num>nodeNumMap[key]){
				nodeNumMap[key]=num;
			}
			break;
		}
	}
	if(!flag){
		nodeNumMap[id]=num;
	}
};

export const getNodeNum = (id:string) => {
	for (let key in nodeNumMap) {
		if(key==id){
			return nodeNumMap[id];
		}
	}
	return null;
};

export const putLineNum = (id:string,num: Number) => {
	let flag=false;
	for (let key in lineNumMap) {
		if(key==id){
			flag=true;
			if(num>lineNumMap[key]){
				lineNumMap[key]=num;
			}
			break;
		}
	}
	if(!flag){
		lineNumMap[id]=num;
	}
};

export const getLineNum = (id:string) => {
	for (let key in lineNumMap) {
		if(key==id){
			return lineNumMap[id];
		}
	}
	return null;
};

