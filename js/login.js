'use strict'
//Event - 1.PLACEHOLDER ANIMATION  2.CHANGE LOGINBTN COLOR  3.LOGIN

//PLACEHOLDER ANIMATION
//목적: loginLabels에 한 자라도 키업 했을 때, 위치이동 & 크기 감소 & ease out 애니메이션 실행한다.
// 1. 플레이스 홀더는 <input email>, <input password>의 공통인 'input'의 플레이스 홀더만 가져온 것이다.
// 2. 플레이스 홀더에 키업 이벤트리스너를 부착한다.
// 3. 키업 이벤트를 들으면 "placeholdekeyup함수"를 실행한다.
// 4. placeholderKeyup 함수는 글자의 길이가 하나 이상일 때, 인풋태그에 애니메이티드를 붙여
// 인풋애니메이티드가 실행되도록 한다.
const placeholderId = document.querySelector('.placeholder.id');
const placeholderPw = document.querySelector('.placeholder.pw');
const inputId = document.querySelector('.input.id');
const inputPw = document.querySelector('.input.pw');

inputId.addEventListener('keyup',placeholderIdUp);
function placeholderIdUp(e){
	const tLength = e.target.value.length;
	if( tLength > 0){
		placeholderId.classList.add("trans");
		inputId.classList.add("trans");
	}else{
		placeholderId.classList.remove("trans");
		inputId.classList.remove("trans");
	}
};
inputPw.addEventListener('keyup',placeholderPwUp);
function placeholderPwUp(e){
	const tLength = e.target.value.length;
	if( tLength > 0){
		placeholderPw.classList.add("trans");
		inputPw.classList.add("trans");
	}else{
		placeholderPw.classList.remove("trans");
		inputPw.classList.remove("trans");
	}
};

//CHANGE LOGINBTN COLOR
//목적 : ID 혹은 PW가 6자 이상 일때 로그인 버튼을 파란색으로 만든다.
//알고리즘
//	1.  ID 혹은 PW 이므로 상위 태그, loginLabels에게 이벤트 위임한다. -> loginLabels 불러오기
//  2.  키업된 문자열의 길이가 6자 이상인지 확인한다.		 
//  3.	6자 이상이면 loginBtn의 backgroundColor가 파란색이 된다.
//			준비물: LoginBtn, loginLabels, "#0095f6": 켜짐, "rgba(0,149,246,.3)": 꺼짐 
//			기능: loginLabels에 keyup 이벤트리스너를 부착해
//				 문자열 길이가 6 이상이면 changeColor 함수 실행한다.
// 아이디와 비번에 이벤트리스너를 달고 둘 중 하나라도 문자열 길이가 6이상이면 색 변화

//문제 => 이벤트 상위태그에 위임해도 e.target이 바뀜 => id가 6이상이어도 pw에서 치면 다시 리셋

const loginBtn = document.querySelector('.login-button');
const loginLabels = document.querySelector('.login-labels');
loginLabels.addEventListener('keyup', changeColor);
function changeColor (e) {
	const tLength = e.target.value.length;
	if(tLength >= 6) {
		loginBtn.style.backgroundColor = "#0095f6";
	} else {
		loginBtn.style.backgroundColor = "rgba(0,149,246,.3)";
	}
}

//해결방법
//만약(inputId가 1이상이고 && inputPw가 6이상이면){로그인 버튼 #0095f6}아니면{rgba(0,149,246,.3)}
//문제 => 조건문이 작동안함

//loginLabels.addEventListener('keyup', changeLoginBtnColor);
//function changeLoginBtnColor(){
//	if(((checkSix())>=6)&&(checkOne())>=1){
//		loginBtn.style.backgroundColor = "#0095f6";
//	}else{
//		loginBtn.style.backgroundColor = "rgba(0,149,246,.3)";
//	}
//}

//loginLabels.addEventListener('keyup', turnOnLoginBtn);
//function turnOnLoginBtn(){
//	if((inputPw.addEventListener('keyup', (e)=>{return e.target.value.length})) >= 6 || (inputId.addEventListener('keyup', (e)=>{return e.target.value.length})) >=1){
//		loginBtn.style.backgroundColor = "#0095f6";
//	}
//}

