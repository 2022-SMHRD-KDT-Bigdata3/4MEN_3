package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;
import com.smhrd.pattern.ICommand;

public class Idcheckservice implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
String id = request.getParameter("id");
		
		memberDAO dao = new memberDAO();
		memberVO check = dao.idcheck(id);
		
		PrintWriter out = response.getWriter();
		
		if(check != null) {
			System.out.println("중복된 회원이 존재함");
			out.print("{\"idcheck\":\"NO\"}");
		} else {
			System.out.println("중복된 회원이 존재하지 않음");
			out.print("{\"idcheck\":\"OK\"}");
		}
		return null;
	}

}
