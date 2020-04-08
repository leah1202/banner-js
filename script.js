var index=0,
    lis=document.getElementById("lis").getElementsByTagName("li"),
    pics=document.getElementById("banner").getElementsByTagName("div"),
    len=lis.length,
    size=pics.length,
    time=null;

//封装浏览器兼容事件方法
function addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, true);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    }
    else {
        element['on' + type] = handler;
    }
}
  
//封装切换图片函数
function changeImg(){
 for(var i=0;i<size;i++){
 	pics[i].style.display="none";
 	lis[i].className="";
}
 pics[index].style.display="block";
 lis[index].className="active";
}
//封装图片轮播

function starAutoPlay(){
	time=setInterval(function(){
		index++;
		if(index>=size){
			index=0;}
		changeImg();
	},1000)
}

//清除定时器，停止自动轮播
function stopAutoPlay(){
	if (time) {
		clearInterval(time);
	}
}

//点击选项卡，出现相应的图片
for (var j=0;j<size;j++) {
	lis[j].setAttribute("date-id",j);
	addHandler(lis[j],"click",function(){
		index=this.getAttribute("date-id");
		changeImg();
	})
}

//鼠标划入main，停止轮播
addHandler(main,"mouseover",stopAutoPlay);

//鼠标离开main，开始轮播
addHandler(main,"mouseout",starAutoPlay);

//自动开启轮播
starAutoPlay();
