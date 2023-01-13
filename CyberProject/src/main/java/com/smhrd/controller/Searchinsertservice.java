package com.smhrd.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.smhrd.model.memberVO;
import com.smhrd.model.searchDAO;
import com.smhrd.model.searchVO;

import oracle.net.ns.SessionAtts;

import com.smhrd.pattern.ICommand;

public class Searchinsertservice implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		memberVO loginfo = (memberVO)session.getAttribute("info");
		
		String u_id = loginfo.getU_id();
		String info = request.getParameter("info");
		String phone = request.getParameter("phone");
		
		searchVO vo = new searchVO(phone, u_id, info);
		System.out.println(vo.toString());
		
		searchDAO dao = new searchDAO();
		int res = dao.searchInsert(vo);
		
		if(res>0) {
			System.out.println("DB 전송 완료");
		}else {
			System.out.println("DB 전송 실패");
		}
		
		return "main.jsp";
	}

}
