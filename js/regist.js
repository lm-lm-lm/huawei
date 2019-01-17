$(function(){
	//用户名验证
	$(".tex1").blur(function(){
		var val = $(this).val();
		$.get("http://47.104.244.134:8080/username.do",{username:val},function(data){
			if(data.code==0){
				alert("用户名已被占用");
			}
		})
		
	})
//邮箱验证
$(".emal").blur(function(){
		var val = $(this).val();
		$.get("http://47.104.244.134:8080/useremail.do",{email:val},function(data){
			if(data.code==0){
				alert("邮箱已被占用");
			}
		})
		
	})
	
	
	
	//点击注册
	$(".regist").click(function(){
		var name = $(".tex1").val();
		var paw = $(".tex2").val();
		var sexy = $(".sex").val();
		var email = $(".emal").val();
		$.ajax({
			type:"post",
			url:"http://47.104.244.134:8080/usersave.do",
			data:{
				username:name,
				password:paw,
				email:email,
				sex:sexy,	
			},
			async:true,
			success:function(data){
				//console.log(data)	
				if(data.code==0){
					location.href = "login1.html";
				}
			}
		
		});
	})
	
})