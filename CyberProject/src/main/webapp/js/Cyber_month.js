window.onload = get_Cyber_month();
function get_Cyber_month() {
	$.ajax({
		url: "http://api.odcloud.kr/api/15053884/v1/uddi:03db8892-d4e4-41e7-8227-cf024446bcbf?page=1&perPage=15&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------   
			// 연도에 맞게(select 태그) 데이터 요청 지정 및 분류
			let year = $("#month_Cyber_year").val();
			let arr = data['data'];

			let ge_cnt = {};
			let ar_cnt = {};

			if (year == '2014년') {
				ge_cnt = arr[0];
				ar_cnt = arr[1];
			} else if (year == '2015년') {
				ge_cnt = arr[2];
				ar_cnt = arr[3];
			} else if (year == '2016년') {
				ge_cnt = arr[4];
				ar_cnt = arr[5];
			} else if (year == '2017년') {
				ge_cnt = arr[6];
				ar_cnt = arr[7];
			} else if (year == '2018년') {
				ge_cnt = arr[8];
				ar_cnt = arr[9];
			} else if (year == '2019년') {
				ge_cnt = arr[10];
				ar_cnt = arr[11];
			} else if (year == '2020년') {
				ge_cnt = arr[12];
				ar_cnt = arr[13];
			}
			//----------------------------------------------------------------------
			// chart.js 부분(구현)
			var context = document.getElementById('month_Cyber_Chart').getContext('2d');
			var month_Cyber_Chart = new Chart(context,
				{
					type: 'bar',             // 차트의 형태
					data: {                      // 차트에 들어갈 데이터
						labels: //x 축
							['1월',
								'2월',
								'3월',
								'4월',
								'5월',
								'6월',
								'7월',
								'8월',
								'9월',
								'10월',
								'11월',
								'12월'
							],
						datasets: [{             //데이터
							label: '발생건수',    //차트 제목
							data:  //x축 label에 대응되는 데이터 값
								[ge_cnt['1월'],
								ge_cnt['2월'],
								ge_cnt['3월'],
								ge_cnt['4월'],
								ge_cnt['5월'],
								ge_cnt['6월'],
								ge_cnt['7월'],
								ge_cnt['8월'],
								ge_cnt['9월'],
								ge_cnt['10월'],
								ge_cnt['11월'],
								ge_cnt['12월'],

								],
							backgroundColor: 'rgba(255, 99, 132, 0.8)',
							borderColor: 'rgb(255, 99, 132)'
						},
						{
							label: '검거건수',    //차트 제목
							// line 형태일 때, 선 안쪽을 채우는지 안채우는지
							data:  //x축 label에 대응되는 데이터 값
								[ar_cnt['1월'],
								ar_cnt['2월'],
								ar_cnt['3월'],
								ar_cnt['4월'],
								ar_cnt['5월'],
								ar_cnt['6월'],
								ar_cnt['7월'],
								ar_cnt['8월'],
								ar_cnt['9월'],
								ar_cnt['10월'],
								ar_cnt['11월'],
								ar_cnt['12월'],
								],
							backgroundColor: 'rgba(54, 162, 235, 0.2)',
							borderColor: 'rgb(54, 162, 235)'

						}
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
		}
		,
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
}