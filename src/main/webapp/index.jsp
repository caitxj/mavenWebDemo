<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html>
<head>
<style>
div{
border:1px solid gray;
}
</style>
</head>
<body>
<h2>Hello World!</h2>
<div id="userInfo">
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
</div>
<hr />
<div id="xml">
</div>
<!-- 
global  show
 -->
<div class="ajaxSend"></div>
<div class="ajaxStart"></div>
<div class="ajaxComplete"></div>
<div class="ajaxSuccess"></div>
<div class="ajaxError"></div>
<div class="ajaxStop"></div>

<script src="res/jquery-1.12.2.js"></script>
<script src="res/jq.js"></script>
<script>
	$(function(){
		
// 		//

// 		$(document).ajaxStart(function() {
// 			$(".ajaxStart").append($("<li>ajax 开始执行.......</li>"));
// 		});
// 		$(document).ajaxSend(
// 				function(event, jqxhr, settings) {
// 					$(".ajaxSend").append(
// 							$("<li>" + event.type + ":" + jqxhr.responseText
// 									+ "</li>"));
// 				});
// 		$.get("FirstServelt",{op:"json"},function(data){
// 			//var data=JSON.parse(data);//String 字符串转json格式
// 			$("#userInfo").find("li").each(function(){
// 				$(this).text(data.id);
// 			});
// 		});
		
		
		
// // 		//测试为xml  格式的数据
// // 		$.get("FirstServelt",{op:"xml"},function(data){
// // 			var xmlData=data;
// // 			$(xmlData).find("user").each(function(index,item){
// // 				alert($(item).attr("id")+"|name:"+$(item).find("name").text())
// // 			});
// // 		},"xml");


	
// 		$(document).ajaxStart(function(){
// 			$(".ajaxStart").append($("<li>ajax 开始执行.......</li>"));
// 		});
		
	});
	
// 	$(document).ajaxStart(function() {
// 		$(".ajaxStart").append($("<li>ajax 开始执行.......</li>"));
// 	});
// 	$(document).ajaxSend(
// 			function(event, jqxhr, settings) {
// 				$(".ajaxSend").append(
// 						$("<li>" + event.type + ":" + jqxhr.responseText
// 								+ "</li>"));
// 			});

</script>
</body>
</html>
