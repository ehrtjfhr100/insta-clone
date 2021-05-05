'use strict'
// "#0095f6"; 켜짐
// "rgba(0,149,246,.3)" 꺼짐

//목적 : 비밀번호가 6자 이상 일때 로그인 버튼을 파란색으로 만든다.
//순서 :
//	1.  로그인 버튼, 패스워드 input 을 가져온다.
//  2.  패스워드가 6자 이상인지 확인한다.
// 		1) 패스워드에 addEventListener를 부착한다.
// 			준비물  1. keyup 타입 2. 이벤트(keyup)가 발생했을때 실행시킬 함수
//									기능 : 패스워드가 6자 이상인지 체크해주는 함수 
//  3.	6자 이상이면 로그인 버튼에 파란색 background컬러를 준다.

const loginBtn = window.document.getElementsByClassName('login-button')[0];
const input = window.document.querySelectorAll('.input');
input[0].addEventListener('keyup', checkSix);
function checkSix (e) {
	const wordLength = e.target.value.length;
	changeColor(wordLength);
}
function changeColor (wordLength) {
	if(wordLength >= 6) {
		loginBtn.style.backgroundColor = "#0095f6";
	} else {
		loginBtn.style.backgroundColor = "rgba(0,149,246,.3)";
	}
}

//목적: 인풋태그에 한 자라도 키업 했을 때, 위치이동 & 크기 감소 & ease out 애니메이션 실행한다.
// 1. 플레이스 홀더는 <input email>, <input password>의 공통인 'input'의 플레이스 홀더만 가져온 것이다.
// 2. 플레이스 홀더에 키업 이벤트리스너를 부착한다.
// 3. 키업 이벤트를 들으면 "placeholdekeyup함수"를 실행한다.
// 4. placeholderKeyup 함수는 글자의 길이가 하나 이상일 때, 인풋태그에 애니메이티드를 붙여
// 인풋애니메이티드가 실행되도록 한다.
//const placeholder = window.document.getElementsByClassName('input').placeholder;
//placeholder.addEventListener('keyup', placeholderKeyup);
//function placeholderKeyup (event) {
//	if(event.target.value.Length > 0){
//	placeholder.style.cssText = "transform: translateY(-10px) scale(0.83333);"
//	}
//}


window.document.create
const screenshots =  window.document.querySelectorAll('.screenshot');
//	css 가장 첫번째 자식요소만 불투명도가 1.
//
//순서 돌아가게 하기
//changeImg는 셋인터벌(일정시간이 지나면 함수를 실행)api를 사용한다.
//순서바꾸는 함수/api? array.push(array.shift());
//순서를 바꾸는 함수가 3초가 지나면 실행된다.

async function changeImg(){
	setInterval(orderingImage, 3000);
	return currentImage;
}
function orderingImage (){
	screenshots.push(screenshots.shift())
	return screenshots;
}
orderingImage();
window.onload = 함수이름;