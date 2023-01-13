package com.smhrd.controller;

import java.io.IOException;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.smhrd.model.memberVO;
import com.smhrd.model.searchDAO;
import com.smhrd.model.searchVO;

import com.smhrd.pattern.ICommand;

public class Searchlistdelete implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		memberVO info = (memberVO)session.getAttribute("info");
		String u_id = info.getU_id();
		
		searchDAO dao = new searchDAO();
		
		int res = dao.searchlistDelete(u_id);
		
		if(res>0) {
			System.out.println("검색 목록 지우기 완료");
		}
		
		return null;
	}

}
