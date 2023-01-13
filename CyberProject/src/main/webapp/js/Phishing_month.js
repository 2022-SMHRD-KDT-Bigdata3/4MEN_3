window.onload = get_Phishing_month();
function get_Phishing_month() {
	$.ajax({
		url: "http://api.odcloud.kr/api/15099013/v1/uddi:4c236b11-f5f7-4b59-9232-a283b727b41d?page=1&perPage=58&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------   
			// 연도에 맞게(select 태그) 데이터 요청 지정 및 분류
			let year = $("#month_Phishing_year").val();
			let arr = data['data'];

			let Tff_cnt = [];
			if (year == '2018년') {
				for (var i = 0; i < 12; i++) {
					Tff_cnt.push(arr[i]['전화금융사기 발생건수']);
				}
			} else if (year == '2019년') {
				for (var i = 12; i < 24; i++) {
					Tff_cnt.push(arr[i]['전화금융사기 발생건수']);
				}
			} else if (year == '2020년') {
				for (var i = 24; i < 36; i++) {
					Tff_cnt.push(arr[i]['전화금융사기 발생건수']);
				}
			} else if (year == '2021년') {
				for (var i = 36; i < 48; i++) {
					Tff_cnt.push(arr[i]['전화금융사기 발생건수']);
				}
			}
			//----------------------------------------------------------------------
			// chart.js 부분(구현)
			var context = document.getElementById('month_Phishing_Chart').getContext('2d');
			var month_Phishing_Chart = new Chart(context,
				{
					type: 'line',             // 차트의 형태
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
							label: '월별 보이스피싱 현황',    //차트 제목
							fill: false,          // line 형태일 때, 선 안쪽을 채우는지 안채우는지
							data:  //x축 label에 대응되는 데이터 값
								[Tff_cnt[0],
								Tff_cnt[1],
								Tff_cnt[2],
								Tff_cnt[3],
								Tff_cnt[4],
								Tff_cnt[5],
								Tff_cnt[6],
								Tff_cnt[7],
								Tff_cnt[8],
								Tff_cnt[9],
								Tff_cnt[10],
								Tff_cnt[11]
								],
							borderColor: 'rgba(255,0,0, 0.8)',
							stepped: true
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
						interaction: {
							intersect: false,
							axis: 'x'
						},
						plugins: {
							title: {
								display: true,
								text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
							}
						}
					}
				}
			);

		}

		//----------------------------------------------------------------------

		//----------------------------------------------------------------------  
		,
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
}