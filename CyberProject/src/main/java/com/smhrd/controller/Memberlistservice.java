package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.model.memberDAO;
import com.smhrd.model.memberVO;

public class Memberlistservice {

	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		memberDAO dao = new memberDAO();
		ArrayList<memberVO> list = dao.memberlist();
		
		for(memberVO vo : list) {
			System.out.println(vo.toString());
		}
				
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		String result = gson.toJson(list);
		System.out.println(result);
		response.setContentType("text/json;charset=UTF-8");
		out.print(result);
		
		return null;
	}
	
}
