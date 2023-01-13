window.onload = get_VP_Region();
function get_VP_Region() {

/*
	let wrttimeid_arr = []; // 연도 전역변수 설정
	let seq_arr = []; // 번호 전역변수 설정
	let regi_arr = []; // 지역 전역변수 설정
	let population_arr = []; // 인구수 전역변수 설정
*/
	// 연도와 구분에 맞게끔 데이터 추출


/*
	$.ajax({ // 13년도 데이터 ~ 16년도 데이터 → api가 한번에 못 들고 오기에 나눠서 들고온다.
		url: "https://apis.data.go.kr/1741000/RegistrationPopulationByRegion/getRegistrationPopulationByRegion?ServiceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D&pageNo=3&numOfRows=50", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		async: false, // 동기방식으로 변경(기본값 true) → xml open api는 너무 느리다...그래서 ajax를 동기방식으로 부여 했다!
		dataType: "XML",// 결과 데이터를 받는 형식
		success: function(data) {

			// XML은 HTML과 비슷 → 태그명으로 접근
			// jquery.find() → 요소에 접근
			// .eq(i) → 해당 요소를 인덱스로 보며, 인덱스에 맞게 접근하는 함수
			// text() → 요소의 내용(contant)에 접근

			console.log("통신성공"); // 비동신 통신에 성공했을 시

			let len = $(data).find("seq").length; // 데이터 길이

			for (var i = 0; i < len; i++) { // 배열에 추가
				wrttimeid_arr.push($(data).find("wrttimeid").eq(i).text());
				seq_arr.push($(data).find("seq").eq(i).text());
				regi_arr.push($(data).find("regi").eq(i).text());
				population_arr.push($(data).find("population_tot").eq(i).text());
			}
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
	$.ajax({ // 16년도 데이터 ~ 19년도 데이터 → api가 한번에 못 들고 오기에 나눠서 들고온다.
		url: "https://apis.data.go.kr/1741000/RegistrationPopulationByRegion/getRegistrationPopulationByRegion?ServiceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D&pageNo=4&numOfRows=50", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		async: false,
		dataType: "XML",// 결과 데이터를 받는 형식
		success: function(data) {

			console.log("통신성공"); // 비동신 통신에 성공했을 시

			let len = $(data).find("seq").length; // 데이터 길이

			for (var i = 0; i < len; i++) { // 배열에 추가
				wrttimeid_arr.push($(data).find("wrttimeid").eq(i).text());
				seq_arr.push($(data).find("seq").eq(i).text());
				regi_arr.push($(data).find("regi").eq(i).text());
				population_arr.push($(data).find("population_tot").eq(i).text());
			}
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
	$.ajax({ // 19년도 데이터 ~ 21년도 데이터 → api가 한번에 못 들고 오기에 나눠서 들고온다.
		url: "https://apis.data.go.kr/1741000/RegistrationPopulationByRegion/getRegistrationPopulationByRegion?ServiceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D&pageNo=5&numOfRows=50", // 통신하고 싶은 서버의 url
		method: "GET", // 데이터 전송방식
		data: {}, // 데이터를 보내는 곳
		async: false, // 동기방식으로 변경(기본값 true)
		dataType: "XML",// 결과 데이터를 받는 형식
		success: function(data) {

			// XML은 HTML과 비슷 → 태그명으로 접근
			// jquery.find() → 요소에 접근
			// .eq(i) → 해당 요소를 인덱스로 보며, 인덱스에 맞게 접근하는 함수
			// text() → 요소의 내용(contant)에 접근

			console.log("통신성공"); // 비동신 통신에 성공했을 시

			let len = $(data).find("seq").length; // 데이터 길이

			for (var i = 0; i < len; i++) { // 배열에 추가
				wrttimeid_arr.push($(data).find("wrttimeid").eq(i).text());
				seq_arr.push($(data).find("seq").eq(i).text());
				regi_arr.push($(data).find("regi").eq(i).text());
				population_arr.push($(data).find("population_tot").eq(i).text());
			}

			//----------------------------------------------------------------------			
			// 해당 연도에 맞게 인구 데이터 추출
			//----------------------------------------------------------------------		
			wrttimeid_arr.splice(0, 4); // 13년도 데이터 삭제 
			seq_arr.splice(0, 4); // 13년도 데이터 삭제
			regi_arr.splice(0, 4); // 13년도 데이터 삭제
			population_arr.splice(0, 4); // 13년도 데이터 삭제
			console.log(wrttimeid_arr);

			let wrttimeid_data = []; // 해당 연도 '연도' 슬라이싱
			let seq_data = []; // 해당 연도 '번호' 슬라이싱
			let regi_data = []; // 해당 연도 '지역' 슬라이싱
			let population_data = []; // 해당 연도 '인구수' 슬라이싱

			// select-option의 연도수에 맞게 데이터 분할
			if (year == "2014년") {
				wrttimeid_data = wrttimeid_arr.slice(0, 18);
				seq_data = seq_arr.slice(0, 18);
				regi_data = regi_arr.slice(0, 18);
				population_data = population_arr.slice(0, 18);
			} else if (year == "2015년") {
				wrttimeid_data = wrttimeid_arr.slice(18, 36);
				seq_data = seq_arr.slice(18, 36);
				regi_data = regi_arr.slice(18, 36);
				population_data = population_arr.slice(18, 36);
			} else if (year == "2016년") {
				wrttimeid_data = wrttimeid_arr.slice(36, 54);
				seq_data = seq_arr.slice(36, 54);
				regi_data = regi_arr.slice(36, 54);
				population_data = population_arr.slice(36, 54);
			} else if (year == "2017년") {
				wrttimeid_data = wrttimeid_arr.slice(54, 72);
				seq_data = seq_arr.slice(54, 72);
				regi_data = regi_arr.slice(54, 72);
				population_data = population_arr.slice(54, 72);
			} else if (year == "2018년") {
				wrttimeid_data = wrttimeid_arr.slice(72, 90);
				seq_data = seq_arr.slice(72, 90);
				regi_data = regi_arr.slice(72, 90);
				population_data = population_arr.slice(72, 90);
			} else if (year == "2019년") {
				wrttimeid_data = wrttimeid_arr.slice(90, 108);
				seq_data = seq_arr.slice(90, 108);
				regi_data = regi_arr.slice(90, 108);
				population_data = population_arr.slice(90, 108);
			} else if (year == "2020년") {
				wrttimeid_data = wrttimeid_arr.slice(108, 126);
				seq_data = seq_arr.slice(108, 126);
				regi_data = regi_arr.slice(108, 126);
				population_data = population_arr.slice(108, 126);
			} else if (year == "2021년") {
				wrttimeid_data = wrttimeid_arr.slice(126, 144);
				seq_data = seq_arr.slice(126, 144);
				regi_data = regi_arr.slice(126, 144);
				population_data = population_arr.slice(126, 144);
			}

			console.log(wrttimeid_data);
			console.log(seq_data);
			console.log(regi_data);
			console.log(population_data);
			*/
		//---------------------------------------------------------------------------
			// ajax를 동기방식으로 처리하니 시간이 너무 많이 걸림... async로는 힘듬.. 
			// popul.jsp에서 api로 인구수 14년도부터 21년도 데이터 구한 뒤 배열로 복사해서 데이터 전처리...ㅠ
			// 순번
			let sq_arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144];
			// 연도
			let wrt_arr = ["2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2017","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2018","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2019","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2020","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021","2021"];
			// 지역
			let regi_arr = ["계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주","계","서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주"];
			// 인구수 total
			let popul_arr = [51327916,10103233,3519401,2493264,2902608,1475884,1531809,1166377,156125,12357830,1544442,1578933,2062273,1871560,1905780,2700794,3350257,607346,51529338,10022181,3513777,2487829,2925815,1472199,1518775,1173534,210884,12522606,1549507,1583952,2077649,1869711,1908996,2702826,3364702,624395,51696216,9930616,3498529,2484557,2943069,1469214,1514370,1172304,243048,12716780,1550806,1591625,2096727,1864791,1903914,2700398,3373871,641597,51778544,9857426,3470653,2475231,2948542,1463770,1502227,1165132,280100,12873895,1550142,1594432,2116770,1854607,1896424,2691706,3380404,657083,51826059,9765623,3441453,2461769,2954642,1459336,1489936,1155623,314126,13077153,1543052,1599252,2126282,1836832,1882970,2676831,3373988,667191,51849861,9729107,3413841,2438031,2957026,1456468,1474870,1148019,340575,13239666,1541502,1600007,2123709,1818917,1868745,2665836,3362553,670989,51829023,9668465,3391946,2418346,2942828,1450062,1463882,1136017,355831,13427014,1542840,1600837,2121029,1804104,1851549,2639422,3340216,674635,51638809,9509458,3350380,2385412,2948375,1441611,1452251,1121592,371895,13565450,1538492,1597427,2119257,1786855,1832803,2626609,3314183,676759];

		//---------------------------------------------------------------------------
			$.ajax({ // 지역별 보이스피범죄 발생건 api
				url: "https://api.odcloud.kr/api/15091224/v1/uddi:74e5825b-ab3d-418e-9af9-c35429bcffb4?page=1&perPage=20&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
				method: "GET", // 데이터 전송방식
				data: {}, // 데이터를 보내는 곳
				dataType: "JSON",// 결과 데이터를 받는 형식
				success: function(data) { // 비동신 통신에 성공했을 시
					let year = $("#year_VP").val();
					let VP_data = data['data'];

					// 경기남부, 경기북부 통합
					let gg_data = VP_data[9][year] + VP_data[10][year];

					//----------------------------------------------------------------------
					// Google chart 부분(구현)
					// select-option의 연도수에 맞게 데이터 분할
					google.charts.load('current', {
						'packages': ['geochart'],
						'xlanguage': 'in'
					});
					
					// select-option의 연도수에 맞게 데이터 분할
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
					//----------------------------------------------------------------------
					// Google chart 부분(구현)
					// 인터넷 사기 범죄 현황에 맞는 지역차트(Geo chart)	
					google.charts.setOnLoadCallback(drawRegionsMap);

					function drawRegionsMap() {

						const data = google.visualization
							.arrayToDataTable([
								['Province', "피해현황"], //
								[{ v: 'KR-11', f: '서울' }, ((VP_data[1][year] / population_data[1])*1000)], // 서울 
								[{ v: 'KR-26', f: '부산' }, ((VP_data[2][year] / population_data[2])*1000)], // 부산 
								[{ v: 'KR-27', f: '대구' }, ((VP_data[3][year] / population_data[3])*1000)], // 대구 
								[{ v: 'KR-30', f: '대전' }, ((VP_data[6][year] / population_data[6])*1000)], // 대전 
								[{ v: 'KR-29', f: '광주' }, ((VP_data[5][year] / population_data[5])*1000)], // 광주 
								[{ v: 'KR-28', f: '인천' }, ((VP_data[4][year] / population_data[4])*1000)], // 인천 
								[{ v: 'KR-31', f: '울산' }, ((VP_data[7][year] / population_data[7])*1000)], // 울산 
								[{ v: 'KR-43', f: '충청북도' }, ((VP_data[12][year] / population_data[11])*1000)], // 충청북도 
								[{ v: 'KR-44', f: '충청남도' }, ((VP_data[13][year] / population_data[12])*1000)], // 충청남도
								[{ v: 'KR-42', f: '강원도' }, ((VP_data[11][year] / population_data[10])*1000)], // 강원도
								[{ v: 'KR-41', f: '경기도' }, ((gg_data / population_data[9])*1000)], // 경기도
								[{ v: 'KR-47', f: '경상북도' }, ((VP_data[16][year] / population_data[15])*1000)], // 경상북도
								[{ v: 'KR-48', f: '경상남도' }, ((VP_data[17][year] / population_data[16])*1000)], // 경상남도
								[{ v: 'KR-45', f: '전라북도' }, ((VP_data[14][year] / population_data[13])*1000)], // 전라북도
								[{ v: 'KR-46', f: '전라남도' }, ((VP_data[15][year] / population_data[14])*1000)], // 전라남도
								[{ v: 'KR-49', f: '제주도' }, ((VP_data[18][year] / population_data[17])*1000)], // 제주도
								[{ v: 'KR-50', f: '세종' }, ((VP_data[8][year] / population_data[8])*1000)] // 세종
							]);

						const options = {
							geochartVersion: 11,
							regioncoderVersion: 1,
							'region': 'KR',
							'resolution': 'provinces',
							colorAxis: { colors: ['#FAFAD2', '#FFCD28', '#EB5A5A'] },
							backgroundColor: '#81d4fa',
							datalessRegionColor: '#dcdcdc'
						};

						var chart = new google.visualization.GeoChart(
							document.getElementById('VP_regions_div'));

						chart.draw(data, options);
					}
					//----------------------------------------------------------------------
					// Google chart 부분(구현)
					// 발생건수, 검거건수에 맞는 테이블차트(Table chart)
					google.charts.load('current', {
						'packages': ['table']
					});
					google.charts.setOnLoadCallback(drawTable);
					function drawTable() {
						var data = new google.visualization.DataTable();
						data.addColumn('string', '지역이름');
						data.addColumn('number', '인구 천명당 발생비((발생건수/인구수*1000))');
						data.addRows([
							[{ v: 'KR-11', f: '서울' }, ((VP_data[1][year] / population_data[1])*1000)], // 서울 
							[{ v: 'KR-26', f: '부산' }, ((VP_data[2][year] / population_data[2])*1000)], // 부산 
							[{ v: 'KR-27', f: '대구' }, ((VP_data[3][year] / population_data[3])*1000)], // 대구 
							[{ v: 'KR-30', f: '대전' }, ((VP_data[6][year] / population_data[6])*1000)], // 대전 
							[{ v: 'KR-29', f: '광주' }, ((VP_data[5][year] / population_data[5])*1000)], // 광주 
							[{ v: 'KR-28', f: '인천' }, ((VP_data[4][year] / population_data[4])*1000)], // 인천 
							[{ v: 'KR-31', f: '울산' }, ((VP_data[7][year] / population_data[7])*1000)], // 울산 
							[{ v: 'KR-43', f: '충청북도' }, ((VP_data[12][year] / population_data[11])*1000)], // 충청북도 
							[{ v: 'KR-44', f: '충청남도' }, ((VP_data[13][year] / population_data[12])*1000)], // 충청남도
							[{ v: 'KR-42', f: '강원도' }, ((VP_data[11][year] / population_data[10])*1000)], // 강원도
							[{ v: 'KR-41', f: '경기도' }, ((gg_data / population_data[9])*1000)], // 경기도
							[{ v: 'KR-47', f: '경상북도' }, ((VP_data[16][year] / population_data[15])*1000)], // 경상북도
							[{ v: 'KR-48', f: '경상남도' }, ((VP_data[17][year] / population_data[16])*1000)], // 경상남도
							[{ v: 'KR-45', f: '전라북도' },((VP_data[14][year] / population_data[13])*1000)], // 전라북도
							[{ v: 'KR-46', f: '전라남도' },((VP_data[15][year] / population_data[14])*1000)], // 전라남도
							[{ v: 'KR-49', f: '제주도' }, ((VP_data[18][year] / population_data[17])*1000)], // 제주도
							[{ v: 'KR-50', f: '세종' }, ((VP_data[8][year] / population_data[8])*1000)] // 세종
						]);

						var table = new google.visualization.Table(document.getElementById('VP_table_div'));


						var formatter = new google.visualization.BarFormat({
							width: 120
						});
						formatter.format(data, 1); // Apply formatter to second column

						table.draw(data, {
							allowHtml: true,
							showRowNumber: true,
							width: '100%',
							height: '550px'
						});
					}
				},
				error: function() {
					// 비동기 통신에 실패했을 시
					console.log("통신실패")
				}
			});
/*
		},
		error: function() {
			// 비동기 통신에 실패했을 시
			console.log("통신실패")
		}
	});
*/
}