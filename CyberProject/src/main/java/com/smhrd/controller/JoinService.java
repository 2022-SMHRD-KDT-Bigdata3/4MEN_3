package com.smhrd.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;


public class JoinService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		
		memberVO vo = new memberVO(id, pw);
		System.out.println(vo.toString());
		
		memberDAO dao = new memberDAO();
		int res = dao.join(vo);
		
		if(res > 0) {
			System.out.println("회원가입 성공");
			response.sendRedirect("main.jsp");
		}else {
			System.out.println("회원가입 실패");
		}
		
	}

}
