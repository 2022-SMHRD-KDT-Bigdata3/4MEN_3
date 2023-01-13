<%@page import="org.apache.ibatis.reflection.SystemMetaObject"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.smhrd.model.memberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="shortcut icon" type="image/x-icon" href="./imges/platform.png">

<!-- 폰트 링크 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">

<!-- style css -->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!-- swiper css -->
<link rel="stylesheet" href="css/swiper-bundle.min.css">

<link rel="stylesheet" href="css/login.css">

<!-- jq -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- 구글 api -->
<script type="text/javascript" src="https://www.gstatic.cn/charts/loader.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>

<!-- 알림창쓰기위한 js -->
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>

<body>
	<%
	// memberVO에 담겨있는 아이디 비번 불러오기
	memberVO info = (memberVO) session.getAttribute("info");
	
	// 팝업 재생할 데이터 전달 받기
	String join = (String)request.getAttribute("join");
	
	String login = (String)request.getAttribute("login");

	String update = (String)request.getAttribute("update");
	
	String insert = (String)request.getAttribute("insert");
	%>

	<!-- 전체코드 -->
	<div id="wrap">
		<!-- 메인페이지 START -->
		<div id="intro_bg">
			<div id="header">
				<!-- 플랫폼 -->
				<div id="platform">
					<img src="./imges/platform.png" alt="">
					<h3>
						<a href="main.jsp" class="login_btn">Cyber Crime Platform</a>
					</h3>
				</div>
				<!-- 로그인, 로그아웃, 개인정보수정, 회원목록/건의함, 건의하기, Who`s Number -->
				<ul id="nav">
					<li>
						<%
						if (info != null) {
							if (info.getU_id().equals("admin") && info.getPw().equals("4men")) {
								out.print("<button href='#modal05' id='a' class='btn-open'>회원목록/건의함</button>");
							} else {
								out.print("<button href='#modal04' id='a'class='btn-open'>건의하기</button>");
								out.print("<button href='#modal02' id='a' class='btn-open'>Who`s Number</button>");
							}

							out.print("<button href='#modal03' id='a' class='btn-open'>개인정보수정</button>");
							out.print("<a href='logout.do' id='a'>로그아웃</a>");

						} else {
							out.print("<button href='#modal01' class= 'btn-open'>로그인</button>");
						}
						%>
					</li>
				</ul>
			</div>
			<!-- 중간 타이틀 -->
			<div id="intro_text">
				<h1>대한민국</h1>
			</div>
			<!-- 총합 데이터 START -->
			<ul id="list_data">
				<li>
					<div>
						<p id="list_text1">2021</p>
						<p id="list_text2">사이버범죄 발생건수</p>
						<p id="list_text3" class="data1"></p>
					</div>
				</li>
				<li>
					<div>
						<p id="list_text1">2022</p>
						<p id="list_text2">보이스피싱 발생건수</p>
						<p id="list_text3" class="data2"></p>
					</div>
				</li>
				<li>
					<div>
						<p id="list_text1">2020</p>
						<p id="list_text2">인터넷 직거래 사기 총 피해액</p>
						<p id="list_text3" class="data3"></p>
					</div>
				</li>
			</ul>
			<!-- 총합 데이터 END -->

			<!-- 아이콘 버튼 START -->
			<ul id="icon_tag">
				<li>
					<div>
						<a href="#main_pg1" class="main"> 
							<img id="img_t" src="./imges/news.png">
							<p id="list_text1">뉴스정보</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg2" class="main"> 
							<img id="img_t" src="./imges/location.png">
							<p id="list_text1">사이버범죄 현황</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg3" class="main">
							<img id="img_t" src="./imges/data.png">
							<p id="list_text1">사이버범죄 분류</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg4" class="main"> 
							<img id="img_t" src="./imges/voice.png">
							<p id="list_text1">전화금융사기 현황</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg5" class="main">
							<img id="img_t" src="./imges/cyber.png">
							<p id="list_text1">보이스피싱 유형</p>
						</a>
					</div>
				</li>
			</ul>
			<!-- 아이콘 버튼 END -->
		</div>
		<!-- 메인페이지 END -->


		<!-- 뉴스 데이터 페이지 START -->
		<div id="main_pg1" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>뉴스</h2>
					<h3>국내에서 일어난 사이버 범죄 관련 뉴스를 제공합니다.</h3>
				</div>
				<!-- 뉴스 슬라이드 구현 할 곳 -->
				<div class="swiper">
					<div class="swiper-wrapper">
						<div class="loading">  
							<img
								src="https://blog.kakaocdn.net/dn/bnatJc/btqGQcsVPj2/3njJOQ1fLYukvaEL1ha4Vk/img.gif">
						</div>
					</div>
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</div>
				<!-- 뉴스 슬라이드 구현 끝 -->
			</div>
		</div>
		<!-- 뉴스 데이터 페이지 END -->

		<!-- 사이버범죄 현황 데이터 페이지 START -->
		<div id="main_pg2" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>사이버범죄 현황</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- 사이버범죄 현황 데이터 페이지 END -->

		<!-- 사이버범죄 분류 데이터 페이지 START -->
		<div id="main_pg3" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>사이버범죄 분류</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- 사이버범죄 분류 데이터 페이지 END-->

		<!-- 전화금융사기 현황 데이터 페이지 START -->
		<div id="main_pg4" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>전화금융사기 현황</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- 전화금융사기 현황 데이터 페이지 END -->

		<!-- 보이스피싱 유형 데이터 페이지 START -->
		<div id="main_pg5" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>보이스피싱 유형</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- 보이스피싱 유형 데이터 페이지 END -->
	</div>

	<!-- 메인 페이지 벗어날 시 생기는 탑 버튼 -->
	<div id="btn_top" title="위로">
		<img src="imges/btn_top2.png" alt="top">
	</div>


	<!-- 모달창 실행시 검은화면 추가 -->
	<div class="modal-bg"></div>

	<!-- 로그인/회원가입 모달 창 START -->
	<div id="modal01" class="modal-wrap">
		<div class="login-wrap">
			<div class="login-html">
				<input id="tab-1" type="radio" name="tab" class="sign-in" checked="checked">
				<label for="tab-1" class="tab">SignIn</label> 
				<input id="tab-2" type="radio" name="tab" class="sign-up">
				<label for="tab-2" class="tab">Sign Up</label>
				<div class="login-form">
					<div class="sign-in-htm">
						<!-- 로그인 폼 시작 -->
						<form action="login.do" method="post">
							<div class="group">
								<label for="user" class="label">UserID</label>
								<input name="id" type="text" class="input" maxlength="12" required>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input name="pw" type="password" class="input" data-type="password" maxlength="12" required>
							</div>
							<div class="group">
								<input id="sign-in" type="submit" class="button" value="Sign In">
							</div>
							<div class="hr"></div>
						</form>
						<!-- 로그인 폼 끝 -->
					</div>

					<div class="sign-up-htm">
						<!-- 회원가입 폼 시작 -->
						<form action="join.do" method="post" onsubmit="return checkValue()">
							<div class="group">
								<label for="user" class="label">UserID</label> 
								<input id="id" name="id" type="text" class="input" minlength="6" maxlength="12">
								
								<!-- 중복체크 태그 -->
								<span id="idcheckresult"></span>
								<button id="idcheck" type="button">중복체크</button>	
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input id="pass-2" name	="pw" type="password" readonly="readonly" maxlength="15" class="input">
								<progress max="4" value="0" id="meter"></progress>
								<br>
								<div class="textbox"></div>
							</div>
							<div class="group">
								<label for="pass" class="label">REPEAT Password</label> 
								<input id="pass-3" name="pw1" type="password" readonly="readonly" class="input" maxlength="15"oninput="checkpw()">
								<span id="pwcheck"></span>
							</div>
							<div class="group">
								<input id="sign-up" type="submit" class="button" value="Sign Up">
							</div>
							<div class="hr"></div>
						</form>
						<!-- 회원가입 폼 끝 -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 로그인/회원가입 모달 창 END -->

	<!-- Who`s Number 모달 창 START -->
	<div id="modal02" class="whos-wrap">
		<div class="number-wrap">
			<div class="whos-html">
				<input id="tab-3" type="radio" name="rab" class="search-in"
					checked="checked"> <label for="tab-3" class="tab">번호조회</label>
				<input id="tab-4" type="radio" name="rab" class="search-up">
				<label for="tab-4" class="tab">조회 기록</label>
				<div class="search-form">
					<div class="search-in-htm">
						<div class="group">
							<form method="post" enctype="multipart/form-data"
								id="fileUploadForm">
								<input id="spam_search" type="text" name="data" class="input"
									placeholder="이 번호의 정체는?">
								<button type="submit" class="button" id="search-button">
									<img
										src='https://aca5.accela.com/bcc/app_themes/Default/assets/gsearch_disabled.png' />
								</button>
							</form>
						</div>
						<div class="group">
							<textarea id="search-result" readonly style="resize: none"> </textarea>
						</div>
					</div>

					<div class="search-up-htm">
						<article style='text-align:right; text-decoration:underline; font-size: 10px;'>
							<a href=# onclick="listdelete();" style='color:white;'>검색 기록 지우기</a>
						</article>
						<div id="table_div"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Who`s Number 모달 창 END -->
	
	<!-- 개인정보 수정 모달 창 START -->
	<div id="modal03" class="hsotal-wrap">
		<div class="sotal-wrap">
			<div class="sotal-html">
				<input id="tab-5" type="radio" class="sign-in" checked>
				<label for="tab-5" class="tab">비밀번호 재설정</label>
				<div class="sotal-form">
					<div class="sotal-up-htm">
						<!-- 개인정보 수정 폼 시작 -->
						<form action="update.do" method="post">
							<div class="group">
								<label for="pass" class="label">변경할 비밀번호</label> 
								<input id="pass-6" name="pw" type="password" class="input" data-type="password" maxlength="15"required>
							</div>
							<div class="group">
								<label for="pass" class="label">비밀번호 확인</label> 
								<input id="pass-7" name="pw_c" type="password" class="input" data-type="password" maxlength="15" oninput="checkup()" required>
								<span id="upcheck"></span>
							</div>
							<div class="group">
								<input id="su" type="submit" class="button" value="수정완료">
							</div>
						</form>
						<!-- 개인정보 수정 폼 끝 -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 개인정보 수정 모달 창 END -->

	<!-- 문의하기 start -->
	<div id="modal04" class="qss-wrap">
        <div class="qs-wrap">
            <div class="qs-html">
                <input id="tab-6" type="radio" name="qab" class="qs-in" checked>
                <label for="tab-6" class="tab">건의하기</label>
                <div class="qs-form">
                    <div class="qs-in-htm">
                    	<form action="messageinsert.do" method="post">
	                        <div class="group">
	                            <input id="search" name="title" type="text" class="input" placeholder="제목" required>
	                        </div>
	                        <div class="group">
                        		<textarea name="contents" placeholder="내용" onkeyup="counter(this,1300)" required></textarea>
                        		<div style="text-align:right;">
                        			<span id="reCount" style="color: white;">0 / 1300 </span>
                        		</div>
                     		</div>
	                        <button type="submit" class="button">
	                            보내기
	                        </button>
                    	</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<!-- 문의하기 end -->
	
	<!-- 회원목록/건의함 Start -->
		<div id="modal05" class="ggs-wrap">
            <div class="gs-wrap">
                <div class="gs-html">
                    <input id="tab-9" type="radio" name="ggab" class="gs-in" checked><label for="tab-9"
                        class="tab">건의함</label>
                    <input id="tab-10" type="radio" name="ggab" class="gs-up"><label for="tab-10" class="tab">회원목록</label>
                    <div class="gs-form">
                        <div class="gs-in-htm">
                            <div class="group">
	                            <button id="messagebtn">메세지 내용 불러오기</button>
	                        </div>
                            <div id="tablewrapper">
                                <div id="gable_div1"></div>
                            </div>
                        </div>
                        <div class="gs-up-htm">
                        	<div class="group">
                            	<button id="memberbtn">회원 목록 불러오기</button>
                            </div>
                            <div class="group">
                            	<div id="tablewrapper2">
                            		<div id="gable_div2"></div>
                            	</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	<!-- 회원목록/건의함 End -->
	

	<!-- ----------------------------------------- -->
	<!-- ----------------------------------------- -->
	<!-- ----------------------------------------- -->
	
	
	<!-- 비밀번호 일치여부 Start -->
	<script type="text/javascript">
		// 회원가입 비밀번호 입력시 생성되는 함수
		function checkpw(){
			//  회원가입 비밀번호 id 값 & 출력 값 호출
			var pw2 = document.getElementById('pass-2').value;
			var pw3 = document.getElementById('pass-3').value;
			var pwcheck = document.getElementById('pwcheck');
			
			// 출력문
			if(pw2 == pw3){
				pwcheck.innerHTML='비밀번호가 일치합니다.';
				pwcheck.style.color='white';
				return true;
			} else {
				pwcheck.innerHTML='비밀번호가 일치하지 않습니다.';
				pwcheck.style.color='red';
				return false;
			}
			
		}
		
		// 개인정보 수정 비밀번호 입력시 호출되는 함수
		function checkup(){
			// 개인정보 비밀번호 id 값 & 출력 값 호출
			var pw6 = document.getElementById('pass-6').value;
			var pw7 = document.getElementById('pass-7').value;
			var upcheck = document.getElementById('upcheck');
			
			// 출력문
			if(pw6 == pw7){
				upcheck.innerHTML='비밀번호가 일치합니다.';
				upcheck.style.color='white';
			} else {
				upcheck.innerHTML='비밀번호가 일치하지 않습니다.';
				upcheck.style.color='red';
			}
		}
	</script>
	<!-- 비밀번호 일치여부 End -->
	
	
	<!-- 회원가입 팝업 Start -->
	<script type="text/javascript">
		
		// 자동 실행되는 함수
		$(document).ready(function(){

			// Joinservice 에서 로그인 성공 실패시 변수 OK,NO 를 보내줌.
			if("<%=join%>"=="OK" || "<%=join%>"=="NO"){
				// 로그인에 성공 하거나 실패하였다면 join() 함수 실행.
				join();
		  	}
	  	});
		
		// 로그인 성공 했다면 join() 함수 실행
        function join() {
			// 로그인 팝업 창 디자인
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false, // 확인 창 드롭
                timerProgressBar: true,
                timer: 1500 // 1.5초
            })
			if ("<%=join%>"=="NO") {
            	Toast.fire({
            		icon: 'error',
                	title: '회원가입의 실패하였습니다.'
            	})
            	
			} else if("<%=join%>"=="OK"){
				Toast.fire({
            		icon: 'success',
                	title: '회원가입이 완료되었습니다.'
            	})
			}

        }
    </script>
    <!-- 회원가입 팝업 End -->
	
	
	<!-- 로그인 팝업 Start -->
	<script type="text/javascript">
		<!-- 로그인 팝업창 실행 -->
		$(document).ready(function(){	
			if("<%=login%>"=="OK" || "<%=login%>"=="NO"){
				login();
		  	}
	  	});
		
		function login(){
	    	const Toast = Swal.mixin({
	        	toast: true,
	            position: 'top-end',
	            showConfirmButton: false,
	            timerProgressBar: true,
	          	timer: 1500
	        })
	       	if("<%=login%>"=="OK") {  
	        	Toast.fire({
	        		icon: 'success',
	            	title: '로그인이 완료되었습니다.'
	       		}) 
	       	} else if("<%=login%>"=="NO") {
	       		Toast.fire({
	                icon: 'error',
	                title: '로그인 정보를 다시 입력해주시기 바랍니다.'
	            })
	       	}
		};	
	</script>
	<!-- 로그인 팝업 end -->


	<!-- 개인정보 팝업 Start -->
	<script type="text/javascript">
	
		$(document).ready(function(){	  
			if("<%=update%>"=="OK" || "<%=update%>"=="NO"){
				update();
		  	}
	  	});
		
        function update() {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
            })
			if ("<%=update%>"=="NO") {
            	Toast.fire({
            		icon: 'error',
                	title: '수정 실패'
            	})
            	
			} else if("<%=update%>"=="OK"){
				Toast.fire({
            		icon: 'success',
                	title: '수정 성공'
            	})
			}

        }
    </script>
    <!-- 개인정보 팝업 End -->


	<!-- 건의하기 팝업 Start -->
	<script type="text/javascript">
	
		$(document).ready(function(){	  
			if("<%=insert%>"=="OK"){
				insert();
		  	}
	  	});
		
        function insert() {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
            })
			Toast.fire({
            	icon: 'success',
                title: '메시지 전송 성공'
            })
        }
    </script>
    <!-- 건의하기 팝업 End -->

	<script type="text/javascript">
		// 중복체크 버튼 클릭시 함수 실행
		$('#idcheck').click(function() {
			var id = $('#id').val();
		if(id.length >'5'){
			console.log(id + 'id 중복체크 누름');
			// 동기 방식
			$.ajax({
				url : "idcheck.do",
				method : "POST",	
				data : {
					"id" : id
				},
				dataType : "JSON",
				success : function(data) {
					console.log("통신성공");
					console.log(data.idcheck);

					if (data.idcheck == "OK") {
						$("#idcheckresult").text("사용가능한 아이디 입니다.");
						$("#idcheckresult").css("color", "white");
						$(".input").removeAttr("readonly");
					} else {
						$("#idcheckresult").text("사용불가능한 아이디 입니다.");
						$("#idcheckresult").css("color", "red");
						// 질문 사항 $(".input").attr("readonly");
					}
				},
				error : function() {
					console.log("통신실패")
				}
			});
		} else if(id.length< '6') {
			$("#idcheckresult").text("아이디를 6자 이상 입력해주세요.");
			$("#idcheckresult").css("color", "red");
		}
		});
	</script>

	
	
	<!-- 보안강도 바 -->
	<script>
	const password = document.querySelector("#pass-2");
	const strengthBar = document.querySelector("#meter");
	var display = document.querySelector(".textbox");

	password.addEventListener("keyup", function () {
	  checkPassword(password.value);
	});

	
	function checkPassword(password) {
	  let strength = 0;
	  const regexes = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[$@#&!]+/];

	  regexes.forEach((regex, index) => {
	    strength += password.match(regex) ? 1 : 0;
	  });

	  strengthBar.value = strength;

	  switch (strength) {
	    case 1:
	      strengthBar.style.setProperty("--c", "red");
	      display.textContent = "보안강도 - 약함";
	      break;
	    case 2:
	    case 3:
	      strengthBar.style.setProperty("--c", "orange");
	      display.textContent = "보안강도 - 중간";
	      break;
	    case 4:
	      strengthBar.style.setProperty("--c", "green");
	      display.textContent = "보안강도 - 매우 양호";
	      break;
	  }

	}
	</script>
	<!-- 보안강도 바 끝남 -->
	
	
	<!-- 아이디 비밀번호 미입력시 알림창 -->
<script>
function checkValue(){
	
	if(!document.getElementById("id").value){
	    Swal.fire({
            position: 'top-center',
            icon: 'warning',
            width: 300,
            height: 100,
            text : '아이디를 입력해주세요!',
        });
		return false;
	} else if(!document.getElementById("pass-2").value && !document.getElementById("pass-3").value){
		 Swal.fire({
	            position: 'top-center',
	            icon: 'warning',
	            width: 300,
	            height: 100,
	            text : '비밀번호를 입력해주세요!',
	        });
		return false;
	} else if(document.getElementById("pass-2").value != document.getElementById("pass-3").value){
		return false;
	}
}
</script>
<!-- 아이디 비밀번호 미입력시 알림창 끝 -->



		
	
	

	<!-- 로그인, 후스넘버 화면뜨기 -->
	<script>
		
		$('.btn-open').each(function() {
			var modalID = $(this).attr('href');
			var modalBg = $('.modal-bg');
			// 변수에 각각 아이디선택자 저장
			$(this).on('click', function(e) {
				$('html').css({
					overflow : 'hidden'
				});

				e.preventDefault();
				// bg 서서히 띄워줌
				modalBg.fadeIn('linear');

				// 창 보여줌
				$(modalID).show();

			});

			// 창 이외 배경 클릭시 닫기
			$('.modal-bg, .modal-close').on('click', function() {
				modalBg.fadeOut();
				$(modalID).hide();
				$(modalID).removeAttr('style');

				$('html').removeAttr('style');
			});
		});
	</script>

	<!-- 전체 데이터 값 카운트 시작 -->
	<script>
		// 임의 숫자지정
		var d1 = 296842;
		var d2 = 256897;
		var d3 = 124434;

		$({
			// 0부터 시작
			val : 0,
			val1 : 0,
			val2 : 0
		}).animate({
			// 증가할 데이터 지정
			val : d1,
			val1 : d2,
			val2 : d3
		}, {
			// 어느정도의 속도로 증가할지 지정
			duration : 2000,
			step : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".data1").text(num);
				var num1 = numberWithCommas(Math.floor(this.val1));
				$(".data2").text(num1);
				var num2 = numberWithCommas(Math.floor(this.val2));
				$(".data3").text(num2);
			},
			complete : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".data1").text(num);
				var num1 = numberWithCommas(Math.floor(this.val1));
				$(".data2").text(num1)
				var num2 = numberWithCommas(Math.floor(this.val2));
				$(".data3").text(num2)
			}
		});

		//3자리마다 , 찍기
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	</script>
	<!-- 전체 데이터 값 카운트 끝 -->

	<!-- 페이지 부드럽게 넘기기 jquery 코드 -->
	<script>
		$(document).ready(function() {
			// 아이콘 데이터 클릭시 함수 이벤트 실행
			$("a").on('click', function(event) {
				if (this.hash !== "") {
					event.preventDefault();
					var hash = this.hash;
					$('html, body').animate({
						scrollTop : $(hash).offset().top
					}, 800, function() { // 스크롤 걸리는 시간
						window.location.hash = hash;
					});
				}
			});
		});
	</script>
	<!-- 페이지 부드럽게 넘기기 끝 -->

	<!-- 버튼 클릭 시 효과 -->
	<script>
		// 버튼을 hide한 상태로 문서 준비(버튼을 최상단에 출력하지 않음)
		$(document).ready(function() {
			$("#btn_top").hide();

			// 스크롤 시 효과 설정
			$(window).scroll(function() {
				// 스크롤탑이 1000 보다 클 때
				if ($(this).scrollTop() > 900) {
					// 버튼이 fadein되며 출력
					$("#btn_top").fadeIn();
				} else {
					// 반대로 1000보다 작으면
					// 버튼이 fadeout되며 제거
					$("#btn_top").fadeOut();
				}
			});
		});

		// 버튼 클릭시
		$("#btn_top").click(function() {
			// 스크롤탑이 0이 된다는 - 스크롤이 제일 위로 올라간다는 의미
			$('html,body').animate({
				scrollTop : 0
			}, 800);
			return false;
		});
	</script>
	<!-- 탑버튼 끝 -->
	
	<!-- 회원목록 정보 시작 -->
		<script>
			// 회원 목록 버튼 클릭시 함수 실행
			$("#memberbtn").click(function () {
				member();
			});
			
			// 멤버 함수 실행
			function member(){
	            $.ajax({
	               url : "memberlist.do",
	               type : "post",         
	               contentType : "application/json; charset:UTF-8", // 메세지 불러올 때 한글 인코딩
	               dataType : "json",
	               success : pass,
	               err : stop
	            });
			}
			
			// 멤버 삭제시 함수 실행
			function memberremove(index){
				$.ajax({
		       		url : "memberremove.do",
		            type : "post",
		            data : {"index" : index},
		            success : member,
		            error : errfun
	    		});
			}
	   	
			// 멤버 테이블 실행 함수
	        function pass(json){   
	        	var tbl="<table style='border: 2px solid black; text-align:center; height: 50px; word-break:break-all;table-layout:fixed;'>";
	            tbl+="   <colgroup>";
	            tbl+="      <col width='10%'>";
	            tbl+="      <col width='20%'>";
	            tbl+="      <col width='25%'>";
	            tbl+="      <col width='20%'>";
	            tbl+="   </colgroup>";
	            tbl+="   <tbody>";
	            tbl+="   <tr style='background: #000; position: sticky; top: 0; height: 50px;  '>";
	            tbl+="      	<th style='color:white; position: sticky; top: 0;' >Number</th>";
                tbl+="      	<th style='color:white; position: sticky; top: 0;'>ID</th>";
                tbl+="      	<th style='color:white; position: sticky; top: 0;'>PW</th>";
                tbl+="      	<th style='color:white; position: sticky; top: 0;'>DELETE</th>";
	            tbl+="   	</tr>";
	            tbl+="   <tbody>";
	            $.each(json, function(index, obj){ 
	            	tbl+="   <tbody>";
	            	tbl+="		<tr style='height: 50px; word-break:break-all;table-layout:fixed;'>";
	                tbl+="   		<td style='color:white;'>"+(index+1)+"</td>";
	                tbl+="   		<td style='color:white;'>"+obj.u_id+"</td>";
	                tbl+="   		<td style='color:white;'>"+obj.pw+"</td>";
	                tbl+="   		<td style='color:white;'><a style='color:white' href='javascript:memberremove(\""+obj.u_id+"\")'>삭제</a></td>";
	                tbl+="	 	</tr>";
	                tbl+="   </tbody>";
	            }); 
	            tbl+="</table>"
	            $("#gable_div2").html(tbl);
	        }
	        function stop(){
				alert("error");
			}
		</script>
	<!-- 회원목록 정보 끝 -->
	
	<!-- 건의함 정보 시작 -->
	<script>
		// 메세지 확인하기 버튼 클릭 시 함수 실행
		/* setInterval(message, 1000); */
		$("#messagebtn").click(function () {
			message();
		});
		
		// 메세지 삭제시 함수 실행
		function messageremove(idx){
			$.ajax({
	       		url : "messageremove.do",
	            type : "post",                  
	            data : {"idx" : idx},
	            success : message,
	            error : errfun
    		});
		}
		
		// 메세지 함수 실행
		function message(){
	    	$.ajax({
	       		url : "messageselect.do",
	            type : "post", 
	            contentType : "application/json; charset:UTF-8", // 메세지 불러올 때 한글 인코딩
	            dataType : "json",
	            success : resultjson,
	            error : errfun
	    	});
		}
		
		// 메시지 테이블 출력 
		function resultjson(json){
			var tbl="<table style='border: 2px solid black; text-align:center; height: 50px; word-break:break-all;table-layout:fixed;'>";
            tbl+="   <colgroup>";
            tbl+="      <col width='15'>"
            tbl+="      <col width='20%'>"
            tbl+="      <col width='30%'>"
            tbl+="      <col width='20%'>"
            tbl+="      <col width='16%'>"
	        tbl+="   </colgroup>"
	        tbl+="   <tbody>"
	        tbl+="   	<tr style='background: #000; position: sticky; top: 0; height: 50px;'>";
            tbl+="      	<th style='color:white; position: sticky; top: 0;'>Number</th>";
            tbl+="      	<th style='color:white; position: sticky; top: 0;'>TITLE</th>";
            tbl+="      	<th style='color:white; position: sticky; top: 0;'>CONTENTS</th>";
            tbl+="      	<th style='color:white; position: sticky; top: 0;'>DAY</th>";
	        tbl+="      	<th style='color:white; position: sticky; top: 0;'>DELETE</th>";
	        tbl+="   	</tr>";
	        tbl+="   </tbody>"
	        $.each(json, function(index, obj){
	        	tbl+="   <tbody>"
	        	tbl+="	 	<tr style='height: 50px; word-break:break-all;table-layout:fixed;'>";
	            tbl+="   		<td style='color:white'>"+(index+1)+"</td>";
	            tbl+="   		<td style='color:white'>"+obj.title+"</td>";
	            tbl+="   		<td style='color:white'>"+obj.contents+"</td>";
	            tbl+="   		<td style='color:white'>"+obj.day+"</td>";
	            tbl+="   		<td style='color:white'><a style='color:white' href='javascript:messageremove("+obj.idx+")'>삭제</a></td>";
	            tbl+="	 	</tr>";
	            tbl+="   </tbody>"
	        }); 
	        tbl+="</table>"
	        $("#gable_div1").html(tbl);
		}
		function errfun(){
			alert("error");
		}
	</script>
	<!-- 건의함 정보 끝 -->
	
	<!-- f5(새로고침) 클릭 시 메인페이지 이동 -->
	<script type="text/javascript">
		document.onkeydown = fkey;
		document.onkeypress = fkey;
		document.onkeyup = fkey;
		 
		var wasPressed = false;
		 
		function fkey(e){
		    e = e || window.event;
		    if(wasPressed) return;
		 
		    if(e.keyCode == 116){
		        location.href = "main.jsp";
		    }
		}
	</script>
	
	
	<!-- 뉴스 -->
	<script>
		// 스팸 조회 기록 클릭 시 테이블 등장  
		$(".search-up").click(function () {
			$.ajax({
				url : "searchlistservice.do",
				type : "get",						
				dataType : "json",  // json 방식으로 갖고옴
				success : function(json){	
					var tbl="<table border='1' style='text-align:center'>"; // 테이블 생성
						tbl+="	<colgroup>";
						tbl+="		<col width='5%'>";    // 테이블 열 비율
						tbl+="		<col width='20%'>";
						tbl+="		<col width='45%'>";
						tbl+="		<col width='25%'>";
						tbl+="	</colgroup>";
						tbl+="	<tr>";
						tbl+="		<th style='color:white'>No</th>";
						tbl+="		<th style='color:white'>Phone</th>";
						tbl+="		<th style='color:white'>Info</th>";
						tbl+="		<th style='color:white'>Date</th>";
						tbl+="	</tr>";
						$.each(json, function(index, obj){	 // 각각의 행에 해당 데이터 입력
							tbl+="<tr>";
							tbl+="	<td style='color:white'>"+(index+1)+"</td>";
							tbl+="	<td style='color:white'>"+obj.phone+"</td>";
							tbl+="	<td style='color:white'>"+obj.info+"</td>";
							tbl+="	<td style='color:white'>"+obj.day+"</td>";
							tbl+="</tr>";
						}); 
						tbl+="</table>"
						$("#table_div").html(tbl); 
						
				},
					error : function(){ alert("error");}						
			});								
		})
	</script>


	<!-- 뉴스 데이터 수집, 삽입 -->
	<script type="text/javascript">
		$(document).ready(function(data){
			$.ajax({
				url : "http://127.0.0.1:5000/json", // 뉴스 크롤링 데이터 받을 url
				type : "get", // 데이터 전송 방식	
				dataType : "JSON",
				success : function(data){
					console.log(data);
					
					// 뉴스 테이블 출력 하는 js 코드
					let appendNumber = 600;
					let prependNumber = 1;
					const swiper = new Swiper('.swiper', {
						slidesPerView: 3,    // 한 단면에 몇 페이지 출력할지
					  	centeredSlides: true, // 슬라이드 중앙 정렬
					  	spaceBetween: 30,
					  	pagination: {
					    	el: '.swiper-pagination',
					    	type: 'fraction',
					  	},
					  	navigation: {                     // 옆으로 넘기는 버튼
					    	nextEl: '.swiper-button-next',
					    	prevEl: '.swiper-button-prev',
					  	},
					  	virtual: {                        // 크롤링 받아온 사진 갯수에 맞춰 이미지 갯수 출력해볼곳
					    	slides: (function () {
					      		const slides = [];
					      		for (var i = 0; i < 30; i++) {  // 슬라이드 수, 슬라이드에 넣을 내용(html)
						    		var html = "";
						    		 	html += "<div>";
										html += '<a href="' + data['url'][i] + '">'+'<img src="' + data['img'][i] + '" class="news_img_size">'+"</a>";
										html += "	<h2>"+'<a href="' + data['url'][i] + '">'+data['title'][i]+"</a>"+"</h2>";
										html += "	<span>"+'<a href="' + data['url'][i] + '">'+data['content'][i]+"</a"+"</span>";
										html += "  <p>"+data['date'][i]+"</p>"
										html += "</div>";
							            slides.push(html);
							    }
					      		return slides;
					    	})(),
					  	},	
					});
				},
				error : function(){	
					// 비동기 통신에 실패했을 때 
					console.log("통신 실패");	
				}		   
		   });	
		   $(document).ajaxStart(function(){ $(".loading").show(); }); // 로딩 중 보이기
		   $(document).ajaxStop(function(){ $(".loading").hide(); });  // 로딩 완료 후 숨기기
		});	
	</script>

	<!-- 스팸 번호 조회 -->
	<script type="text/javascript">
		$(function() {
			$("#search-button").click(function() {  // 조회 버튼 클릭 시
		 		var form = $("#fileUploadForm")[0];  
		 		var data = new FormData(form);
		 		$("#search-button").prop("disabled", true);  // 검색 눌렀을 때 두번 눌리지 않게 비활성화
		 		$.ajax({
			 		url : "http://127.0.0.1:5001/spam",  // 크롤링 데이터 받을 주소
			 		type : "POST",
			 		data : data,
			 		processData : false,
			 		contentType : false,
			 		cache : false,
			 		timeout : 600000,
			 		success : function(data) {
				 		var info=data["info"];
				 		var phone=data["nums"];
				 		console.log(data)
				 		$("#search-result").html(data["info"]);      // textarea로 데이터 전송
				 		$("#search-button").prop("disabled", false); // 검색 버튼 다시 활성화
				 		$.ajax({
					 		url : "searchinsertservice.do",
					 		type : "post",
					 		data : {"info" : info, "phone" : phone},
					 		success : function(){  },
					 		error : function(){ alert("error");}					 
				 		});
			 		},
			 		error : function(e) {
				 		console.log("ERROR : ", e);
				 		alert("fail");
				 		$("#search-button").prop("disabled", false);
			 		}
		 		});
			})
		});
	</script>

	<!-- 번호조회 로딩창 -->
	<script>
		$().ready(function () {
			$("#search-button").click(function () {
   				let timerInterval
   				Swal.fire({
       				title: '번호 조회중입니다.',
       				html: '',
       				timer: 11000, // 로딩 시간 설정 -> 1000당 1초
       				didOpen: () => {
           				Swal.showLoading()
           				timerInterval = setInterval(() => {
        	   				Swal.getHtmlContainer().textContent = Swal.getTimerLeft()
           				}, 100)
       				},
       				willClose: () => {
           				clearInterval(timerInterval)
       				}
   				}).then((result) => {
       				/* Read more about handling dismissals below */
       				if (result.dismiss === Swal.DismissReason.timer) {
         
       				}
   				})

			});
		});
	</script>

	<!-- 스팸전화 검색 목록 지우기 -->
	<script>
		function listdelete(){
			$.ajax({
				url : "searchlistdelete.do", // 이걸로 지우고
				method : "POST", // 데이터 전송 방식
				success : function(data){
				
					// 비동기 통신에 성공했을 때
					console.log("삭제 성공");
					var tbl="<table border='1' style='text-align:center'>";  // 아무 데이터 없는 새창 로드
						tbl+="	<colgroup>";
						tbl+="		<col width='5%'>"
						tbl+="		<col width='20%'>"
						tbl+="		<col width='45%'>"
						tbl+="		<col width='25%'>"
						tbl+="	</colgroup>"
						tbl+="	<tr>";
						tbl+="		<th style='color:white'>No</th>";
						tbl+="		<th style='color:white'>Phone</th>";
						tbl+="		<th style='color:white'>Info</th>";
						tbl+="		<th style='color:white'>Date</th>";
						tbl+="	</tr>";
						tbl+="</table>"
						$("#table_div").html(tbl);
				},
				error : function(){
					// 비동기 통신에 실패했을 때 
					console.log("통신 실패");	
				}
			});
		}
	</script>
	
	
	
	<!-- 건의함 글자수세기 -->
   <script>
   function counter(text,length){
      var limit = length;
      var str = text.value.length;
      if(str>limit){
         document.getElementById("reCount").innerHTML = "1300자 이상 입력했습니다.";
         text.value=text.value.substring(0,limit);
         text.focus();
      }
      document.getElementById("reCount").innerHTML = text.value.length + " / " + limit;
   }
   </script>
   <!-- 건의함 글자수세기 끝 -->
	
</body>

<!-- swiper js 뉴스페이지 -->
<script src="js/swiper-bundle.min.js"></script>

</html>