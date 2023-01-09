package com.smhrd.db;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlSessionManager {
   // DB와의 연결, SQL 실행에 대한 모든 역할을 수행해주는 mybatis의 가장 중요한 객체
   // 전역변수
   public static SqlSessionFactory sqlSessionFactory;

   // 클래스초기화 블록 : 클래스가 처음 로딩 될 때 딱 한번 수행
   static {
      // 읽어올 파일 경로 지정(DB관련 설정정보 작성)
      String resource = "com/smhrd/db/config.xml";

      Reader reader;
      try {
         // DB정보 읽어오기
         reader = Resources.getResourceAsReader(resource);
         // 읽어온 정보를 활용하여 SessionFactory 만들기(커넥션을 시도함!)
         sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }

   // 초기화 블록에서 생성된 sessionFactory를 반환
   public static SqlSessionFactory getSqlSession() {
      return sqlSessionFactory;
   }
}