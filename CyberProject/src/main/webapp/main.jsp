<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 폰트 링크 -->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet">
        <!-- style css -->
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!-- swiper css -->
        <link rel="stylesheet" href="css/swiper-bundle.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <!-- 전체코드 -->
        <div id="wrap">
            <!-- main page start -->
            <div id="intro_bg">
                <!-- 머리 부분 -->
                <div id="header">
                    <div id="platform">
                        <img src="./imges/platform.png" alt="">
                        <h3><a href="main.jsp" class="login_btn">Cyber Crime Platform</a></h3>
                    </div>
                    <ul id="nav">
                        <li><a href="login.jsp">로그인</a></li>
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
                            <p id="list_text3">234,098건</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p id="list_text1">2022</p>
                            <p id="list_text2">보이스피싱 발생건수</p>
                            <p id="list_text3">18,783건</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p id="list_text1">2020</p>
                            <p id="list_text2">인터넷 직거래 사기 총 피해액</p>
                            <p id="list_text3">897억원</p>
                        </div>
                    </li>
                </ul>
                <!-- 데이터 끝 -->

                <!-- 아이콘 시작 -->
                <ul id="icon_tag">
                    <li>
                        <div>
                            <a href="#main_pg1" class="main"> 
                                <img id="img_t" src="./imges/news.png" alt="">
                                <p id="list_text1">뉴스</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#main_pg2" class="main">
                                <img id="img_t" src="./imges/location.png" alt="">   
                                <p id="list_text1">지역</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#main_pg3" class="main">
                                <img id="img_t" src="./imges/data.png" alt="">
                                <p id="list_text1">월별</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#main_pg4" class="main">
                                <img id="img_t" src="./imges/voice.png" alt="">
                                <p id="list_text1">사이버</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#main_pg5" class="main">
                                <img id="img_t" src="./imges/cyber.png" alt="">
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

        
        <!-- ----------------------------------------- -->
        <!-- ----------------------------------------- -->
        <!-- ----------------------------------------- -->


        <!-- 페이지 부드럽게 넘기기 jquery 코드 -->
        <script>

            $(document).ready(function(){
            
              $("a").on('click', function(event) {
            
                if (this.hash !== "") {
            
                  event.preventDefault();
            
                  var hash = this.hash;
            
                  $('html, body').animate({
            
                    scrollTop: $(hash).offset().top
            
                  }, 800, function(){
            
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
            $(document).ready(function(){
                $("#btn_top").hide();

                // 스크롤 시 효과 설정
                $(window).scroll(function(){
                    // 스크롤탑이 1000 보다 클 때
                    if($(this).scrollTop()>900){
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
            $("#btn_top").click(function(){
                // 스크롤탑이 0이 된다는 - 스크롤이 제일 위로 올라간다는 의미
                $('html,body').animate({
                    scrollTop:0
                },800);
                return false;
            });
        </script>
        <!-- 탑버튼 끝 -->



    </body>

    <!-- swiper js 뉴스페이지 -->
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/script.js"></script>
    

</html>