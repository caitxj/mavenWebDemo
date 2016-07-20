package com.cai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import com.cai.domain.User;

/**
 * 
 * 测试  Ajax 相关支持的数据类型
 * dataType:text,xml,json,jsonp,html
 * 
 * 
 * 
 */
public class FirstServelt extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public FirstServelt() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		/**
		 * op choose
		 */
		
		String op=request.getParameter("op");
		PrintWriter pw=response.getWriter();
		if("jsonp".equalsIgnoreCase(op)){
			response.setContentType("application/json; charset=utf-8");
			String jsonpStr=request.getParameter("callback");
			String jsonStr = "{\"name\":\"fly\",\"type\":\"虫子\"}";
			System.out.println(jsonStr);
			pw.write(jsonpStr+"("+jsonStr+")");
		}else if("json".equalsIgnoreCase(op)){
			response.setContentType("application/json; charset=utf-8");
			User u=new User(11, "MJ", "michael", "123", "22");
			pw.write(JSONObject.toJSONString(u));
		}else if("xml".equalsIgnoreCase(op)){
			response.setContentType("text/xml;charset=utf-8");
			String xml="<users>"
					+ "<user id='1001'>"
					+ "<name>MJ</name>"
					+"<age>11</age>"
					+ "</user>"
					+ "</users>";
			pw.write(xml);
		}else if("text".equalsIgnoreCase(op)){
			pw.write("Michael Json");
		}else if("html".equalsIgnoreCase(op)){
			response.setContentType("text/html;charse=utf-8");
			String html="<ul>"
					+ "<li>1</li>"
					+ "<li>2</li>"
					+ "<li>3</li>"
					+ "</ul>";
			pw.write(html);
		}
		pw.flush();
		pw.close();
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