//function checkSix(){
//	inputPw.addEventListener('keyup', (e)=>{return e.target.value.length})
//}
//function checkOne(){
//	inputId.addEventListener('keyup', (e)=>{return e.target.value.length})
//}


//LOGIN
const loginForm = document.querySelector('#login-form');
const loginAlert = document.querySelector('#login-alert-box');

function check(form){
	if(form.userid.value == "happy" && form.userpw.value =="123456"){
		window.location.replace("https://ehrtjfhr100.github.io/insta-clone/main.html");
	}else{
		loginAlert.style.display = 'visible';
	}
}


//SCREENSHOTS CHANGING
//	css 가장 첫번째 자식요소만 불투명도가 1.

//방법 1
//순서 돌아가게 하기
//만약 커런트 슬라이드라면, 첫번째 슬라이드의 showing을 제거한다.
//그러나 현재 없기에 첫번째 슬라이드에 showing을 붙인다.
//붙였다면 첫번째 슬라이드가 커런트슬라이드가 된다. 다시 첫번째로 돌아간다
//커런트슬라이드가 있으므로 첫번째 슬라이드의 showing을 제거한다.
//넥스트 슬라이드가 있다면 넥스트 슬라이드에 클래스를 제거한다.
//5번째 슬라이드는 넥스트 슬라이드가 없으므로 첫번째 슬라이드를 다시 커런트 슬라이드로 만들어준다.


//const firstSlide = document.querySelectorAll('.screenshot:first-child');
//slide();
//setInterval(slide, 4000);
//function slide(){
//	const showingClass = "showing";
//	const currentSlide = document.querySelector(`.${showingClass}`);
//	if(currentSlide){ //커런트 슬라이드가 있다면 이어서, 없다면 끝으로
//		firstSlide.classList.remove(showingClass); //첫번째 슬라이드의 showing제거
//		const nextSlide = currentSlide.nextElementSibling; //커런트슬라이드의 형제요소는 넥스트 슬라이드
//		if(nextSlide){ //넥스트 슬라이드가 있다면
//			currentSlide.classList.remove(showingClass);
//			nextSlide.classList.add(showingClass); //넥스트 슬라이드를 커런트 슬라이드로
//		}else{ //넥스트 슬라이드가 없다면
//			currentSlide.classList.remove(showingClass);
//			firstSlide.classList.add(showingClass); //첫번째 슬라이드를 커런트 슬라이드로
//		}
//	}else{ //커런트슬라이드가 없다면 첫번째 슬라이드가 커런트슬라이드가 된다.
//		firstSlide.classList.add(showingClass)
//	}
//}

//문제: 오버랩이 안됨. 처음 이미지는 없는 상태로 출발


//방법2
//const imageArr = ["img/screenimage1.jpg","img/screenimage2.jpg","img/screenimage3.jpg","img/screenimage4.jpg","img/screenimage5.jpg"];
//
//const first = document.querySelector('.screenshot:nth-child(1)');
//const second = document.querySelector('.screenshot:nth-child(2)');
//const third = document.querySelector('.screenshot:nth-child(3)');
//const fourth = document.querySelector('.screenshot:nth-child(4)');
//const fifth = document.querySelector('.screenshot:nth-child(5)');
//
//first.setAttribute("src", imageArr[0]);
//second.setAttribute("src", imageArr[1]);
//third.setAttribute("src", imageArr[2]);
//fourth.setAttribute("src", imageArr[3]);
//fifth.setAttribute("src", imageArr[4]);
//
//setInterval(iterateImage, 5000);
//function iterateImage(){
//	const firstElement = imageArr.shift();
//		imageArr.push(firstElement);
//		first.setAttribute("src", imageArr[0]);
//		second.setAttribute("src", imageArr[1]);
//		third.setAttribute("src", imageArr[2]);
//		fourth.setAttribute("src", imageArr[3]);
//		fifth.setAttribute("src", imageArr[4]);
//		return imageArr;
//}

