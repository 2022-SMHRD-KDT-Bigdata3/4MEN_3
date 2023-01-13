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
import com.smhrd.controller.Messageinsert;
import com.smhrd.controller.Messageremove;
import com.smhrd.controller.Messageselect;
import com.smhrd.controller.Searchinsertservice;
import com.smhrd.controller.Searchlistdelete;
import com.smhrd.controller.Searchlistservice;
import com.smhrd.controller.Updateservice;
import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;
import com.smhrd.model.messageDAO;

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

		// 회원목록 보기(어드민)
		} else if(url.equals("memberlist.do")) {
		
			Memberlistservice memberlistservice = new Memberlistservice();
			String moveURL= memberlistservice.execute(request, response);
		
		// 회원정보 삭제(어드민)
		} else if(url.equals("memberremove.do")) {
			
			Memberremoveservice memberremoveservice = new Memberremoveservice();
			String moveURL= memberremoveservice.execute(request, response);
		
		// 개인정보 수정
		} else if(url.equals("update.do")) {
			
			Updateservice updateservice = new Updateservice();
			String moveURL = updateservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
			
		// 건의하기(유저)
		} else if(url.equals("messageinsert.do")) {
			
			Messageinsert messageinsert = new Messageinsert();
			String moveURL = messageinsert.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
		
		// 건의함 메세지 보기(어드민)
		} else if(url.equals("messageselect.do")) {
			
			Messageselect messageselect = new Messageselect();
			String moveURL = messageselect.execute(request, response);		
		
		// 건의함 메세지 삭제(어드민)
		} else if(url.equals("messageremove.do")) {
			
			Messageremove messageremove = new Messageremove();
			String moveURL = messageremove.execute(request, response);	
		
		} else if(url.equals("searchinsertservice.do")) {
			
			Searchinsertservice searchinsertservice = new Searchinsertservice();	
			String moveURL = searchinsertservice.execute(request, response);
			RequestDispatcher re = request.getRequestDispatcher(moveURL);
			re.forward(request, response);
			
		} else if(url.equals("searchlistservice.do")) {
			
			Searchlistservice searchlistservice = new Searchlistservice();
			String moveURL = searchlistservice.execute(request, response);	
			
		} else if(url.equals("searchlistdelete.do")) {
			
			Searchlistdelete searchlistdelete = new Searchlistdelete();
			String moveURL = searchlistdelete.execute(request, response);
			
		}
	
	}
}
