package com.smhrd.model;

public class messageVO {

	private int idx;
	private String title;
	private String contents;
	private String day;
	
	public messageVO(String title, String contents) {
		super();
		this.title = title;
		this.contents = contents;
	}

	@Override
	public String toString() {
		return "messageVO [idx=" + idx + ", title=" + title + ", contents=" + contents + ", day=" + day + "]";
	}

	public messageVO(int idx, String title, String contents, String day) {
		super();
		this.idx = idx;
		this.title = title;
		this.contents = contents;
		this.day = day;
	}

	public messageVO() {
		super();
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}
	
	
	
}
