<%@page import="java.util.ArrayList"%>
<%@page import="com.smhrd.model.memberVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="UTF-8"%>

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
							if (info.getU_id().equals("admin")) {
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
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
				<!-- 뉴스 슬라이드 구현 할 곳 -->
				<div class="swiper">
					<div class="swiper-wrapper"></div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
					<!-- Add Arrows -->
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
								<input name="id" type="text" class="input" required>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input name="pw" type="password" class="input" data-type="password" required>
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
						<form action="join.do" method="post">
							<div class="group">
								<label for="user" class="label">UserID</label> 
								<input id="id" name="id" type="text" class="input" required>
								
								<!-- 중복체크 태그 -->
								<span id="idcheckresult"></span>
								<button id="idcheck" type="button">중복체크</button>	
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input id="pass-2" name	="pw" type="password" readonly="readonly" class="input" oninput="checkpw()" required>
							</div>
							<div class="group">
								<label for="pass" class="label">REPEAT Password</label> 
								<input id="pass-3" name="pw1" type="password" readonly="readonly" class="input" oninput="checkpw()" required>
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
				<input id="tab-3" type="radio" name="rab" class="search-in" checked="checked"> 
				<label for="tab-3" class="tab">번호조회</label> 
				<input id="tab-4" type="radio" name="rab" class="search-up">
				<label for="tab-4" class="tab">조회 기록</label>
				<div class="search-form">
					<div class="search-in-htm">
						<div class="group">
							<input id="search" type="text" class="input" placeholder="이 번호의 정체는?">
							<button type="submit" class="button">
								<img src='https://aca5.accela.com/bcc/app_themes/Default/assets/gsearch_disabled.png' />
							</button>
						</div>
						<div class="group">
							<textarea readonly></textarea>
						</div>
					</div>
	
					<div class="search-up-htm">
						<div id="table_div"></div>
						<div class="hr"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</section>
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
								<input id="pass-6" name="pw" type="password" class="input" data-type="password" oninput="checkup()" required>
							</div>
							<div class="group">
								<label for="pass" class="label">비밀번호 확인</label> 
								<input id="pass-7" name="pw_c" type="password" class="input" data-type="password" oninput="checkup()" required>
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
	                            <textarea name="contents" placeholder="내용" required></textarea>
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
                            <button id="messagebtn">메세지 내용 불러오기</button>
                            <div class="group">
                                <div id="gable_div1"></div>
                            </div>
                        </div>
                        <div class="gs-up-htm">
                        	<div class="group">
                            	<button id="memberbtn">회원 목록 불러오기</button>
                            </div>
                            <div class="group">
                            	<div id="gable_div2"></div>
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
	          	timer: 3000
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




	<!-- 중복체크 -->
	<script type="text/javascript">
		// 중복체크 버튼 클릭시 함수 실행
		$('#idcheck').click(function() {
			var id = $('#id').val();
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
		});
	</script>

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

		// 더콜_ 구글 차트 api
		google.charts.load('current', {'packages' : [ 'table' ]});
		google.charts.setOnLoadCallback(drawTable);

		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('number', 'No.');
			data.addColumn('string', 'Phone');
			data.addColumn('string', 'Info');
			data.addColumn('string', 'Date');
			data.addRows([
					[ 1, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 2, "010-8515-0468", "보이스 피싱", '2023.01.06 16:30' ],
					[ 3, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 4, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 5, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 6, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 7, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 8, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 9, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 8, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ],
					[ 9, "010-8515-0468", "스팸번호가 아니에요", '2023.01.06 16:30' ] ]);

			var options = {
				width : 1000,
				height : 450,

			}

			var table = new google.visualization.Table(document.getElementById('table_div'));
			table.draw(data, options);

		}
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
					}, 800, function() {
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
		$("#memberbtn").click(function () {
            $.ajax({
               url : "memberlist.do",
               type : "get",                  
               dataType : "json",
               success : function(json){   
                  var tbl="<table border='1' style='text-align:center'>";
                     tbl+="   <colgroup>";
                     tbl+="      <col width='5%'>"
                     tbl+="      <col width='20%'>"
                     tbl+="      <col width='45%'>"
                     tbl+="      <col width='25%'>"
                     tbl+="   </colgroup>"
                     tbl+="   <tr>";
                     tbl+="      <td style='color:white'>Number</td>";
                     tbl+="      <td style='color:white'>ID</td>";
                     tbl+="      <td style='color:white'>PW</td>";
                     tbl+="   </tr>";
                      $.each(json, function(index, obj){   
                         tbl+="<tr>";
                         tbl+="   <td style='color:white'>"+(index+1)+"</td>";
                         tbl+="   <td style='color:white'>"+obj.u_id+"</td>";
                         tbl+="   <td style='color:white'>"+obj.pw+"</td>";
                         tbl+="</tr>";
                     }); 
                     tbl+="</table>"
                     $("#gable_div2").html(tbl); 
                  
               },
               error : function(){ alert("error");}                  
            });               
                        
   })
		</script>
	<!-- 회원목록 정보 끝 -->
	
	
	
	
	
	
	
</body>

<!-- swiper js 뉴스페이지 -->
<script src="js/swiper-bundle.min.js"></script>
<script src="js/script.js"></script>

</html>