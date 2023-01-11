package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;
import com.smhrd.pattern.ICommand;

public class Loginservice implements ICommand{

	public String execute(HttpServletRequest reqeust, HttpServletResponse response)
		throws ServletException, IOException {
		
		String id = reqeust.getParameter("id");
		String pw = reqeust.getParameter("pw");
		
		memberVO vo = new memberVO(id, pw);
		
		memberDAO dao = new memberDAO();
		memberVO info = dao.login(vo);
		
		if(info != null) {
			System.out.println("로그인 성공");
			System.out.println(info.toString());
			HttpSession session = reqeust.getSession();
			session.setAttribute("info", info);
		} else {
			System.out.println("로그인실패");
		}
		
		return "main.jsp";
		
	}

}
