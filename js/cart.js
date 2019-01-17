$(function(){
	//显示购物车数据
	$.ajax({
		type:"get",
		url:"http://47.104.244.134:8080/cartlist.do",
		data:{
			"token":1693
		},
		async:true,
		success:function(data){
			console.log(data)
//			console.log(data[0].goods.price);
			var str='';
			for(let i=0;i<data.length;i++){
//				var data = data[i].goods;
				str += `
				<div>
					<div>
						<input type="checkbox">
						<img src="${data[i].goods.picurl}">
						<p>${data[i].goods.name}</p>
						<p>${data[i].goods.price}</p>
					</div>
					<div class="jiajian">
						<input type="text" id="number22" value="${data[i].count}" readonly unselectable='on'/>
						<button id="jia" data-id='${data[i].id}' gid='${data[i].gid}'>+</button>
						<button id="jian" data-id='${data[i].id}' gid='${data[i].gid}'>-</button>	
					</div>
				</div>
				`	
			}
			$(".prolist").html(str);
			
			
			
			//修改购物车数据
			//点击增加
			$(".jiajian").on("click","#jia",function(){
				var id = $(this).attr("data-id");
				var gid = $(this).attr("gid");
//				console.log(id,gid)
				$.ajax({
					type:"get",
					url:"http://47.104.244.134:8080/cartupdate.do",
					data:{
						"id":id,
						"gid":gid,
						"num":1,
						"token":1693
					},
					async:true,
					success:function(data){
						console.log(data);
					}
				});
				var count = $(this).prev('input').val();
				count++;
				$(this).prev('input').val(count);
			});
			//点击减少
			$(".jiajian").on("click","#jian",function(){
				var id = $(this).attr("data-id");
				var gid = $(this).attr("gid");
//				console.log(id,gid)
				$.ajax({
					type:"get",
					url:"http://47.104.244.134:8080/cartupdate.do",
					data:{
						"id":id,
						"gid":gid,
						"num":-1,
						"token":1693
					},
					async:true,
					success:function(data){
						console.log(data);
					}
				});
				var count = $(this).prevAll().eq(1).val();
				count--;
				
				if(count<=0){
					$.ajax({
						type:"get",
						url:"http://47.104.244.134:8080/cartupdate.do",
						data:{
							"id":id,
							"gid":gid,
							"num":-1,
							"token":1693
						},
						async:true,
						success:function(data){
							console.log(data);
						}
					});
					$(this).parent().parent().remove()
					
				}
				$(this).prevAll().eq(1).val(count);
			});
		}	
	});
	
	
	
	
})
