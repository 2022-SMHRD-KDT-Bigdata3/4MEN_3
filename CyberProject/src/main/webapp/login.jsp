<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<!-- CSS -->
<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<!-- Jquery -->
<script src="https://code.jquery.com/jquery-3.5.1.js"
	integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
	crossorigin="anonymous"></script>

</head>
<body>
	<div id="intro_bg">
		<div id="header">
			<div id="platform">
				<img src="./imges/platform.png" alt="">
				<h3>
					<a href="main.jsp" class="login_btn">Cyber Crime Platform</a>
				</h3>
			</div>
		</div>

		<div class="login-wrap">
			<div class="login-html">
				<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label
					for="tab-1" class="tab">Sign In</label> <input id="tab-2"
					type="radio" name="tab" class="sign-up"><label for="tab-2"
					class="tab">Sign Up</label>
				<div class="login-form">
					<div class="sign-in-htm">
						<div class="group">
							<label for="user" class="label">UserID</label> <input id="user"
								type="text" class="input">
						</div>
						<div class="group">
							<label for="pass" class="label">Password</label> <input id="pass"
								type="password" class="input" data-type="password">
						</div>
						<div class="group">
							<input type="submit" class="button" value="Sign In">
						</div>
						<div class="hr"></div>
					</div>
					<div class="sign-up-htm">
						<div class="group">
							<label for="user" class="label">UserID</label> <input id="user"
								type="text" class="input">
						</div>
						<div class="group">
							<label for="pass" class="label">Password</label> <input id="pass"
								type="password" class="input" data-type="password">
						</div>
						<div class="group">
							<label for="pass" class="label">REPEAT Password</label> <input
								id="pass" type="password" class="input" data-type="password">
						</div>
						<div class="group">
							<input type="submit" class="button" value="Sign Up">
						</div>
						<div class="hr"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- main page end -->


</body>

</html>