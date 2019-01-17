var oScro=document.getElementById("scrollBanner");
var oList=document.getElementById("scollList");
var aLi=oList.children;
var len=aLi.length;
var oBtn=document.getElementById("btn");
var aBtn=oBtn.children;
var oNum=document.getElementById("nums");
var aNum=oNum.children;
aNum[0].className="hover"
oList.style.width=aLi.length*1500+"px";

//产生轮播
var i=0;
var timer=setInterval(function(){
	i++;
	if(i==len){
		oList.style.left=0;
		i=1;
	}
	Move();
	startMove(oList,{"left":-1500*i})
},3000)

//移入停止移出开启
oScro.onmouseover=function(){
	clearInterval(timer)
}
oScro.onmouseout=function(){
	timer=setInterval(function(){
		i++;
	if(i==len){
		oList.style.left=0;
		i=1;
	}
	Move();
	startMove(oList,{"left":-1500*i})
	},3000)
}

//点击箭头		
aBtn[1].onclick=function(){
	i++
	if(i==len){
		oList.style.left=0;
		i=1
	}
	Move();
	startMove(oList,{"left":-1500*i})
}

aBtn[0].onclick=function(){
	i--;
	if(i==-1){
		oList.style.left=-900*(len-1)+"px";
		i=len-2;
	}
	Move();
	startMove(oList,{"left":-1500*i})
}

//角标跟随
function Move(){
for(var j=0;j<aNum.length;j++){
	aNum[j].className="";
}

if(i==len-1){
	aNum[0].className="hover";
}else{
	aNum[i].className="hover";
}
}

//移入角标		
for(let k=0;k<aNum.length;k++){
	aNum[k].onmouseover=function(){
		i=k-1;
		i++;
	if(i==len){
		oList.style.left=0;
		i=1;
	}
	Move();
	startMove(oList,{"left":-1500*i})
	}
}

$(function(){
	$(".special").mouseover(function(){
		$(this).find(".list3").css("display","block");
		$(this).css("background","0");
		$(this).css("background-color","#fff");
		
	}).mouseleave(function(){
		$(this).find(".list3").css("display","none");
		$(this).css("background-color","#f9f9f9");
		$(this).css("margin-top","-0.5px");
	});
	$(".special2").mouseover(function(){
		$(this).find(".server-list").css("display","block");
		$(this).css("background","0");
		$(this).css("background-color","#fff");
		
	}).mouseleave(function(){
		$(this).find(".server-list").css("display","none");
		$(this).css("background-color","#f9f9f9");
		$(this).css("margin-top","-0.5px");
	});
	$(".special3").mouseover(function(){
		$(this).find(".navbox").css("display","block");
		$(this).css("background","0");
		$(this).css("background-color","#fff");
		
	}).mouseleave(function(){
		$(this).find(".navbox").css("display","none");
		$(this).css("background-color","#f9f9f9");
		$(this).css("margin-top","-0.5px");
	});
	$(".allpone").mouseover(function(){
//		$(this).find(".phonebox").css("display","block");
		$(this).find(".phonebox").fadeIn();
	}).mouseleave(function(){
//		$(this).find(".phonebox").css("display","none");
		$(this).find(".phonebox").fadeOut();
	});
	$(".computer").mouseover(function(){
//		$(this).find(".computerbox").css("display","block");
		$(this).find(".computerbox").fadeIn();
	}).mouseleave(function(){
//		$(this).find(".computerbox").css("display","none");
		$(this).find(".computerbox").fadeOut();
	});
	
	
	$(".pic li").eq(0).find(".img1").stop().animate({"left":"0"},1000);
	var count = 0;
	var timer = setInterval(function(){
		count++;
		if(count==$(".pic li").length){
			count = 0;
		}
		$(".pic li").eq(count).fadeIn().find(".img1").animate({"left":"0px"},1000)
		$(".pic li").eq(count).siblings().fadeOut().children().removeAttr("style");
		$(".nav2 li").eq(count).addClass("select").siblings().removeClass("select");
	},2000);
	for(var i=0;i<=6;i+=2){
		$("section").eq(2).find("div").eq(1).find("div").eq(i).mouseover(function(){
		console.log(this);
		$(this).find(".line").animate({"width":"300px"},500)
		}).mouseleave(function(){
		$(this).find(".line").animate({"width":"0px"},500)
		})
	}
	

	$(".mengceng").find("div").eq(0).mouseover(function(){
		$(this).find(".meng").css("background-color","#B40707").css("filter","alpha(opacity=70)").css("opacity","0.7")
	}).mouseleave(function(){
		$(this).find(".meng").css("background-color","#000").css("filter","alpha(opacity=80)").css("opacity","0.8")
	})
	
	$(".mengceng").find("div").eq(1).mouseover(function(){
		$(this).find(".meng").css("background-color","#B40707").css("filter","alpha(opacity=70)").css("opacity","0.7")
	}).mouseleave(function(){
		$(this).find(".meng").css("background-color","#cecece").css("filter","alpha(opacity=80)").css("opacity","0.8")
	})
	
	$(".mengceng").find("div").eq(2).mouseover(function(){
		$(this).find(".meng").css("background-color","#B40707").css("filter","alpha(opacity=70)").css("opacity","0.7")
	}).mouseleave(function(){
		$(this).find(".meng").css("background-color","#000").css("filter","alpha(opacity=50)").css("opacity","0.5")
		})
	
	$("section").eq(4).find(".line-2").mouseover(function(){
//		console.log(this);
		$(this).find(".line2").animate({"width":"400px"},500)
		}).mouseleave(function(){
		$(this).find(".line2").animate({"width":"0px"},500)
		})
		
	$("section").eq(4).find(".line-3").mouseover(function(){
//		console.log(this);
		$(this).find(".line3").animate({"width":"405px"},500)
		}).mouseleave(function(){
		$(this).find(".line3").animate({"width":"0px"},500)
		})
	
	$("section").eq(4).find(".line-4").mouseover(function(){
//		console.log(this);
		$(this).find(".line4").animate({"width":"405px"},500)
		}).mouseleave(function(){
		$(this).find(".line4").animate({"width":"0px"},500)
		})
		
	$("section").eq(5).find("dl").mouseover(function(){
//		console.log(this);
		$(this).find("dd").find("p").eq(2).animate({"width":"265px"},500)
		}).mouseleave(function(){
		$(this).find("dd").find("p").eq(2).animate({"width":"0px"},500)
		})
})	


