<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form>
    <select name="single">
        <option>Single</option>
        <option>Single2</option>
    </select>

    <br>
    <select name="multiple" multiple="multiple">
        <option selected="selected">Multiple</option>
        <option>Multiple2</option>
        <option selected="selected">Multiple3</option>
    </select>

    <br>
    <input type="checkbox" name="check" value="check1" id="ch1">
    <label for="ch1">check1</label>
    <input type="checkbox" name="check" value="check2" checked="checked" id="ch2">
    <label for="ch2">check2</label>

    <br>
    <input type="radio" name="radio" value="radio1" checked="checked" id="r1">
    <label for="r1">radio1</label>
    <input type="radio" name="radio" value="radio2" id="r2">
    <label for="r2">radio2</label>
</form>

<script src="res/jquery-1.12.2.js"></script>
<script>
$(function(){
	
	
	//serialize 测试
// 	var data=$("form").serializeArray();
	var data=$("form").serialize();
	$.post("SerializeServlet",{formData:data});
	
	
	
	
});
</script>
</body>
</html>