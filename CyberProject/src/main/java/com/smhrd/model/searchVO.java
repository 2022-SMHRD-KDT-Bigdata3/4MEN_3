package com.smhrd.model;

public class searchVO {
	private int idx;
	private String phone;
	private String day;
	private String u_id;
	private String info;
	
	public searchVO(int idx, String phone, String day, String u_id, String info) {
		super();
		this.idx = idx;
		this.phone = phone;
		this.day = day;
		this.u_id = u_id;
		this.info = info;
	}

	public searchVO(String phone, String u_id, String info) {
		super();
		this.phone = phone;
		this.u_id = u_id;
		this.info = info;
	}

	public searchVO() {
		super();
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getU_id() {
		return u_id;
	}

	public void setU_id(String u_id) {
		this.u_id = u_id;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	@Override
	public String toString() {
		return "searchVO [idx=" + idx + ", phone=" + phone + ", day=" + day + ", u_id=" + u_id + ", info=" + info + "]";
	}
}
