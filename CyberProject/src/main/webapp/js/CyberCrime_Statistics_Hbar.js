window.onload = get_CC_Statistics_Hbar();
function get_CC_Statistics_Hbar() {
	$.ajax({
		url: "https://api.odcloud.kr/api/15053887/v1/uddi:4a0b64ee-fee2-42c1-802b-99c651d5260a?page=1&perPage=15&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------	
			// 연도와 카테고리에 맞게(select 태그) 데이터 요청 지정 및 분류
			let year = $("#year_CC").val();
			let category = $("#category_CC").val();

			let arr = data['data'];

			let chart_data = [];
			if (year == "2014년" && category == "검거건수") {
				chart_data = arr[13];
			} else if (year == "2014년" && category == "발생건수") {
				chart_data = arr[12];
			} else if (year == "2015년" && category == "검거건수") {
				chart_data = arr[11];
			} else if (year == "2015년" && category == "발생건수") {
				chart_data = arr[10];
			} else if (year == "2016년" && category == "검거건수") {
				chart_data = arr[9];
			} else if (year == "2016년" && category == "발생건수") {
				chart_data = arr[8];
			} else if (year == "2017년" && category == "검거건수") {
				chart_data = arr[7];
			} else if (year == "2017년" && category == "발생건수") {
				chart_data = arr[6];
			} else if (year == "2018년" && category == "검거건수") {
				chart_data = arr[5];
			} else if (year == "2018년" && category == "발생건수") {
				chart_data = arr[4];
			} else if (year == "2019년" && category == "검거건수") {
				chart_data = arr[3];
			} else if (year == "2019년" && category == "발생건수") {
				chart_data = arr[2];
			} else if (year == "2020년" && category == "검거건수") {
				chart_data = arr[1];
			} else if (year == "2020년" && category == "발생건수") {
				chart_data = arr[0];
			}
			
			// 연도별 총 발생건수, 검거율, 가장 높은 발생 유형 알고리즘 제작
			
			// 연도별 발생건수 추출
			let chart_data_ge = [];
			if (year == "2014년") {
				chart_data_ge = arr[12];
			} else if (year == "2015년") {
				chart_data_ge = arr[10];
			} else if (year == "2016년") {
				chart_data_ge = arr[8];
			} else if (year == "2017년") {
				chart_data_ge = arr[6];
			} else if (year == "2018년") {
				chart_data_ge = arr[4];
			} else if (year == "2019년") {
				chart_data_ge = arr[2];
			} else if (year == "2020년") {
				chart_data_ge = arr[0];
			}
			
			// 연도별 검거건수 추출
			let chart_data_ar = [];
			if (year == "2014년") {
				chart_data_ar = arr[13];
			} else if (year == "2015년") {
				chart_data_ar = arr[11];
			} else if (year == "2016년") {
				chart_data_ar = arr[9];
			} else if (year == "2017년") {
				chart_data_ar = arr[7];
			} else if (year == "2018년") {
				chart_data_ar = arr[5];
			} else if (year == "2019년") {
				chart_data_ar = arr[3];
			} else if (year == "2020년") {
				chart_data_ar = arr[1];
			}
			
			// 값들만 비교하기 위해 '연도'와 '구분' key는 지운다.
			delete chart_data_ge['연도']; 
			delete chart_data_ge['구분'];
			delete chart_data_ar['연도']; 
			delete chart_data_ar['구분'];
			
			
			// 연도별 검거율 추출
		    var keys = Object.keys(chart_data_ge); // 키를 가져옴. 이때, keys 는 반복가능한 객체가 됨.
			let year_ge_total = 0;
			let year_ar_total = 0;
			for (var i=0; i < keys.length; i++) {
    			var key = keys[i];
				year_ge_total += chart_data_ge[key];
				year_ar_total += chart_data_ar[key];

   			}
			
			// 발생건수가 가장 높은 유형 추출
			var crime_type = $("#crime_type").val();
			let top_Cyber_cnt = chart_data_ge['해킹(계정도용)']; // 발생건수가 가장 높은 유형을 찾기 위한 초기화
			for (var i=0; i < keys.length; i++) {
    			var key = keys[i];
				if(chart_data_ge[key] > top_Cyber_cnt){
					var top_Cyber = keys[i];				// 발생비가 높은 지역의 key값을 변수에 저장
					top_Cyber_cnt = chart_data_ge[key];
				};
   			};

			// 직거래 사기 데이터 추출
			let Direc_Scam_2016 = arr[8]['사이버사기(직거래)'];
			let Direc_Scam_2017 = arr[6]['사이버사기(직거래)'];
			let Direc_Scam_2018 = arr[4]['사이버사기(직거래)'];
			let Direc_Scam_2019 = arr[2]['사이버사기(직거래)'];
			let Direc_Scam_2020 = arr[0]['사이버사기(직거래)'];

			// text 전송
			$('#year_Cyber_Statistics').text($("#year_CC").val());
			$('#Cyber_Statistics_geCnt').text(Math.floor(year_ge_total/10000)+"만 "+(year_ge_total%10000)+"건");
			$('#Cyber_Statistics_pct').text("약 "+ Math.floor((year_ar_total/year_ge_total)*100)+"%");
			$('#Cyber_Statistics_top').text(top_Cyber);
			$('#Direc_Scam_2016').text(Math.floor(Direc_Scam_2016/10000)+"만 "+(Direc_Scam_2016%10000)+"건");
			$('#Direc_Scam_2017').text(Math.floor(Direc_Scam_2017/10000)+"만 "+(Direc_Scam_2017%10000)+"건");
			$('#Direc_Scam_2018').text(Math.floor(Direc_Scam_2018/10000)+"만 "+(Direc_Scam_2018%10000)+"건");
			$('#Direc_Scam_2019').text(Math.floor(Direc_Scam_2019/10000)+"만 "+(Direc_Scam_2019%10000)+"건");
			$('#Direc_Scam_2020').text(Math.floor(Direc_Scam_2020/10000)+"만 "+(Direc_Scam_2020%10000)+"건");
			$('#Direc_Scam_pct').text("약 "+ Math.floor(((Direc_Scam_2020 - Direc_Scam_2016)/Direc_Scam_2016)*100)+"%");
			
			//----------------------------------------------------------------------
			// chart.js 부분(구현)
			var context = document.getElementById('ccsChart_hbar').getContext('2d');
			// 범죄 유형에 맞게(select 태그) 분류하고 각각의 차트 구현 → 컬럼 개수가 다름..ㅠ	
			var crime_type = $("#crime_type").val();
			if (crime_type == "해킹 및 정보통신망") {			// 해킹 및 정보통신망일 때!
				var ccsChart_hbar = new Chart(context,
					{
						type: 'horizontalBar', 				// 차트의 형태
						data: { 							// 차트에 들어갈 데이터
							labels: //x 축
								['해킹(계정도용)',
									'해킹(단순침입)',
									'해킹(자료유출)',
									'해킹(자료훼손)',
									'서비스거부공격',
									'악성프로그램(랜섬웨어)',
									'악성프로그램(기타)',
									'기타 정보통신망 침해형 범죄',
									'개인위치정보 침해',
									'사이버저작권침해',
									'기타 정보통신망 이용형 범죄'
								],
							datasets: [{ 				//데이터
								label: crime_type, 	//차트 제목
								fill: false, 			// line 형태일 때, 선 안쪽을 채우는지 안채우는지
								data:  //x축 label에 대응되는 데이터 값
									[chart_data['해킹(계정도용)'],
									chart_data['해킹(단순침입)'],
									chart_data['해킹(자료유출)'],
									chart_data['해킹(자료훼손)'],
									chart_data['서비스거부공격'],
									chart_data['악성프로그램(랜섬웨어)'],
									chart_data['악성프로그램(기타)'],
									chart_data['기타 정보통신망 침해형 범죄'],
									chart_data['개인위치정보 침해'],
									chart_data['사이버저작권침해'],
									chart_data['기타 정보통신망 이용형 범죄']
									],
								backgroundColor: [		//색상(a = 0.2)											
									'rgba(255,160,122, 0.8)',
									'rgba(255,69,0, 0.8)',
									'rgba(255,218,185, 0.8)',
									'rgba(0,255,127, 0.8)',
									'rgba(175,238,238, 0.8)',
									'rgba(176,224,230, 0.8)',
									'rgba(65,105,225, 0.8)',
									'rgba(123,104,238, 0.8)',
									'rgba(238,130,238, 0.8)',
									'rgba(219,112,147, 0.8)',
									'rgba(205,133,63, 0.8)'
								],
								borderColor: [			//경계선 색상(a = 1)
									'rgba(255,160,122, 1)',
									'rgba(255,69,0, 1)',
									'rgba(255,218,185, 1)',
									'rgba(0,255,127, 1)',
									'rgba(175,238,238, 1)',
									'rgba(176,224,230, 1)',
									'rgba(65,105,225, 1)',
									'rgba(123,104,238, 1)',
									'rgba(238,130,238, 1)',
									'rgba(219,112,147, 1)',
									'rgba(205,133,63, 1)'
								],
								borderWidth: 1	//경계선 굵기
							} /* ,
										{
										    label: 'test2',
										    fill: false,
										    data: [
										        8, 34, 12, 24
										    ],
										    backgroundColor: 'rgb(157, 109, 12)',
										    borderColor: 'rgb(157, 109, 12)'
										} */
							]
						},
						options: {
							responsive: true,
							title: {
								display: true,
								text: year
							},
						}
					}
				);

			} else if (crime_type == "사이버 사기 및 금융범죄") {			// 사이버 사기 및 금융범죄일 때!
				var ccsChart_hbar = new Chart(context,
					{
						type: 'horizontalBar', 				// 차트의 형태
						data: { 							// 차트에 들어갈 데이터
							labels: //x 축
								['사이버사기(직거래)',
									'사이버사기(쇼핑몰)',
									'사이버사기(게임)',
									'사이버사기(이메일 무역사기)',
									'사이버사기(기타)',
									'사이버금융범죄(피싱)',
									'사이버금융범죄(파밍)',
									'사이버금융범죄(스미싱)',
									'사이버금융범죄(메모리해킹)',
									'사이버금융범죄(몸캠피싱)',
									'사이버금융범죄(메신저이용사기)',
									'사이버금융범죄(기타)'
								],
							datasets: [{ 				//데이터
								label: crime_type, 	//차트 제목
								fill: false, 			// line 형태일 때, 선 안쪽을 채우는지 안채우는지
								data:  //x축 label에 대응되는 데이터 값
									[chart_data['사이버사기(직거래)'],
									chart_data['사이버사기(쇼핑몰)'],
									chart_data['사이버사기(게임)'],
									chart_data['사이버사기(이메일 무역사기)'],
									chart_data['사이버사기(기타)'],
									chart_data['사이버금융범죄(피싱)'],
									chart_data['사이버금융범죄(파밍)'],
									chart_data['사이버금융범죄(스미싱)'],
									chart_data['사이버금융범죄(메모리해킹)'],
									chart_data['사이버금융범죄(몸캠피싱)'],
									chart_data['사이버금융범죄(메신저이용사기)'],
									chart_data['사이버금융범죄(기타)']
									],
								backgroundColor: [		//색상(a = 0.2)											
									'rgba(255,160,122, 0.8)',
									'rgba(255,69,0, 0.8)',
									'rgba(255,218,185, 0.8)',
									'rgba(0,255,127, 0.8)',
									'rgba(175,238,238, 0.8)',
									'rgba(176,224,230, 0.8)',
									'rgba(65,105,225, 0.8)',
									'rgba(123,104,238, 0.8)',
									'rgba(238,130,238, 0.8)',
									'rgba(219,112,147, 0.8)',
									'rgba(205,133,63, 0.8)',
									'rgba(255,228,225, 0.8)'
								],
								borderColor: [			//경계선 색상(a = 1)
									'rgba(255,160,122, 1)',
									'rgba(255,69,0, 1)',
									'rgba(255,218,185, 1)',
									'rgba(0,255,127, 1)',
									'rgba(175,238,238, 1)',
									'rgba(176,224,230, 1)',
									'rgba(65,105,225, 1)',
									'rgba(123,104,238, 1)',
									'rgba(238,130,238, 1)',
									'rgba(219,112,147, 1)',
									'rgba(205,133,63, 1)',
									'rgba(255,228,225, 1)'
								],
								borderWidth: 1	//경계선 굵기
							} /* ,
										{
										    label: 'test2',
										    fill: false,
										    data: [
										        8, 34, 12, 24
										    ],
										    backgroundColor: 'rgb(157, 109, 12)',
										    borderColor: 'rgb(157, 109, 12)'
										} */
							]
						},
						options: {
							responsive: true,
							title: {
								display: true,
								text: year
							},
						}
					}
				);

			} else if (crime_type == "사이버 음란물 및 도박") {			// 사이버 음란물 및 도박일 때!
				var ccsChart_hbar = new Chart(context,
					{
						type: 'horizontalBar', 				// 차트의 형태
						data: { 							// 차트에 들어갈 데이터
							labels: //x 축
								['사이버 음란물(일반음란물)',
									'사이버 음란물(아동음란물)',
									'사이버 음란물(불법촬영물유포)',
									'사이버 도박(스포츠토토)',
									'사이버 도박(경마 경륜 경정)',
									'사이버 도박(카지노)',
									'사이버 도박(기타)',
									'사이버 명예훼손(모욕)',
									'사이버 스토킹',
									'기타 불법 컨텐츠'
								],
							datasets: [{ 				//데이터
								label: crime_type, 	//차트 제목
								fill: false, 			// line 형태일 때, 선 안쪽을 채우는지 안채우는지
								data:  //x축 label에 대응되는 데이터 값
									[chart_data['사이버 음란물(일반음란물)'],
									chart_data['사이버 음란물(아동음란물)'],
									chart_data['사이버 음란물(불법촬영물유포)'],
									chart_data['사이버 도박(스포츠토토)'],
									chart_data['사이버 도박(경마 경륜 경정)'],
									chart_data['사이버 도박(카지노)'],
									chart_data['사이버 도박(기타)'],
									chart_data['사이버 명예훼손(모욕)'],
									chart_data['사이버 스토킹'],
									chart_data['기타 불법 컨텐츠']
									],
								backgroundColor: [		//색상(a = 0.2)											
									'rgba(255,160,122, 0.8)',
									'rgba(255,69,0, 0.8)',
									'rgba(255,218,185, 0.8)',
									'rgba(0,255,127, 0.8)',
									'rgba(175,238,238, 0.8)',
									'rgba(176,224,230, 0.8)',
									'rgba(65,105,225, 0.8)',
									'rgba(123,104,238, 0.8)',
									'rgba(238,130,238, 0.8)',
									'rgba(219,112,147, 0.8)'
								],
								borderColor: [			//경계선 색상(a = 1)
									'rgba(255,160,122, 1)',
									'rgba(255,69,0, 1)',
									'rgba(255,218,185, 1)',
									'rgba(0,255,127, 1)',
									'rgba(175,238,238, 1)',
									'rgba(176,224,230, 1)',
									'rgba(65,105,225, 1)',
									'rgba(123,104,238, 1)',
									'rgba(238,130,238, 1)',
									'rgba(219,112,147, 1)'
								],
								borderWidth: 1	//경계선 굵기
							} /* ,
										{
										    label: 'test2',
										    fill: false,
										    data: [
										        8, 34, 12, 24
										    ],
										    backgroundColor: 'rgb(157, 109, 12)',
										    borderColor: 'rgb(157, 109, 12)'
										} */
							]
						},
						options: {
							responsive: true,
							title: {
								display: true,
								text: year
							},
						}
					}
				);
			}
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
}