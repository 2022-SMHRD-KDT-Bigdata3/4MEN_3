window.onload = Cyber_month_data();
function Cyber_month_data() {
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

			// 20년도, 16년도 데이터 추출
			let ge_cnt_2020 = arr[12];
			let ge_cnt_2016 = arr[4];
			
			// 연도에 맞게 데이터 추출
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
			
			// 값들만 비교하기 위해 '연도'와 '구분' key는 지운다.
			delete ge_cnt['연도']; 
			delete ge_cnt['구분'];
			delete ar_cnt['연도']; 
			delete ar_cnt['구분'];
			delete ge_cnt_2020['구분'];
			delete ge_cnt_2020['연도'];
			delete ge_cnt_2016['구분'];
			delete ge_cnt_2016['연도'];
			
			// 해당 년도의 발생건수와 검거건수의 총합 추출하기
			var keys = Object.keys(ge_cnt); // 키를 가져옴. 이때, keys 는 반복가능한 객체가 됨.
			let ge_cnt_total_2020 = 0;
			let ge_cnt_total_2016 = 0;
			let ge_cnt_total = 0;
			let ar_cnt_total = 0;
			for (var i=0; i < keys.length; i++) {
    			var key = keys[i];
				ge_cnt_total += ge_cnt[key];
				ar_cnt_total += ar_cnt[key];
				ge_cnt_total_2020 += ge_cnt_2020[key];
				ge_cnt_total_2016 += ge_cnt_2016[key];
   			}

			// text 전송
			$('#year_CyberMonth').text($("#month_Cyber_year").val());
			$('#CyberMonth_geCnt').text(Math.floor(ge_cnt_total/10000)+"만 "+(ge_cnt_total%10000)+"건");
			$('#CyberMonth_arCnt').text(Math.floor(ar_cnt_total/10000)+"만 "+(ar_cnt_total%10000)+"건");
			$('#CyberMonth_pct').text("약 "+ Math.floor((ar_cnt_total/ge_cnt_total)*100)+"%");
			$('#CyberMonth_geCnt_2020').text(Math.floor(ge_cnt_total_2020/10000)+"만 "+(ge_cnt_total_2020%10000)+"건");
			$('#CyberMonth_gePct_1620').text("약 "+ Math.floor(((ge_cnt_total_2020 - ge_cnt_total_2016)/ge_cnt_total_2016)*100)+"%");
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패");
		}
	});
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
			// 21년도, 18년도 데이터 추출
			let Tff_cnt_2021 = [];
			let Tff_cnt_2018 = [];
			for (var i = 36; i < 48; i++) {
					Tff_cnt_2021.push(arr[i]['전화금융사기 발생건수']);
				}
			for (var i = 0; i < 12; i++) {
					Tff_cnt_2018.push(arr[i]['전화금융사기 발생건수']);
				}
			
			// 해당 년도의 발생건수와 검거건수의 총합 추출하기
			let Tff_cnt_total_2021 = 0;
			let Tff_cnt_total_2018 = 0;
			let Tff_cnt_total = 0;
			for (var i=0; i < Tff_cnt.length; i++) {
				Tff_cnt_total += Tff_cnt[i];
				Tff_cnt_total_2021 += Tff_cnt_2021[i];
				Tff_cnt_total_2018 += Tff_cnt_2018[i];
   			}
			
			// text 전송
			$('#year_PhishingMonth').text($("#month_Phishing_year").val());
			$('#PhishingMonth_geCnt').text(Math.floor(Tff_cnt_total/10000)+"만 "+(Tff_cnt_total%10000)+"건");
			$('#PhishingMonth_geCnt_2021').text(Math.floor(Tff_cnt_total_2021/10000)+"만 "+(Tff_cnt_total_2021%10000)+"건");
			$('#PhishingMonth_gePct_1821').text("약 "+ Math.floor(((Tff_cnt_total_2021 - Tff_cnt_total_2018)/Tff_cnt_total_2018)*100)+"%");
						
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
}