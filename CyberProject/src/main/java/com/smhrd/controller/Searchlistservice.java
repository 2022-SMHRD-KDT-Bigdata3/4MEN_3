package com.smhrd.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.smhrd.model.memberVO;
import com.smhrd.model.searchDAO;
import com.smhrd.model.searchVO;
import com.smhrd.pattern.ICommand;

public class Searchlistservice implements ICommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpSession session=request.getSession();
		memberVO vo=(memberVO)session.getAttribute("info");
		
		searchDAO dao = new searchDAO();
		ArrayList<searchVO> list = dao.searchList(vo.getU_id());	
		
		Gson g=new Gson();
		String json=g.toJson(list);
		response.setContentType("text/json;charset=UTF-8");
		PrintWriter out=response.getWriter();
		out.print(json);		
	
		return null;
	}

}
