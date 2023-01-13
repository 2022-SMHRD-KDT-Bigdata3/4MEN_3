package com.smhrd.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.messageDAO;
import com.smhrd.pattern.ICommand;

public class Messageremove implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		int idx = Integer.parseInt(request.getParameter("idx"));
		

		messageDAO dao = new messageDAO();
		int res = dao.messageremove(idx);
		
		if(res > 0) {
			System.out.println("메세지 삭제 성공");
		} else {
			System.out.println("메세지 삭제 실패");
		}
		
		return null;
	}

}
