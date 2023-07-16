document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 사용자가 입력한 값 가져오기
    var dateInput = document.getElementById('date').value;
    var titleInput = document.getElementById('title').value;
    var descriptionInput = document.getElementById('description').value;

    // 일정 항목 생성
    var scheduleItem = document.createElement('li');
    scheduleItem.innerHTML = '<strong>' + dateInput + '</strong>: ' + titleInput + '<br>' + descriptionInput;

    // 일정 목록에 항목 추가
    var scheduleList = document.getElementById('scheduleList');
    scheduleList.appendChild(scheduleItem);

    // 입력 필드 초기화
    document.getElementById('date').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
});

// Todolist 버튼 클릭 이벤트 처리
document.getElementById('todoButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    content.innerHTML = '<h3>Todolist</h3>' +
                        '<ul>' +
                        '<li>할 일 1</li>' +
                        '<li>할 일 2</li>' +
                        '<li>할 일 3</li>' +
                        '</ul>';
});

// 대학정보 버튼 클릭 이벤트 처리
document.getElementById('universityButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    content.innerHTML = '<h3>대학정보</h3>' +
                        '<p>여름 방학을 활용하여 대학에 관한 정보를 조사하고, 필요한 서류 및 준비물을 준비하세요.</p>';
});

// 입시일정 버튼 클릭 이벤트 처리
document.getElementById('entranceExamButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    content.innerHTML = '<h3>입시일정</h3>' +
                        '<p>여름 방학 동안 입시일정을 확인하고, 준비해야 할 시험 일정과 과목을 계획하세요.</p>';
});
