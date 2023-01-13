window.onload = get_Phishing_Status();
function get_Phishing_Status() {
	$.ajax({
		url: "https://api.odcloud.kr/api/15063815/v1/uddi:754afc24-fc2f-49f6-8b2b-e232e6455bd4?page=1&perPage=10&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------	
			// 연도에 맞게(select 태그) 데이터 요청 지정
			let category = $("#category_Phishing").val();
			let arr = data['data'];
			let impersonation_generation = [];
			let impersonation_arrest = [];
			let loan_generation = [];
			let loan_arrest = [];

			for (var i = 0; i < arr.length; i++) {
				impersonation_generation
					.push(arr[i]['기관사칭형_발생건수']);
				impersonation_arrest.push(arr[i]['기관사칭형_검거건수']);
				loan_generation.push(arr[i]['대출사기형_발생건수']);
				loan_arrest.push(arr[i]['대출사기형_검거건수']);
			}

			let g_data = [];
			let a_data = [];
			if (category == '기관사칭형') {
				g_data = impersonation_generation;
				a_data = impersonation_arrest;
			} else {
				g_data = loan_generation;
				a_data = loan_arrest;
			}

			//----------------------------------------------------------------------
			var context = document.getElementById('phishing_Status_Chart')
				.getContext('2d');
			var phishing_Status_Chart = new Chart(
				context,
				{
					type: 'bar', // 차트의 형태
					data: { // 차트에 들어갈 데이터
						labels: //x 축
							['2016년', '2017년', '2018년',
								'2019년', '2020년',],
						datasets: [
							{ //데이터
								label: '검거율', //차트 제목
								fill: false,
								data: //x축 label에 대응되는 데이터 값
									[
										((a_data[0] / g_data[0]) * 10000),
										((a_data[1] / g_data[1]) * 10000),
										((a_data[2] / g_data[2]) * 10000),
										((a_data[3] / g_data[3]) * 10000),
										((a_data[4] / g_data[4]) * 10000),],
								borderColor: 'rgba(255, 12, 12,0.8)',
								type: 'line'
							},
							{ //데이터
								label: '발생건수', //차트 제목
								data: //x축 label에 대응되는 데이터 값
									[g_data[0], g_data[1],
									g_data[2],
									g_data[3],
									g_data[4],],
								backgroundColor: 'rgb(35,204,153)'
							},
							{ //데이터
								label: '검거건수', //차트 제목
								data: //x축 label에 대응되는 데이터 값
									[a_data[0], a_data[1],
									a_data[2],
									a_data[3],
									a_data[4],],
								backgroundColor: 'rgb(255,250,205)'
							}
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
							text: category
						},
					}
				});
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
}