package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.smhrd.model.messageDAO;
import com.smhrd.model.messageVO;
import com.smhrd.pattern.ICommand;

public class Messageselect implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		
		System.out.println("메세지 보기 기능");
		
		messageDAO dao = new messageDAO();
		ArrayList<messageVO> list = dao.messageselect();
		
		for(messageVO vo : list) {
			System.out.println(vo.toString());
		}
		
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
		String result = gson.toJson(list);
		System.out.println(result);
		out.print(result);
		
		return null;
	}

}
