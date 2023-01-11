<%@page import="com.smhrd.model.memberVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 폰트 링크 -->
<link
	href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
	rel="stylesheet">
<!-- style css -->
<link rel="stylesheet" type="text/css" href="css/style.css">
<!-- swiper css -->
<link rel="stylesheet" href="css/swiper-bundle.min.css">

<link rel="stylesheet" href="css/login.css">

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
	memberVO info = (memberVO) session.getAttribute("info");
	%>

	<!-- 전체코드 -->
	<div id="wrap">
		<!-- main page start -->
		<div id="intro_bg">
			<!-- 머리 부분 -->
			<div id="header">
				<div id="platform">
					<img src="./imges/platform.png" alt="">
					<h3>
						<a href="main.jsp" class="login_btn">Cyber Crime Platform</a>
					</h3>
				</div>
				<ul id="nav">
					<li>
						<%
						if (info != null) {
							// 로그인 시
							if (info.getU_id().equals("admin")) {
								out.print("<a href='memberlist.do' id='a'>회원목록</a>");
								out.print("<a href='#' id='a'>문의함</a>");
							} else {
								out.print("<a href='#modal04' id='a'>문의하기</a>");
								out.print("<button href='#modal02' id='a' class='btn-open'>Who`s Number</button>");
							}

							out.print("<button href='#modal03' id='a' class='btn-open'>개인정보수정</button>");
							out.print("<a href='logout.do' id='a'>로그아웃</a>");

						} else {
							// 메인 화면 페이지
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
			<!-- 데이터 시작 -->
			<ul id="list_data">
				<li>
					<div>
						<p id="list_text1">2021</p>
						<p id="list_text2">사이버범죄 발생건수</p>
						<p id="list_text3" class="memberCountCon"></p>
					</div>
				</li>
				<li>
					<div>
						<p id="list_text1">2022</p>
						<p id="list_text2">보이스피싱 발생건수</p>
						<p id="list_text3" class="memberCountCon1"></p>
					</div>
				</li>
				<li>
					<div>
						<p id="list_text1">2020</p>
						<p id="list_text2">인터넷 직거래 사기 총 피해액</p>
						<p id="list_text3" class="memberCountCon2"></p>
					</div>
				</li>
			</ul>
			<!-- 데이터 끝 -->

			<!-- 아이콘 시작 -->
			<ul id="icon_tag">
				<li>
					<div>
						<a href="#main_pg1" class="main"> <img id="img_t"
							src="./imges/news.png" alt="">
							<p id="list_text1">뉴스</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg2" class="main"> <img id="img_t"
							src="./imges/location.png" alt="">
							<p id="list_text1">지역</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg3" class="main"> <img id="img_t"
							src="./imges/data.png" alt="">
							<p id="list_text1">월별</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg4" class="main"> <img id="img_t"
							src="./imges/voice.png" alt="">
							<p id="list_text1">사이버</p>
						</a>
					</div>
				</li>
				<li>
					<div>
						<a href="#main_pg5" class="main"> <img id="img_t"
							src="./imges/cyber.png" alt="">
							<p id="list_text1">보이스</p>
						</a>
					</div>
				</li>
			</ul>
			<!-- 아이콘 끝 -->
		</div>
		<!-- main page end -->


		<!-- sub page1 start-->
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
		<!-- sub page1 end-->

		<!-- sub page2 start-->
		<div id="main_pg2" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>지역</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- sub page2 end-->

		<!-- sub page3 start -->
		<div id="main_pg3" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>월별</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- sub page3 end-->

		<!-- sub page4 start -->
		<div id="main_pg4" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>보이스</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- sub page4 end-->

		<!-- sub page5 start -->
		<div id="main_pg5" class="title_size">
			<div id="pg1">
				<div id="pg1-title">
					<h2>사이버</h2>
					<h3>줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리</h3>
				</div>
			</div>
		</div>
		<!-- sub page5 end-->
	</div>

	<!-- 탑 버튼 -->
	<div id="btn_top" title="위로">
		<img src="imges/btn_top2.png" alt="top">
	</div>


	<!-- 배경 검은 흐릿화면 -->
	<div class="modal-bg"></div>

	<!-- 로그인 창 시작 -->
	<div id="modal01" class="modal-wrap">
		<div class="login-wrap">
			<div class="login-html">
				<input id="tab-1" type="radio" name="tab" class="sign-in" checked="checked">
				<label for="tab-1" class="tab">SignIn</label> 
				<input id="tab-2" type="radio" name="tab" class="sign-up">
				<label for="tab-2" class="tab">Sign Up</label>

				<div class="login-form">
					<div class="sign-in-htm">
						<!-- 로그인 폼 -->
						<form action="login.do" method="post" name="theForm" onsubmit="return test()">
							<div class="group">
								<label for="user" class="label">UserID</label>
								<input name="id" type="text" class="input">
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input name="pw" type="password" class="input" data-type="password">
							</div>
							<div class="group">
								<input id="sign-in" type="submit" class="button" value="Sign In"  >
							</div>
							<div class="hr"></div>
						</form>
					</div>

					<div class="sign-up-htm">
						<!-- 회원가입 폼 -->
						<form name="hole" action="join.do" method="post" >
							<div class="group">
								<label for="user" class="label">UserID</label> 
								<input id="id" name="id" type="text" class="input">
								
								<!-- 중복체크 태그 -->
								<span id="idcheckresult"></span>
								<button id="idcheck" type="button">중복체크</button>	
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label> 
								<input name	="pw" type="password" readonly="readonly" class="input">
							</div>
							<div class="group">
								<label for="pass" class="label">REPEAT Password</label> 
								<input name="pw1" type="password" readonly="readonly" class="input">
							</div>
							<div class="group">
								<input id="sign-up" type="submit" class="button" value="Sign Up">
							</div>
							<div class="hr"></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 로그인 창 끝 -->

	<!-- 후스넘버창 -->
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
								<img
									src='https://aca5.accela.com/bcc/app_themes/Default/assets/gsearch_disabled.png' />
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
	<!-- 후스 넘버창 끝 -->
	
	<!-- 개인정보 수정 -->
	<div id="modal03" class="hsotal-wrap">
		<div class="sotal-wrap">
			<div class="sotal-html">
				<input id="tab-5" type="radio" class="sign-in" checked>
				<label for="tab-5" class="tab">비밀번호 재설정</label>
				<div class="sotal-form">
					<div class="sotal-up-htm">
						<form action="update.do" method="post">
							<div class="group">
								<label for="pass-6" class="label">변경할 비밀번호</label> 
								<input id="pass" name="pw" type="password" class="input" data-type="password">
							</div>
							<div class="group">
								<label for="pass-7" class="label">비밀번호 확인</label> 
								<input id="pass" name="pw_c" type="password" class="input" data-type="password">
							</div>
							<div class="group">
								<input id="su" type="submit" class="button" value="수정완료">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 개인정보 수정 end -->

	<!-- 문의하기 start -->
	<div id="modal04" class="qss-wrap">
        <div class="qs-wrap">
            <div class="qs-html">
                <input id="tab-6" type="radio" name="qab" class="qs-in" checked>
                <label for="tab-6" class="tab">문의하기</label>
                <div class="qs-form">
                    <div class="qs-in-htm">
                        <div class="group">
                            <input id="search" type="text" class="input" placeholder="제목">
                        </div>
                        <div class="group">
                            <textarea placeholder="내용"></textarea>
                        </div>
                        <button type="submit" class="button">
                            보내기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<!-- 문의하기 end -->


	

	<!-- ----------------------------------------- -->
	<!-- ----------------------------------------- -->
	<!-- ----------------------------------------- -->
	
	<script>
		function test(){
                const Toast = Swal.mixin({
	                toast: true,
	                position: 'top-end',
	                showConfirmButton: false,
	                timerProgressBar: true,
                	timer: 3000,
	                didOpen: (toast) => {
	                    toast.addEventListener('mouseenter', Swal.stopTimer)
	                    toast.addEventListener('mouseleave', Swal.resumeTimer)
	                }
	            })

	            Toast.fire({
	                icon: 'success',
	                title: '로그인이 완료되었습니다.'
	         	})
	            return true;
    	};   
	</script>


	<!-- 중복체크 -->
	<script type="text/javascript">
		// 중복 체크
		$('#idcheck').click(function() {
			var id = $('#id').val();
			console.log(id + 'id 중복체크 누름');
			
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
		google.charts.load('current', {
			'packages' : [ 'table' ]
		});
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

			var table = new google.visualization.Table(document
					.getElementById('table_div'));
			table.draw(data, options);

		}
	</script>


	<script>
		// 임의 숫자지정
		var memberCountConTxt = 296842;
		var memberCountConTxt1 = 256897;
		var memberCountConTxt2 = 124434;

		$({
			// 0부터 시작
			val : 0,
			val1 : 0,
			val2 : 0
		}).animate({
			// 증가할 데이터 지정
			val : memberCountConTxt,
			val1 : memberCountConTxt1,
			val2 : memberCountConTxt2
		}, {
			// 얼마나 오를지 지정
			duration : 2000,
			step : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".memberCountCon").text(num);
				var num1 = numberWithCommas(Math.floor(this.val1));
				$(".memberCountCon1").text(num1);
				var num2 = numberWithCommas(Math.floor(this.val2));
				$(".memberCountCon2").text(num2);
			},
			complete : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".memberCountCon").text(num);
				var num1 = numberWithCommas(Math.floor(this.val1));
				$(".memberCountCon1").text(num1)
				var num2 = numberWithCommas(Math.floor(this.val2));
				$(".memberCountCon2").text(num2)
			}
		});

		//3자리마다 , 찍기
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	</script>

	<!-- 페이지 부드럽게 넘기기 jquery 코드 -->
	<script>
		$(document).ready(function() {

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
</body>

<!-- swiper js 뉴스페이지 -->
<script src="js/swiper-bundle.min.js"></script>
<script src="js/script.js"></script>


</html>