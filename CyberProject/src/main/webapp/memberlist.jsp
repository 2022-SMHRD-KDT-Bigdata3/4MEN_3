<%@page import="com.smhrd.model.memberVO"%>
<%@page import="org.apache.ibatis.javassist.compiler.MemberCodeGen"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" href="css/login.css">
<title>Insert title here</title>
<style>
	.member-wrap{
		margin-bottom: 1000px;
		position: fixed;
		z-index: 1000;
	}

</style>



</head>
<body>

	<%
		ArrayList<memberVO> list = (ArrayList<memberVO>) request.getAttribute("memberlist");
	%>

	<div id="intro_bg">
		<!-- �Ӹ� �κ� -->
		<div id="header">
			<div id="platform">
				<img src="./imges/platform.png" alt="">
				<h3>
					<a href="main.jsp" class="login_btn">Cyber Crime Platform</a>
				</h3>
			</div>
		</div>
	</div>

	<div class="modal-bg"></div>

	<div class="member-wrap">
		<div class="list-wrap">
			<div class="member-html">
				<h2>ȸ�����</h2>
				<table border="1">
					<tbody>
						<tr>
							<td>��ȣ</td>
							<td>���̵�</td>
							<td>��й�ȣ</td>
							<td>����</td>					
						</tr>
					</tbody>
					<tbody>
						<%
							for(int i=0; i<list.size(); i++){
								out.print("<tr>");
								out.print("<td>"+(i+1)+"</td>");
								out.print("<td>"+list.get(i).getU_id()+"</td>");
								out.print("<td>"+list.get(i).getPw()+"</td>");
								out.print("<td><a href='memberremove.do?id="+list.get(i).getU_id()+"'>����</a></td>");
								out.print("</tr>");
							}
						%>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>