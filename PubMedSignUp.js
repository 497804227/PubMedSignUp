// ����Ϊ��һ������Ҫ���Ƶ�����

function setSelected(selectObj,optionsText){
    for(var i=0;i<selectObj.options.length;i++){
        if(selectObj.options[i].text==optionsText){
            selectObj.options[i].selected=true;
            return i;
        }
    }
}

void((function(){
// ��������ҳ����Ҫ�ֶ������ֵ���밴ʵ������޸�textValueList�е�ֵ����Ҫ��textNameList
var textNameList = new Array("xmpy","txdz","yzbm","lxdh","dzxx","zcxh")
var textValueList = new Array("����ƴ��","����ͨѶ��ַ","�ʱ�","�̶��绰","��������","ע��ѧ��")
for (var i=0;i<textNameList.length;i++){
	document.getElementById(textNameList[i]).value = textValueList[i];
}



// ������ҳ����Ҫ�����ѡ�Ĳ��֣���������ֵ���Լ�ȥ����ҳԴ�룬����ֻ�ṩһ����
//xbm_0���Ա��С�xbm_1���Ա�Ů
//hfm_0��δ�顢hfm_1���ѻ飬�������Լ�ȥ��Դ��
var clickNameList = new Array("xbm_0","hfm_0")
for (var i=0;i<clickNameList.length;i++){
	document.getElementById(clickNameList[i]).click();
}

// ������ҳ����Ҫ����ѡ��Ĳ��֣��밴ʵ�������һ�ֲ�©�ġ��޸�textValueList�е�ֵ������������ò��Ҫдȫ���й�����������������Ա
// ��Ҫ��textNameList
// û����Է�Ӧ���������ã���Ϊ����Ӧ��ģ����������޸�Դ����ߵȴ��ű�ִ����ɺ���ѡ
var selectNameList = new Array("xyjrm","mzm","zzmmm","kslym","xxxs","bklbm","bydwssm","byzydm")
var selectValueList = new Array("���۾���","����","������ò","������Դ","ȡ�����ѧ����ѧϰ��ʽ","�������","��ѧ����ʡ��","רҵ����")
for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}

// ��ҳ�Դ��ĸ��º���
selectedKsly();
refreshBydwList();
loadByzy2();

// �ȴ���������ԺУ��רҵ����������������ñ����ӳ������趨��Ĭ��3��
// ԺУ��רҵҲ�������˵�����ͬ����Ҫ�ϸ�ƥ��
setTimeout(function(){ 
var selObj=document.getElementById("bydwm");
setSelected(selObj,"(ѧУ���)ѧԺ����");
var selObj=document.getElementById("byzydm2");
setSelected(selObj,"רҵ���-רҵ����");
}, 3000);

selectedBydw() //ԭ���Դ���һ�����ã���֪����ʲô���ã����ÿ�
})())

// ����Ϊ��һ������Ҫ���Ƶ�����









// ����Ϊ�ڶ�������Ҫ���Ƶ�����

function setSelected(selectObj,optionsText){
    for(var i=0;i<selectObj.options.length;i++){
        if(selectObj.options[i].text==optionsText){
            selectObj.options[i].selected=true;
            return i;
        }
    }
}

void((function(){
var textNameList = new Array("hkszdxxdz","xxgzdw","daszdw","daszdwdz","daszdwyzbm","jlcf","kszbqk","xingming0","guanxi0","danweizhiwu0","dianhua0","xingming1","guanxi1","danweizhiwu1","dianhua1","nianyue0","danwei0","zhiwu0")
var textValueList = new Array("���ڵ�ַ","ѧУ��ַ","�������ڵ�λ","�������ڵ�λ��ַ","�������ڵ�λ�ʱ�","���ͣ��ޣ�","���ף��ޣ�","������1","������ϵ1","������ְ��λ1","�����绰1","������2","������ϵ2","������ְ��λ2","�����绰2","��λ����ʱ�䣨2014��9����","��λ������ַ","ѧ��")
for (var i=0;i<textNameList.length;i++){
	document.getElementById(textNameList[i]).value = textValueList[i]
}

var selectNameList = new Array("jgss","hkszdss","csdss","daszdss")
var selectValueList = new Array("���ᣨʡ��","���ڣ�ʡ��","�����أ�ʡ��","����λ�ã�ʡ��")
for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}

//��ҳ�Դ��ĸ��º���
updateJgDjsList()
updateHkszdDjsList();
updateCsdDjsList();
updateDaszdDjsList();

// �ȴ��������س��к����ؽ�����������ñ����ӳ������趨��Ĭ�϶���0.5��
setTimeout(function(){ 
var selectNameList = new Array("jgdjs","hkszddjs","csddjs","daszddjs")
var selectValueList = new Array("���ᣨ�У�","���ڣ��У�","�����أ��У�","����λ�ã��У�")
for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}}, 500);

//��ҳ�Դ��ĸ��º���
updateJgXjsList();
updateHkszdXjsList();
updateCsdXjsList();
updateDaszdXjsList();

setTimeout(function(){ 
var selectNameList = new Array("jgszdm","hkszdm","csdm","daszdm")
var selectValueList = new Array("���ᣨ��/�أ�","���ڣ���/�أ�","�����أ���/�أ�","����λ�ã���/�أ�")
for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}}, 500);

})())

// ����Ϊ�ڶ�������Ҫ���Ƶ�����

//��ʽ�������ڵģ��ü��±�д���и����ӵĸ�ʽ