//방법3
//보이는 슬라이드, 대기하는 슬라이드라는 클래스만 달아주기
//크로스페이드 트랜지션을 위해서는 이미지 태그 두개가 반드시 필요하다.
//배열 순환하기에는 덩치가 크다.
//전체 스샷은 z-index: 0, 대기하는 스샷이 z-index:1, 보이는 스샷이 z-index:2
//클래스를 붙이고 떼는 방법 사용

//const firstSlide = document.querySelector('.screenshot:first-child');
//const secondSlide = document.querySelector('.screenshot:nth-child(2)');
//const thirdSlide = document.querySelector('.screenshot:nth-child(3)');
//const lastSlide = document.querySelector('.screenshot:last-child');
//setInterval(showSlide, 4900);
//setInterval(waitSlide, 4900);
//function showSlide(){
//	const showClass = "show";
//	const currentSlide = document.querySelector(`.${showClass}`);
//	if(currentSlide){ //커런트 슬라이드가 있다면 이어서, 없다면 끝으로
//		firstSlide.classList.remove(showClass); //첫번째 슬라이드의 show제거
//		const nextSlide = currentSlide.nextElementSibling; //커런트슬라이드의 형제요소는 넥스트 슬라이드
//		if(nextSlide){ //넥스트 슬라이드가 있다면
//			currentSlide.classList.remove(showClass);
//			nextSlide.classList.add(showClass); //넥스트 슬라이드를 커런트 슬라이드로
//		}else{ //넥스트 슬라이드가 없다면
//			currentSlide.classList.remove(showClass);
//			firstSlide.classList.add(showClass); //첫번째 슬라이드를 커런트 슬라이드로
//		}
//	}else{ //커런트슬라이드가 없다면 첫번째 슬라이드가 커런트슬라이드가 된다.
//		firstSlide.classList.add(showClass)
//	}
//}
//function waitSlide(){
//	const waitClass = "wait"
//	const waitSlide = document.querySelector(`.${waitClass}`);
//	if(waitSlide){ //커런트 슬라이드가 있다면 이어서, 없다면 끝으로
//		secondSlide.classList.remove(waitClass); //첫번째 슬라이드의 wait제거
//		const nextSlide = waitSlide.nextElementSibling; //커런트슬라이드의 형제요소는 넥스트 슬라이드
//		if(nextSlide){ //넥스트 슬라이드가 있다면
//			waitSlide.classList.remove(waitClass);
//			nextSlide.classList.add(waitClass); //넥스트 슬라이드를 커런트 슬라이드로
//		}else{ //넥스트 슬라이드가 없다면
//			waitSlide.classList.remove(waitClass);
//			firstSlide.classList.add(waitClass); //첫번째 슬라이드를 커런트 슬라이드로
//		}
//	}else{ //커런트슬라이드가 없다면 첫번째 슬라이드가 커런트슬라이드가 된다.
//		firstSlide.classList.add(waitClass)
//	}
//}

const firstSlide = document.querySelector('.screenshot:first-child');

const showClass = "show";
const waitClass = "wait";
setInterval(function(){slide(showClass), slide(waitClass)}, 4900);
//setInterval(function(){slide(waitClass)}, 4900);


function slide(theClass){
	const theSlide = document.querySelector(`.${theClass}`)
	if(theSlide){ //커런트 슬라이드가 있다면 이어서, 없다면 끝으로
		firstSlide.classList.remove(theClass); //첫번째 슬라이드의 show제거
		const nextSlide = theSlide.nextElementSibling; //커런트슬라이드의 형제요소는 넥스트 슬라이드
		if(nextSlide){ //넥스트 슬라이드가 있다면
			theSlide.classList.remove(theClass);
			nextSlide.classList.add(theClass); //넥스트 슬라이드를 커런트 슬라이드로
		}else{ //넥스트 슬라이드가 없다면
			theSlide.classList.remove(theClass);
			firstSlide.classList.add(theClass); //첫번째 슬라이드를 커런트 슬라이드로
		}
	}else{ //커런트슬라이드가 없다면 첫번째 슬라이드가 커런트슬라이드가 된다.
		firstSlide.classList.add(theClass)
	}
}