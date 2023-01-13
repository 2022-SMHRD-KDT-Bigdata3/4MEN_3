window.onload = VP_data();
function VP_data() {
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
				impersonation_generation.push(arr[i]['기관사칭형_발생건수']);
				impersonation_arrest.push(arr[i]['기관사칭형_검거건수']);
				loan_generation.push(arr[i]['대출사기형_발생건수']);
				loan_arrest.push(arr[i]['대출사기형_검거건수']);
			}

			// 분류 선택에 맞게 유형, 증감율, 설명란 작성
			let g_data = [];
			let a_data = [];
			if (category == '기관사칭형') {
				g_data = impersonation_generation;
				a_data = impersonation_arrest;
				$('#VP_kind').text(category);
				$('iframe').attr("src", "https://www.youtube.com/embed/19nj1XPYa2U");
			} else {
				g_data = loan_generation;
				a_data = loan_arrest;
				$('#VP_kind').text(category);
				$('iframe').attr("src", "https://www.youtube.com/embed/mhAIHwK_db0");
				$('#VP_story').text();
			};
			//----------------------------------------------------------------------
			
			// 각 년도에 해당하는 데이터 추출
			let g_data_2016 = g_data[0];
			let g_data_2017 = g_data[1];
			let g_data_2018 = g_data[2];
			let g_data_2019 = g_data[3];
			let g_data_2020 = g_data[4];
			
			let agency_story = "기관사칭형의 경우 16년도 "+
								(Math.floor(g_data_2016/1000)+
								","+(g_data_2016%1000)+"건")+
								" 17년도 "+
								(Math.floor(g_data_2017/1000)+
								","+(g_data_2017%1000)+"건")+
								" 18년도 "+
								(Math.floor(g_data_2018/1000)+
								","+(g_data_2018%1000)+"건")+
								" 19년도 "+
								(Math.floor(g_data_2019/1000)+
								","+(g_data_2019%1000)+"건")+
								" 20년도 "+
								(Math.floor(g_data_2020/1000)+
								","+(g_data_2020%1000)+"건")+
								"으로 점차 증가하는 추세를 보이고 있다. "+
								"알면서도 누구나 보이스피싱 사기 피해자가 될 수 있기에, 각 유형별 주의사항에 대해 영상으로 시청가능하다.";
			
			let loan_story = "대출사기형의 경우 16년도 "+
								(Math.floor(g_data_2016/1000)+
								","+(g_data_2016%1000)+"건")+
								" 17년도 "+
								(Math.floor(g_data_2017/1000)+
								","+(g_data_2017%1000)+"건")+
								" 18년도 "+
								(Math.floor(g_data_2018/1000)+
								","+(g_data_2018%1000)+"건")+
								" 19년도 "+
								(Math.floor(g_data_2019/1000)+
								","+(g_data_2019%1000)+"건")+
								" 20년도 "+
								(Math.floor(g_data_2020/1000)+
								","+(g_data_2020%1000)+"건")+
								"으로 점차 증가하는 추세를 보이고 있다. "+
								"알면서도 누구나 보이스피싱 사기 피해자가 될 수 있기에, 각 유형별 주의사항에 대해 영상으로 시청가능하다.";
			
			if (category == '기관사칭형') {
				$('#VP_story').text(agency_story);
			} else {
				$('#VP_story').text(loan_story);
			};
						
			$('#VP_kind_pct').text("약 "+ Math.floor(((g_data_2020 - g_data_2016)/g_data_2016)*100)+"%");
			//----------------------------------------------------------------------
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
}