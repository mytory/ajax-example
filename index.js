data = {
	name: '홍길동',
	title: '잡비',
	items: [
		{
			content: '서버비',
			amount: 10000
		},
		{
			content: '사무용품',
			amount: 20000
		}
	]
};


document.querySelector('.js-button')
	.addEventListener('click', function () {
		fetch('piece.php', {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
			  'Content-Type': 'application/json'
			}
		})
			.then(function (response) {

				if (response.status === 404) {
					throw "File not found";
				} else if (response.status === 500) {
					throw "Server Error!";
				}
				return response.text();
			})
			.then(function (result) {
				if (result === '1') {
					alert('저장했습니다.');
				} else {
					alert('서버 에러!');
				}
			})
	});