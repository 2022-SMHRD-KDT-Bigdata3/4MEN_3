package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;
import com.smhrd.pattern.ICommand;

public class Joinservice implements ICommand{

	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		String pw1 = request.getParameter("pw1");

		memberVO vo = new memberVO(id, pw);
		System.out.println(vo.toString());

		memberDAO dao = new memberDAO();
		

		if (pw.equals(pw1)) {
			System.out.println("회원가입 성공");
			int res = dao.join(vo);
			request.setAttribute("join", "OK");

		} else {
			System.out.println("회원가입 실패");
			request.setAttribute("join", "NO");
		}
		return "main.jsp";
	}

}
