$(function(){
	function $(id){
		return document.getElementById(id);
	}
	var oZoomArea = $("zoomArea");
	var oMidArea = $("midArea");
	var oMidImg = oMidArea.children[0];
	var oZoom = $("zoom");
	var oBigArea = $("bigArea");
	var oBigImg = oBigArea.children[0];
	var oSmallArea = $("smallArea");
	var aSmallImg = oSmallArea.children;
	
	//显示隐藏
	
	oMidArea.onmouseenter = function(){
		oZoom.style.display = "block";
		oBigArea.style.display = "block";
	}
	
	oMidArea.onmouseleave = function(){
		oZoom.style.display = "none";
		oBigArea.style.display = "none";
	}
	
	//控制放大镜的位置
	
	oMidArea.onmousemove = function(e){
		var evt = e || event;
		var _left = evt.pageX - oZoomArea.offsetLeft - oZoom.offsetWidth/2;
		var _top = evt.pageY - oZoomArea.offsetTop - oZoom.offsetHeight/2;
		 
		
		if(_left <= 0){
			_left = 0;
		}
		if(_left>= oMidArea.offsetWidth - oZoom.offsetWidth){
			_left = oMidArea.offsetWidth - oZoom.offsetWidth;
		}
		if(_top <= 0){
			_top = 0;
		}
		if(_top>= oMidArea.offsetHeight - oZoom.offsetHeight){
			_top = oMidArea.offsetHeight - oZoom.offsetHeight;
		}
		
		oZoom.style.left = _left + "px";
		oZoom.style.top = _top + "px";
		
		//控制大图位置
		
		oBigImg.style.left = - _left/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
		oBigImg.style.top = - _top/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
		
	}
	
	
	for(var i = 0; i < aSmallImg.length; i++){
		aSmallImg[i].onclick = function(){
			oMidImg.src = this.src;
			oBigImg.src = this.src;
		}
	}
})
$(function(){
	$("#jia").click(function(){
		var val1 = $("#number").val();
		val1++;
		$("#number").val(val1)
	})
	$("#jian").click(function(){
		var val2 = $("#number").val();
		val2--;
		if(val2<0){
			val2=0;
		}
		$("#number").val(val2);
	})
	/*$("#cart1").click(function(){
		location.href = "cart.html"
	})*/
})
//显示列表页选中的id数据
$(function(){
	var id=location.search.split("=")[1];
	$.ajax({
		type:"get",
		url:"http://47.104.244.134:8080/goodsbyid.do",
		data:{
			id:id,
		},
		async:true,
		success:function(data){
			console.log(data)
			var str1 = `<img src=${data.picurl}>`;
			var str2 = `<a  id="cart1" data-id=${data.id}>加入购物车</a>
			<a  id="cart2">立即下单</a>`
			$(".Button").html(str2)
			$("#midArea").html(str1);
			$("#bigArea").html(str1);
			$(".pro-message").html(data.name)
		}
	});
})
//加入购物车
$(function(){
	$(".button").on("click","#cart1",function(){
//		console.log("aa")
		var gid = $("#cart1").attr("data-id");
		console.log(gid);
		$.ajax({
			type:"get",
			url:"http://47.104.244.134:8080/cartsave.do",
			data:{
				"gid":gid,
				"token":1693
			},
			async:true,
			success:function(data){
				console.log(data)
				location.href = "cart.html"
			}
		});
	})
})
