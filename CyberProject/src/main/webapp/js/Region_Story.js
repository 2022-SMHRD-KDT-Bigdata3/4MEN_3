window.onload = Region_data();
function Region_data() {
	// ajax를 동기방식으로 처리하니 시간이 너무 많이 걸림... async로는 힘듬.. 
	// popul.jsp에서 api로 인구수 14년도부터 21년도 데이터 구한 뒤 배열로 복사해서 데이터 전처리...ㅠ
	// 순번
	let sq_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144];
	// 연도
	let wrt_arr = ["2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021"];
	// 지역
	let regi_arr = ["계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "계", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
	// 인구수 total
	let popul_arr = [51327916, 10103233, 3519401, 2493264, 2902608, 1475884, 1531809, 1166377, 156125, 12357830, 1544442, 1578933, 2062273, 1871560, 1905780, 2700794, 3350257, 607346, 51529338, 10022181, 3513777, 2487829, 2925815, 1472199, 1518775, 1173534, 210884, 12522606, 1549507, 1583952, 2077649, 1869711, 1908996, 2702826, 3364702, 624395, 51696216, 9930616, 3498529, 2484557, 2943069, 1469214, 1514370, 1172304, 243048, 12716780, 1550806, 1591625, 2096727, 1864791, 1903914, 2700398, 3373871, 641597, 51778544, 9857426, 3470653, 2475231, 2948542, 1463770, 1502227, 1165132, 280100, 12873895, 1550142, 1594432, 2116770, 1854607, 1896424, 2691706, 3380404, 657083, 51826059, 9765623, 3441453, 2461769, 2954642, 1459336, 1489936, 1155623, 314126, 13077153, 1543052, 1599252, 2126282, 1836832, 1882970, 2676831, 3373988, 667191, 51849861, 9729107, 3413841, 2438031, 2957026, 1456468, 1474870, 1148019, 340575, 13239666, 1541502, 1600007, 2123709, 1818917, 1868745, 2665836, 3362553, 670989, 51829023, 9668465, 3391946, 2418346, 2942828, 1450062, 1463882, 1136017, 355831, 13427014, 1542840, 1600837, 2121029, 1804104, 1851549, 2639422, 3340216, 674635, 51638809, 9509458, 3350380, 2385412, 2948375, 1441611, 1452251, 1121592, 371895, 13565450, 1538492, 1597427, 2119257, 1786855, 1832803, 2626609, 3314183, 676759];

	$.ajax({ // 지역별 인터넷 사기범죄 발생건 api
		url: "https://api.odcloud.kr/api/15080294/v1/uddi:2d69ce3a-f08b-4f4f-bc23-dc4850c2d9f5?page=1&perPage=50&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			//---------------------------------------------------------------------------
			// 연도와 구분에 맞게끔 데이터 추출(발생건수와 검거건수)
			let year = $("#year_ISC").val();

			let ISC_Region_data = data['data'];
			
			let ISC_Region_geCnt = {}; // 해당년도의 발생건수 추출
			// 연도별 분류
			if (year == "2014년") {
				ISC_Region_geCnt = ISC_Region_data[0];
			} else if (year == "2015년") {
				ISC_Region_geCnt = ISC_Region_data[3];
			} else if (year == "2016년") {
				ISC_Region_geCnt = ISC_Region_data[6];
			} else if (year == "2017년") {
				ISC_Region_geCnt = ISC_Region_data[9];
			} else if (year == "2018년") {
				ISC_Region_geCnt = ISC_Region_data[12];
			} else if (year == "2019년") {
				ISC_Region_geCnt = ISC_Region_data[15];
			}
			
			// select-option의 연도수에 맞게 인구수 데이터 분할
			let population_data = [];
			if (year == "2014년") {
				population_data = popul_arr.slice(0, 18);
			} else if (year == "2015년") {
				population_data = popul_arr.slice(18, 36);
			} else if (year == "2016년") {
				population_data = popul_arr.slice(36, 54);
			} else if (year == "2017년") {
				population_data = popul_arr.slice(54, 72);
			} else if (year == "2018년") {
				population_data = popul_arr.slice(72, 90);
			} else if (year == "2019년") {
				population_data = popul_arr.slice(90, 108);
			} else if (year == "2020년") {
				population_data = popul_arr.slice(108, 126);
			} else if (year == "2021년") {
				population_data = popul_arr.slice(126, 144);
			}
			
			// 경기, 경기남주, 경기북부 발생건수 데이터 통합
			let GGi_data = 0;
			if (ISC_Region_geCnt['경기'] != null) {
				GGi_data = ISC_Region_geCnt['경기'];
			} else {
				GGi_data = ISC_Region_geCnt['경기남부'] + ISC_Region_geCnt['경기북부'];
			}
			
			// 지역별 발생비에 대한 데이터 추출
			let Seoul_cnt = ISC_Region_geCnt['서울'];
			// top을 구하기 위해 object의 '경기' 다시 합치기
			delete ISC_Region_geCnt['경기'];
			delete ISC_Region_geCnt['경기남부'];
			delete ISC_Region_geCnt['경기북부'];
			ISC_Region_geCnt["경기"] = GGi_data;
			
			// 값들만 비교하기 위해 '연도'와 '구분' key는 지운다.
			delete ISC_Region_geCnt['연도']; 
			delete ISC_Region_geCnt['구분'];
			
			// 해당 년도의 인구수를 별도의 key값으로 추가해준다.
			ISC_Region_popul = {};
			ISC_Region_popul["서울"] = population_data[1];
			ISC_Region_popul["부산"] = population_data[2];
			ISC_Region_popul["대구"] = population_data[3];
			ISC_Region_popul["대전"] = population_data[6];
			ISC_Region_popul["광주"] = population_data[5];
			ISC_Region_popul["인천"] = population_data[4];
			ISC_Region_popul["울산"] = population_data[7];
			ISC_Region_popul["충북"] = population_data[11];
			ISC_Region_popul["충남"] = population_data[12];
			ISC_Region_popul["강원"] = population_data[10];
			ISC_Region_popul["경기"] = population_data[9];
			ISC_Region_popul["경북"] = population_data[15];
			ISC_Region_popul["경남"] = population_data[16];
			ISC_Region_popul["전북"] = population_data[13];
			ISC_Region_popul["전남"] = population_data[14];
			ISC_Region_popul["제주"] = population_data[17];
			ISC_Region_popul["세종"] = population_data[8];
			
			// 발생비가 가장 높은 지역, 발생건수, 인구수, 발생비 구하기
		    var keys = Object.keys(ISC_Region_geCnt); // 키를 가져옴. 이때, keys 는 반복가능한 객체가 됨.
			let top_region_cnt = ISC_Region_geCnt['강원']; // 발생비가 높은 지역의 발생건수를 찾기 위한 초기화
			let top_region_popul = ISC_Region_popul['강원']; // 발생비가 높은 지역의 인구수를 찾기 위한 초기화
			let top_region_pct = (ISC_Region_geCnt['강원']/ISC_Region_popul['강원'])*1000; // 발생비가 높은 지역의 발생비를 찾기 위한 초기화
		    for (var i=0; i < keys.length; i++) {
    			var key = keys[i];
				if((ISC_Region_geCnt[key]/ISC_Region_popul[key])*1000 > top_region_pct){
					var top_region = keys[i];				// 발생비가 높은 지역의 key값을 변수에 저장
					top_region_cnt = ISC_Region_geCnt[key];	// 발생비가 높은 지역의 발생건수를 변수에 저장
					top_region_popul = ISC_Region_popul[key];	// 발생비가 높은 지역의 인구수를 변수에 저장
					top_region_pct = (ISC_Region_geCnt[key]/ISC_Region_popul[key])*1000;	// 발생비가 높은 지역의 발생비를 변수에 저장
				}
   			}

			// text 전송
			$('#year_ISC_Region').text($("#year_ISC").val());
			$('#cnt_ISC_Region_Seoul').text(Math.floor(Seoul_cnt/10000)+"만 "+(Seoul_cnt%10000)+"건");
			$('#cnt_ISC_Region_GGi').text(Math.floor(GGi_data/10000)+"만 "+(GGi_data%10000)+"건");
			$('#ISC_Region_Top').text(top_region);
			$('#ISC_Region_Top_cnt').text(Math.floor(top_region_cnt)+"건");
			$('#ISC_Region_Top_popul').text(Math.floor(top_region_popul/10000)+"만 "+(top_region_popul%10000)+"명");
			$('#ISC_Region_Top_pct').text(top_region_pct.toFixed(3)+"%");
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
	$.ajax({ // 지역별 보이스피범죄 발생건 api
		url: "https://api.odcloud.kr/api/15091224/v1/uddi:74e5825b-ab3d-418e-9af9-c35429bcffb4?page=1&perPage=20&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		dataType: "JSON",// 결과 데이터를 받는 형식
		success: function(data) { // 비동신 통신에 성공했을 시
			let year = $("#year_VP").val();
			let VP_data = data['data'];

			// 경기남부, 경기북부 통합
			let GGi_data = VP_data[9][year] + VP_data[10][year];
			
			// select-option의 연도수에 맞게 인구 데이터 분할
			let population_data = [];
			if (year == "2014년") {
				population_data = popul_arr.slice(0, 18);
			} else if (year == "2015년") {
				population_data = popul_arr.slice(18, 36);
			} else if (year == "2016년") {
				population_data = popul_arr.slice(36, 54);
			} else if (year == "2017년") {
				population_data = popul_arr.slice(54, 72);
			} else if (year == "2018년") {
				population_data = popul_arr.slice(72, 90);
			} else if (year == "2019년") {
				population_data = popul_arr.slice(90, 108);
			} else if (year == "2020년") {
				population_data = popul_arr.slice(108, 126);
			} else if (year == "2021년") {
				population_data = popul_arr.slice(126, 144);
			}
			
			// 해당 년도의 인구수를 별도의 key값으로 추가해준다.
			VP_Region_popul = {};
			VP_Region_popul["서울"] = population_data[1];
			VP_Region_popul["부산"] = population_data[2];
			VP_Region_popul["대구"] = population_data[3];
			VP_Region_popul["대전"] = population_data[6];
			VP_Region_popul["광주"] = population_data[5];
			VP_Region_popul["인천"] = population_data[4];
			VP_Region_popul["울산"] = population_data[7];
			VP_Region_popul["충북"] = population_data[11];
			VP_Region_popul["충남"] = population_data[12];
			VP_Region_popul["강원"] = population_data[10];
			VP_Region_popul["경기"] = population_data[9];
			VP_Region_popul["경북"] = population_data[15];
			VP_Region_popul["경남"] = population_data[16];
			VP_Region_popul["전북"] = population_data[13];
			VP_Region_popul["전남"] = population_data[14];
			VP_Region_popul["제주"] = population_data[17];
			VP_Region_popul["세종"] = population_data[8];
			
			// 해당 년도에 맞는 VP 지역별 data 담아주기
			VP_Region_geCnt = {};
			VP_Region_geCnt["서울"] = VP_data[1][year];
			VP_Region_geCnt["부산"] = VP_data[2][year];
			VP_Region_geCnt["대구"] = VP_data[3][year];
			VP_Region_geCnt["대전"] = VP_data[6][year];
			VP_Region_geCnt["광주"] = VP_data[5][year];
			VP_Region_geCnt["인천"] = VP_data[4][year];
			VP_Region_geCnt["울산"] = VP_data[7][year];
			VP_Region_geCnt["충북"] = VP_data[12][year];
			VP_Region_geCnt["충남"] = VP_data[13][year];
			VP_Region_geCnt["강원"] = VP_data[11][year];
			VP_Region_geCnt["경기"] = GGi_data;
			VP_Region_geCnt["경북"] = VP_data[16][year];
			VP_Region_geCnt["경남"] = VP_data[17][year];
			VP_Region_geCnt["전북"] = VP_data[14][year];
			VP_Region_geCnt["전남"] = VP_data[15][year];
			VP_Region_geCnt["제주"] = VP_data[18][year];
			VP_Region_geCnt["세종"] = VP_data[8][year];
			
			// 발생비가 가장 높은 지역, 발생건수, 인구수, 발생비 구하기
		    var keys = Object.keys(VP_Region_geCnt); // 키를 가져옴. 이때, keys 는 반복가능한 객체가 됨.
			let top_region_cnt = VP_Region_geCnt['강원']; // 발생비가 높은 지역의 발생건수를 찾기 위한 초기화
			let top_region_popul = VP_Region_popul['강원']; // 발생비가 높은 지역의 인구수를 찾기 위한 초기화
			let top_region_pct = (VP_Region_geCnt['강원']/VP_Region_popul['강원'])*1000; // 발생비가 높은 지역의 발생비를 찾기 위한 초기화
		    for (var i=0; i < keys.length; i++) {
    			var key = keys[i];
				if((VP_Region_geCnt[key]/VP_Region_popul[key])*1000 > top_region_pct){
					var top_region = keys[i];				// 발생비가 높은 지역의 key값을 변수에 저장
					top_region_cnt = VP_Region_geCnt[key];	// 발생비가 높은 지역의 발생건수를 변수에 저장
					top_region_popul = VP_Region_popul[key];	// 발생비가 높은 지역의 인구수를 변수에 저장
					top_region_pct = (VP_Region_geCnt[key]/VP_Region_popul[key])*1000;	// 발생비가 높은 지역의 발생비를 변수에 저장
				}
   			}
			
			// text 전송
			$('#year_VP_Region').text($("#year_VP").val());
			$('#VP_Region_Top').text(top_region);
			$('#VP_Region_Top_cnt').text(Math.floor(top_region_cnt)+"건");
			$('#VP_Region_Top_popul').text(Math.floor(top_region_popul/10000)+"만 "+(top_region_popul%10000)+"명");
			$('#VP_Region_Top_pct').text(top_region_pct.toFixed(3)+"%");
			
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
}