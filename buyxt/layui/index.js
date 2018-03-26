"use strict";
layui.use(["element","jquery","layer","form"],function(){
	var $ = layui.jquery;
	var element = layui.element;
	var layer = layui.layer;
	var form = layui.form;
	$(".splb").eq(0).show().siblings().hide();
	$(".list li").click(function(){
		var index = $(this).index();
		$(".splb").eq(index).show().siblings().hide();
	});
	$("img").hover(function(){
		$(this).css("border","1px solid red");
		layer.msg("欢迎购买",{icon:6,time:1000});
	},function(){
		$(this).css("border","1px solid blue");
	});
	$("img").on("click",function(){
		var title = $(this).attr("title");
		var src = $(this).attr("src");
		localStorage.setItem("title",title);
		localStorage.setItem("src",src);
		location.href = "gwc.html";
	});
	// input的value
	$(".buy_form button").eq(1).on("click",function(){
		var input_value = $(".input_num").val();//获取输入框的值
		input_value++;
		$(".input_num").val(input_value);
		if(input_value>1 && input_value<50)
		{	
			var price = 1000*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>=50 && input_value<100)
		{
			var price = 800*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>=100 && input_value<500)
		{
			var price = 600*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else
		{
			var price = 500*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
	});
	$(".buy_form button").eq(0).on("click",function(){
		var input_value = $(".input_num").val();
		if(input_value>=2 && input_value<=50)
		{	
			input_value--;
			$(".input_num").val(input_value);
			var price = 1000*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>50 && input_value<=100)
		{
			input_value--;
			$(".input_num").val(input_value);
			var price = 800*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>100 && input_value<=500)
		{
			input_value--;
			$(".input_num").val(input_value);
			var price = 600*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>500)
		{	
			input_value--;
			$(".input_num").val(input_value);
			var price = 500*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else
		{
			layer.msg("请选择购买的数量",{icon:5,time:1000});
		}

	});
	// 实时同步input
	$(".input_num").on("input",function(){
		var input_value = $(this).val();
		if(input_value>1 && input_value<50)
		{	
			var price = 1000*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>=50 && input_value<100)
		{
			var price = 800*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else if(input_value>=100 && input_value<500)
		{
			var price = 600*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}
		else
		{
			var price = 500*input_value;
			$(".price").text(`您选择了${input_value}件,应该付款${price}元`).css("color","red");
		}

	});
	var title_con = localStorage.getItem("title");
	var src_con = localStorage.getItem("src");
	$(".title").text(`非常潮流的${title_con}`);
	$(".src").attr("src",src_con);
	$(".btn button").eq(0).click(function(){
		var num = $(this).text();
		$(".input_num").val(num);
		var price = num*1000;
		$(".price").text(`您选择了${num}件,应该付款${price}元`).css("color","red");
	});
	$(".btn button").eq(1).click(function(){
		var num = $(this).text();
		$(".input_num").val(num);
		var price = num*900;
		$(".price").text(`您选择了${num}件,应该付款${price}元`).css("color","red");
	});
	$(".btn button").eq(2).click(function(){
		var num = $(this).text();
		$(".input_num").val(num);
		var price = num*800;
		$(".price").text(`您选择了${num}件,应该付款${price}元`).css("color","red");
	});
	$(".btn button").eq(3).click(function(){
		var num = $(this).text();
		$(".input_num").val(num);
		var price = num*500;
		$(".price").text(`您选择了${num}件,应该付款${price}元`).css("color","red");
	});
	$(".buy").click(function(){
		var val = $(".input_value").val(); 
		if(val==0)
		{
			layer.msg("不能购买零件",{icon:5,time:1000});
		}
		else
		{
			layer.msg("购买成功",{icon:1,time:1000});
			location.href="index.html";
			
		}
	});
	/*
	*
	* form
	 */
	form.verify({
			pass:[/^[\u4E00-\u9FA5]{2,4}$/,"还有这种名字?"],
			username:[/^[\S]{4,12}$/,"4到12字符"],
			textarea:[/^[\S]{2}/,"来两个字呗！"]
		});
	// form.on("submit(login)",function(data){
	// 	$.post("index.php",data.field,function(data,status)
	// 	{
	// 		if(data==="false")
	// 		{
	// 			layer.msg("账号密码错误!!!",{icon:5})
	// 		}
	// 		else
	// 		{
	// 			location.href="admin.html";
	// 		}
	// 	});
	// });
});
