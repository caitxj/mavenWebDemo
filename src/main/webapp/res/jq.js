/**
 * jQ 相关代码
 */
var ajaxObj = {
	ajaxTest : function(data) {
		$.ajax(data);
	},
	postTest : function(url, data) {
		$.post(url, data, function(data) {
			alert(data);
		});
	},
	getTest : function(url, data) {
		$.get(url, data, function(data) {
			alert(data);
		});
	},
	getScriptTest : function() {
		/***********************************************************************
		 * 支持跨越加载js 然后直接使用加载中的js进行相关操作
		 * 
		 * 原理： 类似script src 加载 js文件,然后就可以直接使用 加载js中的方法、属性进行操作
		 */
		// var
		// url="http://localhost:63342/jQueryDemo/chapter/chapter06/test.js";
		var url2 = "res/test.js";
		$.getScript(url2, function(data) {

			// 直接执行载入的js方法属性相关
			// myTest();
			// 加载的js文件的属性使用
			alert(test_Data);

		});
	},
	getJsonTest : function(url) {
		//
		var jsonUrl = url;
		// 注意JSON 文件的格式一定要定义正确,否则无法正常进行获取操作
		$.getJSON(jsonUrl, function(data) {
			alert(data.name + ":" + data.id);
		});
	},
	globalTest : function() {

		/**
		 * ajaxSend ajaxStart ajaxStop ajaxComplete ajaxSuccess ajaxError
		 * 
		 * 
		 * 
		 * ajaxStart-->ajaxSend-->ajaxComplete-->ajaxSuccess->ajaxError--->--->ajaxStop
		 * 
		 * 
		 * 
		 */
		// Register a handler to be called when the first Ajax request
		// begins[监听第一个ajax 的触发]
		$(document).ajaxStart(function() {
			$(".ajaxStart").append($("<li>ajax 开始执行.......</li>"));
		});
		// attach a function to be executed before an Ajax request is sent.
		$(document).ajaxSend(
				function(event, jqxhr, settings) {
					$(".ajaxSend").append(
							$("<li>"+settings.url
									+ "</li>"));
				});
		// Register a handler to be called when Ajax requests complete[注册所有ajax
		// 请求完毕后的触发事件]
		$(document).ajaxComplete(
				function(event, jqxhr, settings) {
					$(".ajaxComplete").append(
							$("<li>" + event.type + ":" + jqxhr.responseText
									+ "</li>"));
				});
		// Attach a function to be executed whenever an Ajax request completes
		// successfully.[ajax 请求完成并成功返回]
		$(document).ajaxSuccess(
				function(event, jqxhr, settings) {
					$(".ajaxSuccess").append(
							$("<li>" + event.type + ":" + jqxhr.responseText
									+ "</li>"));
				});
		//Register a handler to be called when Ajax requests complete with an error[当ajax 请求错误时，进行触发]
		$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
				$(".ajaxError").text("Triggered ajaxError handler.");
		});
		
		//Register a handler to be called when all Ajax requests have completed.[所有ajax完成后触发，不管是否能正常的与服务器交换]
		$(document).ajaxStop(function(event, jqxhr, settings, thrownError) {
			$(".ajaxStop").text("all ajax  stopped.......");
	});
		
	}

}
//TODO:如果将ajax 全局方法放置到ready中,记住:不能放在放在ajax 方法的触发  之后,否则start,send 无法触发
$(function() {
	// ajaxObj.getScriptTest();
	// ajaxObj.getTest("FirstServelt", {
	// op : "json"
	// });
	// ajaxObj.getJsonTest("res/mjson.json");
	// ajaxObj.postTest("FirstServelt", {op:"json"})
	ajaxObj.globalTest();
	ajaxObj.postTest("FirstServelt", {
		op : "text"
	})
	ajaxObj.postTest("FirstServelt", {
		op : "html"
	})
	ajaxObj.postTest("FirstServelt1", {
		op : "html"
	})
	// ajaxObj.ajaxTest({url:"FirstServelt",type:"get",data:{"op":"json"},dataType:"json",success:function(data){alert(data)}})

	// jQ ajax 提供的全局方法使用
	// $(document).ajaxSend(function( event, request, settings ) {
	// alert('test...');
	// $( "#msg" ).append( "<li>Starting request at " + settings.url + "</li>"
	// );
	// });
});