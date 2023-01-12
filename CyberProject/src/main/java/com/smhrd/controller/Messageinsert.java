package com.smhrd.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.messageDAO;
import com.smhrd.model.messageVO;
import com.smhrd.pattern.ICommand;

public class Messageinsert implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String title = request.getParameter("title");
		String contents = request.getParameter("contents");
		
		messageVO vo = new messageVO(title, contents);
		
		System.out.println(vo.toString());
		
		messageDAO dao = new messageDAO();
		
		int res = dao.insert(vo);
		
		if(res > 0) {
			System.out.println("메세지 전송 성공");
			request.setAttribute("insert", "OK");
		} else {
			System.out.println("메세지 전송 실패..");
		}

		return "main.jsp";
	}

}
