package com.smhrd.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;

public class Memberlistservice {

	public String execute(HttpServletRequest reqeust, HttpServletResponse response)
			throws ServletException, IOException {
		memberDAO dao = new memberDAO();
		ArrayList<memberVO> list = dao.memberlist();
		
		for(memberVO vo : list) {
			System.out.println(vo.toString());
		}
		
		reqeust.setAttribute("memberlist", list);
	
		return "memberlist.jsp";
	}
	
}
