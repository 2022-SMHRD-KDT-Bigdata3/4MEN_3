package com.smhrd.pattern;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.controller.Idcheckservice;
import com.smhrd.controller.Joinservice;
import com.smhrd.controller.Loginservice;
import com.smhrd.controller.Logoutservice;
import com.smhrd.controller.Memberlistservice;
import com.smhrd.controller.Memberremoveservice;
import com.smhrd.controller.Updateservice;

public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
System.out.println("프론트 실행");
		
		String reqUrl = request.getRequestURI();
		String path = request.getContextPath();
		String url = reqUrl.substring(path.length() + 1);
		System.out.println(url);

		request.setCharacterEncoding("UTF-8");
		
		
		// 회원가입
		if(url.equals("join.do")) {
			
			Joinservice joinservice = new Joinservice();
			String moveURL = joinservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
		
		// 로그인
		} else if(url.equals("login.do")) {
			
			Loginservice loginservice = new Loginservice();
			String moveURL = loginservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
			
		// 로그아웃
		} else if(url.equals("logout.do")) {
			
			Logoutservice logoutservice = new Logoutservice();
			String moveURL = logoutservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
		
		// 아이디 중복체크
		} else if(url.equals("idcheck.do")) {
			
			Idcheckservice idcheckservice = new Idcheckservice();
			String moveURL = idcheckservice.execute(request, response);

		// 회원목록 보기(admin)
		} else if(url.equals("memberlist.do")) {
		
			Memberlistservice memberlistservice = new Memberlistservice();
			String moveURL= memberlistservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
		
		// 회원정보 삭제(admin)
		} else if(url.equals("memberremove.do")) {
			
			Memberremoveservice memberremoveservice = new Memberremoveservice();
			String moveURL= memberremoveservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
		
		// 개인정보 수정
		} else if(url.equals("update.do")) {
			
			Updateservice updateservice = new Updateservice();
			String moveURL = updateservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
			
		}
		
	}
}
