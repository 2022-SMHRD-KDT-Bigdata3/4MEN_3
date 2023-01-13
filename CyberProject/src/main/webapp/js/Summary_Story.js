window.onload = Summary_data();
function Summary_data() {
	$.ajax({// 줄거리 구문에 맞게 사이버범죄 데이터 추출
		url: "http://api.odcloud.kr/api/15053884/v1/uddi:03db8892-d4e4-41e7-8227-cf024446bcbf?page=1&perPage=15&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------   
			// 줄거리 구문에 맞게 사이버범죄 데이터 추출
			let arr = data['data']; // data의 'data' 추출

			// 해당 년도별 발생건수 합계
			let ge_cnt_2018 = arr[8]['1월']+arr[8]['2월']+arr[8]['3월']+arr[8]['4월']+arr[8]['5월']+arr[8]['6월']+arr[8]['7월']+arr[8]['8월']+arr[8]['9월']+arr[8]['10월']+arr[8]['11월']+arr[8]['12월'];
			let ge_cnt_2019 = arr[10]['1월']+arr[10]['2월']+arr[10]['3월']+arr[10]['4월']+arr[10]['5월']+arr[10]['6월']+arr[10]['7월']+arr[10]['8월']+arr[10]['9월']+arr[10]['10월']+arr[10]['11월']+arr[10]['12월'];
			let ge_cnt_2020 = arr[12]['1월']+arr[12]['2월']+arr[12]['3월']+arr[12]['4월']+arr[12]['5월']+arr[12]['6월']+arr[12]['7월']+arr[12]['8월']+arr[12]['9월']+arr[12]['10월']+arr[12]['11월']+arr[12]['12월'];
			
			// 검거건수 년도별 및 증감율
			let ar_cnt_2018 = arr[9]['1월']+arr[9]['2월']+arr[9]['3월']+arr[9]['4월']+arr[9]['5월']+arr[9]['6월']+arr[9]['7월']+arr[9]['8월']+arr[9]['9월']+arr[9]['10월']+arr[9]['11월']+arr[9]['12월'];
			let ar_cnt_2019 = arr[11]['1월']+arr[11]['2월']+arr[11]['3월']+arr[11]['4월']+arr[11]['5월']+arr[11]['6월']+arr[11]['7월']+arr[11]['8월']+arr[11]['9월']+arr[11]['10월']+arr[11]['11월']+arr[11]['12월'];
			let ar_cnt_2020 = arr[13]['1월']+arr[13]['2월']+arr[13]['3월']+arr[13]['4월']+arr[13]['5월']+arr[13]['6월']+arr[13]['7월']+arr[13]['8월']+arr[13]['9월']+arr[13]['10월']+arr[13]['11월']+arr[13]['12월'];

			// 추출한 데이터 전송
			$('#ge_cnt_2018').text(Math.floor(ge_cnt_2018/10000)+"만 "+(ge_cnt_2018%10000)+"건");
			$('#ge_cnt_2019').text(Math.floor(ge_cnt_2019/10000)+"만 "+(ge_cnt_2019%10000)+"건");
			$('#ge_cnt_2020').text(Math.floor(ge_cnt_2020/10000)+"만 "+(ge_cnt_2020%10000)+"건");
			$('#ge_cnt_1820').text("약 "+ Math.floor(((ge_cnt_2020 - ge_cnt_2018)/ge_cnt_2018)*100)+"%");
			$('#ar_pct_2018').text("약 "+ Math.floor((ar_cnt_2018/ge_cnt_2018)*100)+"%");
			$('#ar_pct_2019').text("약 "+ Math.floor((ar_cnt_2019/ge_cnt_2019)*100)+"%");
			$('#ar_pct_2020').text("약 "+ Math.floor((ar_cnt_2020/ge_cnt_2020)*100)+"%");
			
			//----------------------------------------------------------------------
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
		$.ajax({// 줄거리 구문에 맞게 보이스피싱 데이터 추출
		url: "http://api.odcloud.kr/api/15099013/v1/uddi:4c236b11-f5f7-4b59-9232-a283b727b41d?page=1&perPage=58&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//----------------------------------------------------------------------   
			// 줄거리 구문에 맞게 보이스피싱 데이터 추출
			let arr = data['data']; // data의 'data' 추출

			// 2020년, 2021년도 발생건수 데이터 추출
			let Tff_cnt_2020 = 0;
			let Tff_cnt_2021 = 0;
			
			for (var i = 24; i < 36; i++) {
				Tff_cnt_2020 += arr[i]['전화금융사기 발생건수'];
				}
			for (var i = 36; i < 48; i++) {
				Tff_cnt_2021 += arr[i]['전화금융사기 발생건수'];
				}
				
			// 추출한 데이터 전송
			$('#Tff_cnt_2021').text(Math.floor(Tff_cnt_2021/10000)+"만 "+(Tff_cnt_2021%10000)+"건");
			$('#Tff_cnt_2020').text(Math.floor(Tff_cnt_2020/10000)+"만 "+(Tff_cnt_2020%10000)+"건");

		//----------------------------------------------------------------------
		},		
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
	
}