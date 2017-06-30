var oHd=document.getElementById("hd");
var oSp1=document.getElementById("sp1");
var oUl1=document.getElementById("ul1");
	
	oHd.onmouseover=function(){
		oUl1.style.display="block";
		oSp1.className="back";
	}
	oHd.onmouseout=function(){
		oUl1.style.display="none";
		oSp1.className="";
	}

var oLi=document.getElementById("li6");
var oWd=document.getElementById("wd");
	oLi.onmouseover=function(){
		oWd.style.display="block";
	}
	oLi.onmouseout=function(){
		oWd.style.display="none";
	}

var oLi12=document.getElementById("li12");
var oSjb=document.getElementById("sjb");
	oLi12.onmouseover=function(){
		oSjb.style.display="block";
	}
	oLi12.onmouseout=function(){
		oSjb.style.display="none";
	}

var oLi14=document.getElementById("li14");
var oGzb=document.getElementById("gzb");
	oLi14.onmouseover=function(){
		oGzb.style.display="block";
	}
	oLi14.onmouseout=function(){
		oGzb.style.display="none";
	}
var oLi16=document.getElementById("li16");
var oKhb=document.getElementById("khb");
	oLi16.onmouseover=function(){
		oKhb.style.display="block";
	}
	oLi16.onmouseout=function(){
		oKhb.style.display="none";
	}

var oLi18=document.getElementById("li18");
var oWz=document.getElementById("wz");
	oLi18.onmouseover=function(){
		oWz.style.display="block";
	}
	oLi18.onmouseout=function(){
		oWz.style.display="none";
	}

var oGwc=document.getElementById("gwc");
var oCt=document.getElementById("ct");
	oGwc.onmouseover=function(){
		oCt.style.display="block";
	}
	oGwc.onmouseout=function(){
		oCt.style.display="none";
	}

var oAll=document.getElementById("first");
var oAllbb=document.getElementById("all-bb");
var oAllul=document.getElementById("allul");
var oUllist=oAllul.getElementsByTagName("li");
var oAllol=document.getElementById("allol");
var oOllist=oAllol.getElementsByTagName("li");
for(var i=0;i<oUllist.length;i++){
	oUllist[i].index=i;
	oUllist[i].onmouseover=function(){
		for(var j=0;j<oUllist.length;j++){
		var oAa=oUllist[j].getElementsByTagName("a")[0];
		oAa.style.color="#fff";
		oUllist[j].style.background="#c81623";
		oOllist[j].className="";
	}
		var oAa=this.getElementsByTagName("a")[0];
		oAa.style.color="#c81623";
		this.style.background="#f7f7f7";
		oOllist[this.index].className="name";

	}
}
oAll.onmouseover=function(){
	oAllbb.style.display="block";
}
oAll.onmouseout=function(){
	oAllbb.style.display="none";
}

var oLihw=document.getElementById("lihw");
var oHwb=document.getElementById("hwb");
	oLihw.onmouseover=function(){
		oHwb.style.display="block";
	}
	oLihw.onmouseout=function(){
		oHwb.style.display="none";
	}
	
var oBkr=document.getElementById("bkr");
var oBkrb=document.getElementById("bkrb");
    oBkr.onmouseover=function(){
    	oBkrb.style.display="block";
    }
	oBkr.onmouseout=function(){
    	oBkrb.style.display="none";
    }

var oPic=document.getElementById("pic");
var oPiclist=oPic.getElementsByTagName("img");
var oPhp=document.getElementById("php");
var oPhplist=oPhp.getElementsByTagName("img");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var num=0;
for(var i=0;i<oPhplist.length;i++){
	oPhplist[i].index=i;
	oPhplist[i].onmouseover=function(){
		for(var j=0;j<oPhplist.length;j++){
			oPiclist[j].className="";
		}
		oPiclist[this.index].className="picfirst";
	}
}
oLeft.onclick=function(){
	num--;
	if(num<0){
		num=4;
	}
	for(var j=0;j<oPhplist.length;j++){
			oPiclist[j].className="";
		}
		oPiclist[num].className="picfirst";
}
oRight.onclick=function(){
	num++;
	if(num==5){
		num=0;
	}
	for(var j=0;j<oPhplist.length;j++){
			oPiclist[j].className="";
		}
		oPiclist[num].className="picfirst";
}

