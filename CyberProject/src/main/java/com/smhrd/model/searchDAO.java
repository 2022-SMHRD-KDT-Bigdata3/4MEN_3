package com.smhrd.model;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.smhrd.db.SqlSessionManager;

public class searchDAO {

	private SqlSessionFactory sqlSessionFactory = SqlSessionManager.getSqlSession();
	private SqlSession session;
	
	public int searchInsert(searchVO vo) {
		
		session = sqlSessionFactory.openSession(true);
		
		int res = 0;
		
		res = session.insert("searchInsert",vo);
		
		session.close();
		
		return res;
	}

	public ArrayList<searchVO> searchList(String u_id) {
		// TODO Auto-generated method stub
		session = sqlSessionFactory.openSession(true);
		List<searchVO> list = session.selectList("searchList",u_id);
		session.close();
		return (ArrayList<searchVO>)list;
	}

	public int searchlistDelete(String u_id) {
		// TODO Auto-generated method stub
		session = sqlSessionFactory.openSession(true);
		int res = 0;
		res = session.delete("searchlistDelete",u_id);
		session.close();
		
		return res;
	}
}