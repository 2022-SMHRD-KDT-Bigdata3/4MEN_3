package com.smhrd.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;
import com.smhrd.pattern.ICommand;

public class Updateservice implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String pw = request.getParameter("pw");
		String pw_c = request.getParameter("pw_c");
		
		HttpSession session = request.getSession();
		memberVO info = (memberVO) session.getAttribute("info");
		String id = info.getU_id();
		
		memberVO vo = new memberVO(id, pw);
		
		memberDAO dao = new memberDAO();
		
		
		String murl="";
		
		if(pw.equals(pw_c)) {
			int res = dao.update(vo);
			session.setAttribute("info", vo);
			request.setAttribute("update", "OK");
			murl = "main.jsp";
		} else {
			request.setAttribute("update", "NO");
			murl = "main.jsp#modal03";
		}
		
		return murl;
	}

}