var oCxjs=document.getElementById("cxjs");
var oZkjs=document.getElementById("zkjs");
var oIc=document.getElementById("ic")
oCxjs.onmouseover=function(){
	oZkjs.style.display="block";
	oIc.style.display="none";
}
oCxjs.onmouseout=function(){
	oZkjs.style.display="none";
	oIc.style.display="block";
}

var oBjt=document.getElementById("bj-t");
var oBjb=document.getElementById("bj-b");
oBjt.onmouseover=function(){
	oBjb.style.display="block";
}
oBjt.onmouseout=function(){
	oBjb.style.display="none";
}

var oFreet=document.getElementById("freet");
var oFreeb=document.getElementById("freeb");
	oFreet.onmouseover=function(){
		oFreeb.style.display="block";
	}
	oFreet.onmouseout=function(){
		oFreeb.style.display="none";
	}

var oUlbx=document.getElementById("ulbx");
var oUlbxlist=oUlbx.getElementsByTagName("li");
var oOlbx=document.getElementById("olbx");
var oOlbxlist=oOlbx.getElementsByTagName("li");
for(var i=0;i<oUlbxlist.length;i++){
	oUlbxlist[i].index=i;
	oUlbxlist[i].onmouseover=function(){
		for(var j=0;j<oUlbxlist.length;j++){
			oOlbxlist[j].className="";
		}
		oOlbxlist[this.index].className=" olbxlist ";
	}
	oUlbxlist[i].onmouseout=function(){
		oOlbxlist[this.index].className="";
	}
}

var oWxul=document.getElementById("wxul");
var oWxullist=oWxul.getElementsByTagName("li");
var oWxol=document.getElementById("wxol");
var oWxollist=oWxol.getElementsByTagName("li");
for(var i=0;i<oWxullist.length;i++){
	oWxullist[i].index=i;
	oWxullist[i].onmouseover=function(){
		for(var j=0;j<oWxullist.length;j++){
			oWxollist[j].className="";
		}
		oWxollist[this.index].className="wxulfist";
	}
	oWxullist[i].onmouseout=function(){
		oWxollist[this.index].className="";
	}
}

var oInp=document.getElementById("inp");
var oJia=document.getElementById("jia");
var oJian=document.getElementById("jian");
oJia.onclick=function(){
	oInp.value==30 || oInp.value++;
}
oJian.onclick=function(){
	oInp.value==0 || oInp.value--;
}


var oMore=document.getElementById("more");
var oLimore=document.getElementById("limore");
oMore.onclick=function(){
	oLimore.style.display="block";
}
oMore.onmouseout=function(){
	oLimore.style.display="none";
}

var oNavul=document.getElementById("navul");
var oNavullist=oNavul.getElementsByTagName("li");
var oUlsort=document.getElementById("ulsort");
var oUlsortul=oUlsort.getElementsByTagName("ul");

for(var i=0;i<oNavullist.length-1;i++){
	oNavullist[i].index=i;
	oNavullist[i].onclick=function(){
		for(var j=0;j<oNavullist.length-1;j++){
			oNavullist[j].className=""
			oUlsortul[j].className="";
		}
		this.className="libg";
		oUlsortul[this.index].className="datulfirst";
	}
}

var oCenul=document.getElementById("cenul");
var oCenullist=oCenul.getElementsByTagName("li");
var oCenol=document.getElementById("cenol");
var oCenollist=oCenol.getElementsByTagName("li");

for(var i=0;i<oCenullist.length-1;i++){
	oCenullist[i].index=i;
	oCenullist[i].onclick=function(){
		for(var j=0;j<oCenullist.length-1;j++){
			oCenullist[j].className="";
			oCenollist[j].className="";
		}
		this.className="cenullist"
		oCenollist[this.index].className="navollist";
	}
}

var oJr=document.getElementById("jr");
var oGwc=document.getElementById("gwcs");
oJr.onmouseover=function(){
	oGwc.style.display="block";
}
oJr.onmouseout=function(){
	oGwc.style.display="none";
}

