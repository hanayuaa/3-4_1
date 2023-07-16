
<html>
<head>
  <meta charset="utf-8">
  <title>Login Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #F5F9FA;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 400px;
      margin: 100px auto;
      padding: 20px;
      background-color: #FFFFFF;
      border: 1px solid #D1D1D1;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .container h2 {
      text-align: center;
      color: #138496;
      text-decoration: underline;
      font-weight: normal;
      margin-bottom: 20px;
    }

    .container input[type="text"],
    .container input[type="password"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #D1D1D1;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 16px;
    }

    .container button {
      background-color: #138496;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      border-radius: 5px;
    }

    .container button:hover {
      opacity: 0.8;
    }

    .container .error-message {
      color: red;
      font-weight: bold;
      margin-top: 10px;
      text-align: center;
    }

    .container img {
      width: 200px;
      height: auto;
      display: block;
      margin: 0 auto;
      border-radius: 5px;
      margin-top: 20px;
    }
  </style>
  <script>
    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // 사용자 이름과 비밀번호 확인
      if (username === "나하윤" && password === "30406") {
        // 로그인 성공 시 다른 창으로 이동
        window.location.href = "main.html";
      } else {
        // 로그인 실패 시 메시지 표시
        document.getElementById("message").innerHTML = '<p class="error-message">잘못된 사용자 이름 또는 비밀번호입니다.</p>';
      }
    }
  </script>
</head>
<body>
  <div class="container">
    <h2>3학년 4반 로그인</h2>
    <form>
      <label for="username">사용자명</label>
      <input type="text" id="username" name="username" placeholder="사용자명을 입력하세요">

      <label for="password">비밀번호</label>
      <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요">

      <button type="button" onclick="login()">로그인</button>
    </form>
    <div id="message"></div>
    <div class="image-container">
      <img src="your-image-url.jpg" alt="이미지">
    </div>
  </div>
</body>
</html>