$(function(){
	$(".showBtn1").click(function(){
		
		var Left = $(".slide").css("left");
		var num = parseInt(Left);
		
			$(".slide").stop().animate({"left":"0"},500)
		
	})
	$(".showBtn2").click(function(){
		
		var Left = $(".slide").css("left");
		var num = parseInt(Left);
		
			$(".slide").stop().animate({"left":"-1210px"},500)
		
	})
})
/*$(function(){
	
	var count1 = 0;
	
	$("section").find(".showBtn").eq(0).unbind("click").bind("click",function(){
		console.log(count1);
		count1--;
		$(this).parent().find(".slide").animate({"left":263*count1},500);	
	});
	
	$("section").find(".showBtn").eq(1).unbind("click").bind("click",function(){
		console.log(count1);
		count1++;
		$(this).parent().find(".slide").animate({"left":263*count1},500);
	})
})*/


$(function(){
	var flag = true;
	$(window).scroll(function(){
		//显示隐藏
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=300){
			$("#daohang").fadeIn();
		}else{
			$("#daohang").fadeOut();
		}
		if(flag){
			//让scrollTop和每一个区块比较
			
		$(".cebian").each(function(){
			
			if(scrollTop>= $(this).offset().top - $(this).outerHeight()/2){
				var index = $(this).index();
//				console.log(index);
				/*$("#daohang").find("li").eq(index-3).css({"background":"pink"}).siblings().css({"background":"#cecece"});*/
				$("#daohang").find("li").eq(index-3).css({"border-bottom":"1px solid #B40707","width":"120px"}).siblings().css({"border-bottom":"none","width":"100px"});
				}	
			})	
		}	
	});
	$("#daohang li").click(function(){
		flag = false;
		var index = $(this).index();
		var Height = $(".cebian").eq(index).offset().top;
		/*$(this).css({"background":"pink"}).siblings().css({"background":"#cecece"});*/
		$(this).css({"border-bottom":"1px solid #B40707","width":"120px"}).siblings().css({"border-bottom":"none","width":"100px"});
		
		$("body,html").stop().animate({"scrollTop":Height},500,function(){
			flag = true;
		});
	});
})

	
	

