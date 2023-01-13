window.onload = get_Phishing_Age();
function get_Phishing_Age() {
	$.ajax({
		url: "http://api.odcloud.kr/api/15091221/v1/uddi:e359f7f2-b59c-402f-9818-8d027df1a426?page=1&perPage=10&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------	
			// 연도에 맞게(select 태그) 데이터 요청 지정
			let year = $("#phishing_age_year").val();
			let arr = data['data'];
			let chart_data = [];
			if (year == "2016년") {
				chart_data = arr[0];
			} else if (year == "2017년") {
				chart_data = arr[1];
			} else if (year == "2018년") {
				chart_data = arr[2];
			} else if (year == "2019년") {
				chart_data = arr[3];
			} else if (year == "2020년") {
				chart_data = arr[4];
			}
			//----------------------------------------------------------------------
			var context = document.getElementById('phishing_age_chart').getContext('2d');
			var phishing_age_chart = new Chart(context,
				{
					type: 'bar',             // 차트의 형태
					data: {                      // 차트에 들어갈 데이터
						labels: //x 축
							['20대 이하',
								'30대',
								'40대',
								'50대',
								'60대',
								'70대 이상'
							],
						datasets: [{             //데이터
							label: '발생건수',    //차트 제목
							data:  //x축 label에 대응되는 데이터 값
								[chart_data['20대이하'],
								chart_data['30대'],
								chart_data['40대'],
								chart_data['50대'],
								chart_data['60대'],
								chart_data['70대이상']
								],
							backgroundColor: 'rgba(255, 99, 132, 0.8)',
							borderColor: 'rgb(255, 99, 132)'
						},

						]
					},
					options: {
						responsive: true, // 크기 지정 가능하게 함(기본값 true 자동 크기)
						maintainAspectRatio :false, // 비율고정 해제
						plugins: {
							legend: {
								position: 'top',
							}
						},
						title: {
							display: true,
							text: year
						},
					}
				}
			);
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
}