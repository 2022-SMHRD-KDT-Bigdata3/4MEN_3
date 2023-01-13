window.onload = get_CC_Statistics();
function get_CC_Statistics() {
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
			//----------------------------------------------------------------------
			// chart.js 부분(구현)
			var context = document.getElementById('ccsChart').getContext('2d');

			// 범죄 유형에 맞게(select 태그) 분류하고 각각의 차트 구현 → 컬럼 개수가 다름..ㅠ	
			let crime_type = $("#crime_type").val();
			if (crime_type == "해킹 및 정보통신망") {			// 해킹 및 정보통신망일 때!
				var ccsChart = new Chart(context,
					{
						type: 'polarArea', 				// 차트의 형태
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
						options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
					}
				);

			} else if (crime_type == "사이버 사기 및 금융범죄") {			// 사이버 사기 및 금융범죄일 때!
				var ccsChart = new Chart(context,
					{
						type: 'polarArea', 				// 차트의 형태
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
						options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
					}
				);

			} else if (crime_type == "사이버 음란물 및 도박") {			// 사이버 음란물 및 도박일 때!
				var ccsChart = new Chart(context,
					{
						type: 'polarArea', 				// 차트의 형태
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
						options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }
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