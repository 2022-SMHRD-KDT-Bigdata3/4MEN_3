// ----------------------------------------------------------------------------------------
// main_status ajax
// 사이버 사기 연도 및 발생건수
$.ajax({
	url: "https://api.odcloud.kr/api/15053884/v1/uddi:03db8892-d4e4-41e7-8227-cf024446bcbf?page=1&perPage=15&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
	method: "GET", // 데이터 전송방식
	data: {}, // 데이터를 보내는 곳
	dataType: "JSON",// 결과 데이터를 받는 형식
	success: function(data) { // 비동신 통신에 성공했을 시
		//----------------------------------------------------------------------	
		// 월별 사이버 범죄의 json을 받아와서 해당 태그에 최근년도 데이터 보내주기
		let CC_year = data['data'][12]['연도'];
		let CC_cnt = data['data'][12]['1월'];
		CC_cnt += data['data'][12]['2월'];
		CC_cnt += data['data'][12]['3월'];
		CC_cnt += data['data'][12]['4월'];
		CC_cnt += data['data'][12]['5월'];
		CC_cnt += data['data'][12]['6월'];
		CC_cnt += data['data'][12]['7월'];
		CC_cnt += data['data'][12]['8월'];
		CC_cnt += data['data'][12]['9월'];
		CC_cnt += data['data'][12]['10월'];
		CC_cnt += data['data'][12]['11월'];
		CC_cnt += data['data'][12]['12월'];
		// 데이터 정제 후 담아서 각 id선택자로 text 쏴줌
		$('#CC_year').text(CC_year + "년");
		
		// 전체 데이터 값 카운트 시작 
		var d1 = CC_cnt;
		$({
			// 0부터 시작
			val : 0
		}).animate({
			// 증가할 데이터 지정
			val : d1
		}, {
			// 어느정도의 속도로 증가할지 지정
			duration : 2000,
			step : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$("#CC_cnt").text(num+"건");
			},
			complete : function() {
				var num = numberWithCommas(Math.floor(this.val));
				$("#CC_cnt").text(num+"건");
			}
		});

		//3자리마다 , 찍기
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},
	error: function() {
		// 비동기 통신에 실패했을 시
		console.log("통신실패")
	}
});

// 보이스피싱 연도 및 발생건수
$.ajax({
	url: "https://api.odcloud.kr/api/15099013/v1/uddi:4c236b11-f5f7-4b59-9232-a283b727b41d?page=1&perPage=59&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
	method: "GET", // 데이터 전송방식
	data: {}, // 데이터를 보내는 곳
	dataType: "JSON",// 결과 데이터를 받는 형식
	success: function(data) { // 비동신 통신에 성공했을 시
		//----------------------------------------------------------------------	
		// 월별 보이스피싱의 json을 받아와서 해당 태그에 최근년도 데이터 보내주기
		let VP_year = data['data'][47]['년'];
		let VP_cnt = data['data'][36]['전화금융사기 발생건수'];
		VP_cnt += data['data'][37]['전화금융사기 발생건수'];
		VP_cnt += data['data'][38]['전화금융사기 발생건수'];
		VP_cnt += data['data'][39]['전화금융사기 발생건수'];
		VP_cnt += data['data'][40]['전화금융사기 발생건수'];
		VP_cnt += data['data'][41]['전화금융사기 발생건수'];
		VP_cnt += data['data'][42]['전화금융사기 발생건수'];
		VP_cnt += data['data'][43]['전화금융사기 발생건수'];
		VP_cnt += data['data'][44]['전화금융사기 발생건수'];
		VP_cnt += data['data'][45]['전화금융사기 발생건수'];
		VP_cnt += data['data'][46]['전화금융사기 발생건수'];
		VP_cnt += data['data'][47]['전화금융사기 발생건수'];
		// 데이터 정제 후 담아서 각 id선택자로 text 쏴줌
		$('#VP_year').text(VP_year + "년");
		
		// 전체 데이터 값 카운트 시작 
		var d2 = VP_cnt;

		$({
			// 0부터 시작
			val1 : 0

		}).animate({
			// 증가할 데이터 지정
			val1 : d2
		}, {
			// 어느정도의 속도로 증가할지 지정
			duration : 2000,
			step : function() {
				var num1 = numberWithCommas(Math.floor(this.val1));
				$("#VP_cnt").text(num1+"건");			},
			complete : function() {
				var num1 = numberWithCommas(Math.floor(this.val1));
				$("#VP_cnt").text(num1+"건")
			}
		});

		//3자리마다 , 찍기
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},
	error: function() {
		// 비동기 통신에 실패했을 시
		console.log("통신실패")
	}
});

// 전화금융사기 연도 피해액
$.ajax({
	url: "https://api.odcloud.kr/api/15081197/v1/uddi:9c5cb572-4417-4cf1-8437-bef22ee0cedf?page=1&perPage=10&serviceKey=%2B04bSK%2F2gyRcTGj5AvjARR2iIeTaB66jBNPjRpIbcoUQyzj6MXCJpe5XH5bMcxaG%2F3kgrVVZzBhXhaRoeeGB5Q%3D%3D", // 통신하고 싶은 서버의 url
	method: "GET", // 데이터 전송방식
	data: {}, // 데이터를 보내는 곳
	dataType: "JSON",// 결과 데이터를 받는 형식
	success: function(data) { // 비동신 통신에 성공했을 시
		//----------------------------------------------------------------------	
		// 인터넷 직거래 현황의 json을 받아와서 해당 태그에 최근년도 데이터 보내주기
		let IDT_Status_year = data['data'][5]['년도']
		let IDT_Status_won = data['data'][5]['피해총액(원)']
		// 데이터 정제 후 담아서 각 id선택자로 text 쏴줌
		$('#IDT_Status_year').text(IDT_Status_year);
		
		// 전체 데이터 값 카운트 시작 
		var d3 = parseInt(IDT_Status_won / 100000000);

		$({
			// 0부터 시작
			val2 : 0
		}).animate({
			// 증가할 데이터 지정
			val2 : d3
		}, {
			// 어느정도의 속도로 증가할지 지정
			duration : 2000,
			step : function() {
				var num2 = numberWithCommas(Math.floor(this.val2));
				$("#IDT_Status_won").text(num2+"억원");
			},
			complete : function() {
				var num2 = numberWithCommas(Math.floor(this.val2));
				$("#IDT_Status_won").text(num2+"억원");
			}
		});

		//3자리마다 , 찍기
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},
	error: function() {
		// 비동기 통신에 실패했을 시
		console.log("통신실패")
	}
});