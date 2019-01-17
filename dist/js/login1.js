$(function(){
	$("#btn1").click(function(){
		
		var name = $("#tex1").val();
		var paw = $("#tex2").val();
		$.ajax({
			type:"post",
			url:"http://47.104.244.134:8080/userlogin.do",
			data:{
				'name':name,
				'password':paw,
			},
			async:true,
			success:function(data){
				console.log(data)	
					if(data.code==0){
					$.cookie("token",data.data.token);	
					location.href = "index.html";
				}
			}
		
		});
	})
	
})