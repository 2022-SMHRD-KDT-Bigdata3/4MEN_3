package com.smhrd.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.smhrd.pattern.ICommand;

public class Logoutservice implements ICommand{

	public String execute(HttpServletRequest reqeust, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpSession session = reqeust.getSession();
		
		session.removeAttribute("info");
		
		return "main.jsp";
	}
	
}
