package com.smhrd.model;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.db.SqlSessionManager;

public class messageDAO {
	
	private SqlSessionFactory sqlSessionFactory = SqlSessionManager.getSqlSession();
	private SqlSession session;

	public int insert(messageVO vo) {
		
		int res = 0;
		
		session = sqlSessionFactory.openSession(true);
		
		res = session.insert("insert", vo);
		
		session.close();
		
		return res;
	}

	public ArrayList<messageVO> messageselect() {
		
		session = sqlSessionFactory.openSession(true);
		
		List<messageVO> list = session.selectList("messageselect");
		
		session.close();
		
		return (ArrayList<messageVO>)list;
	}

}
