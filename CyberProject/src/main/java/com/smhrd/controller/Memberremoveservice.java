package com.smhrd.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.memberDAO;
import com.smhrd.pattern.ICommand;

public class Memberremoveservice implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String id = request.getParameter("id");
		
		System.out.println("삭제할 메일 : " + id);
		
		memberDAO dao = new memberDAO();
		int res = dao.memberremove(id);
		
		if(res > 0) {
			System.out.println("회원삭제 완료");
		} else {
			System.out.println("회원삭제 실패");
		}
		
		return "memberlist.do";
	}

}
