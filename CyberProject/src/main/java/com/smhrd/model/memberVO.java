package com.smhrd.model;

public class memberVO {
	
	private String U_ID;
	private String PW;
	
	public memberVO(String id, String pw) {
		super();
		this.U_ID = id;
		this.PW = pw;
	}
	

	@Override
	public String toString() {
		return "memberVO [id=" + U_ID + ", pw=" + PW + "]";
	}

	public memberVO() {
		super();
	}

	public String getId() {
		return U_ID;
	}

	public void setId(String id) {
		this.U_ID = id;
	}

	public String getPw() {
		return PW;
	}

	public void setPw(String pw) {
		this.PW = pw;
	}	
	
}
