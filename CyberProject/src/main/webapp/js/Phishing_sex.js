window.onload = get_Phishing_Sex();
function get_Phishing_Sex() {
	$.ajax({
		url: "http://api.odcloud.kr/api/15091223/v1/uddi:4ba7b8d2-278a-40b2-87f2-dd53a80fd48c?page=1&perPage=10&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------	
			// 연도에 맞게(select 태그) 데이터 요청 지정
			let year = $("#phishing_Sex_year").val();
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
			var context = document.getElementById('phishing_Sex_chart').getContext('2d');
			var phishing_Sex_chart = new Chart(context,
				{
					type: 'doughnut',             // 차트의 형태
					data: {                      // 차트에 들어갈 데이터
						labels: //x 축
							['남성',
								'여성',
							],
						datasets: [{             //데이터
							label: '피해자 수',    //차트 제목
							data:  //x축 label에 대응되는 데이터 값
								[chart_data['남성'],
								chart_data['여성']
								],
							backgroundColor:
								['rgb(65,105,225)',
									'rgb(255, 99, 132)'],

						},

						]
					},
					options: {
						responsive: true,
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
			//----------------------------------------------------------------------  
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
}