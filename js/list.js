$(function(){
	$("dl").mouseover(function(){
		$(this).css("border","1px solid #A51B1B")
	}).mouseleave(function(){
		$(this).css("border","1px solid #cecece")
	})
	
	//显示列表
	$.ajax({
		type:"get",
		url:"http://47.104.244.134:8080/goodsbytid.do",
		data:{
			tid:13,
			page:1,
			limit:10
		},
		async:true,
		success:function(data){
			console.log(data.data)
			var data = data.data;
			var str='';
			
			for(let i=1;i<data.length;i++){
				
				str+=`<dl><dt><img src=${data[i].picurl}></dt>
				<dd><span>${data[i].name}</span><span>${data[i].price}</span></dd>
				<dd class="anniu">
					<a class="add" gid='${data[i].id}' href="cart.html">选购</a>
					<a href="product.html?id=${data[i].id}">详情</a>
				</dd>
				</dl>`
			}
			//console.log($(".showlist").html(str));
			$(".showlist").html(str);
		}	
	});
	
	//加入购物车
	$(".showlist").on("click",".add",function(){
//		console.log(this)
		var gid = $(this).attr("gid");
//		console.log(gid)
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
			}
		});
	})
	
	
})

