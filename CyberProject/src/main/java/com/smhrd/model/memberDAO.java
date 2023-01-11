package com.smhrd.model;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.db.SqlSessionManager;

public class memberDAO {
	
	private SqlSessionFactory sqlSessionFactory = SqlSessionManager.getSqlSession();
	private SqlSession session;
	
	// 회원가입
	public int join(memberVO vo) {
		
		SqlSession session = sqlSessionFactory.openSession(true);
		int res = 0;
		res = session.insert("join", vo);
		session.close();
		
		return res;
	}
	
	// 로그인
	public memberVO login(memberVO vo) {
		session = sqlSessionFactory.openSession(true);
		
		memberVO info = null;
		
		info = session.selectOne("login", vo);
		
		session.close();
		
		return info;
	}

	// 아이디 중복체크
	public memberVO idcheck(String id) {
		
		session = sqlSessionFactory.openSession(true);
		
		memberVO check = null;
		
		check = session.selectOne("idcheck", id);
		
		return check;
	}
	
	// 회원목록 보기(admin)
	public ArrayList<memberVO> memberlist() {
		
		session = sqlSessionFactory.openSession(true);
		
		List<memberVO> list = session.selectList("memberlist");
		
		session.close();
	
		return (ArrayList<memberVO>) list;
	}

	// 회원삭제(admin)
	public int memberremove(String id) {
		
		int res = 0;
		
		session = sqlSessionFactory.openSession(true);
		
		res = session.delete("memberremove", id);
		
		session.close();
		
		return res;
	}

	public int update(memberVO vo) {
		
		int res = 0;
		
		session = sqlSessionFactory.openSession(true);
		
		res = session.update("update", vo);
		
		session.close();
		
		return res;
	}

}
