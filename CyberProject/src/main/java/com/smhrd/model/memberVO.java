package com.smhrd.model;

public class memberVO {
	
	private String u_id;
	private String pw;
	
	@Override
	public String toString() {
		return "memberVO [u_id=" + u_id + ", pw=" + pw + "]";
	}

	public memberVO(String u_id, String pw) {
		this.u_id = u_id;
		this.pw = pw;
	}
	
	public memberVO() {
	}
	
	public String getU_id() {
		return u_id;
	}
	
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	
	public String getPw() {
		return pw;
	}
	
	public void setPw(String pw) {
		this.pw = pw;
	}
}
