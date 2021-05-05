//스토리 메인 로직
loadContents()
.then (contents => { 
		console.log(contents)
		displayStory(contents)
		displayDialogue(contents)
		displaySide(contents)
		displayMy(contents)
})
.catch (console.log);

//컨텐츠 로드
function loadContents(){
	return fetch('./profile.json')
	.then (response => response.json())
	.then (json => json.contents);
	//{story: Array(8), feed: Array(3), side: Array(5), my: {…}}
}

//스토리 보여주기
// <li class="story-button">
//   	<div class="story-image-box">
//         <div class="story canvas-box"></div>
//         <span class="story profile-image border">
//         		<img class="story profile-image" src="https://..."/>
//         </span>
//		</div>
//		<div class="story-id">juni_hi99</div>
// </li>

function displayStory(contents){
	const story = contents['story'];
	//Array
	//0: {id: "__leejune", imgSrc: "img/pic/leejune.jpeg"}

	const storyBtn = document.querySelectorAll('.story-button');
	//NodeList

	const storyBtnLength = storyBtn.length; //8

	//스토리 프로필 이미지 삽입
	//1.스토리 이미지소스 배열 만들기
	//2.스토리 이미지의 부모노드 가져오기
	//3.이미지 태그 생성
	//4.이미지태그에 클래스 붙이기
	//5.이미지태그에 n번째 소스 붙여주기
	//6.n번째 부모 노드에 이미지태그 붙여주기
	const storyImgSrcArray = story.map((story) => story.imgSrc);//Array(8) ["img/pic/leejune.jpeg", "img/pic/jungyujin.jpeg", "img/pic/1star.jpeg", "img/pic/aprillee.jpeg", "img/pic/janekim.jpeg", "img/pic/hipsgang.jpeg", "img/pic/rohmis.jpeg", "img/pic/dawooni.jpeg"]
	const storyImgBorder= document.querySelectorAll('.story.profile-image.border');//NodeList(8)
	
	for(n = 0; n < storyBtnLength; n++){
		const storyImgTag = document.createElement('img');
		storyImgTag.classList.add("story", "profile-image");
		storyImgTag.src = storyImgSrcArray[n];
		storyImgBorder[n].append(storyImgTag);
	}	
	
	//스토리 아이디 삽입
	//1.스토리 아이디 배열 만들기
	//2.스토리 아이디 텍스트가 들어갈 노드 불러오기
	//3.for을 통해 	1의 배열로 텍스트 노드 생성하기
	//4.생성된 텍스트노드의 배열을 storyIdTags에 붙이기
	const storyIdArray = story.map((story) => story.id);//Array
	const storyIdTags = document.querySelectorAll(".story-id");//NodeList
	for(n = 0; n < storyBtnLength; n++){
		const IdTextNodeArray = document.createTextNode(storyIdArray[n]);
		storyIdTags[n].append(IdTextNodeArray);
	}
}

//다이알로그 보여주기
function displayDialogue(contents){
	const dialogue = contents['dialogue'];
	const dialogueLength = dialogue.length;
	const headerImgSrcArray = dialogue.map((dialogue) => dialogue.imgSrc); //프로필이미지소스 배열
	const feedIdArray = dialogue.map((dialogue) => dialogue.id); //아이디 배열
	const headerPlaceArray = dialogue.map((dialogue) => dialogue.feed.place); //장소 배열
	const feedPhotoArray = dialogue.map((dialogue) => dialogue.feed.photo); //피드사진 배열
	const feedWritingArray = dialogue.map((dialogue) => dialogue.feed.comment); //코멘트 배열
	
	//프로필 이미지 삽입
	const headerImgBorder= document.querySelectorAll('.header.profile-image.border');//NodeList(2)
	for(n = 0; n < dialogueLength; n++){
		const headerImgTag = document.createElement('img');
		headerImgTag.classList.add("header", "profile-image");
		headerImgTag.src = headerImgSrcArray[n];
		console.log(headerImgTag);
		headerImgBorder[n].append(headerImgTag);
	}	
	//아이디 삽입
	const headerIdTags = document.querySelectorAll(".header.id");//NodeList(2)
	const writerId = document.querySelectorAll('.writer.id');
	for(n = 0; n < dialogueLength; n++){
		const IdTextNodeArray = document.createTextNode(feedIdArray[n]);
		writerId,headerIdTags[n].append(IdTextNodeArray);
	}
	//장소 삽입
	const headerPlace = document.querySelectorAll('.header-place');
	for(n = 0; n < dialogueLength; n++){
		const placeTextNodeArray = document.createTextNode(headerPlaceArray[n]);
		headerPlace[n].append(placeTextNodeArray);
	}	
	//피드 사진 삽입
	const contentImgDiv = document.querySelectorAll('.content-img');
	console.log(contentImgDiv);
	for(n = 0; n < dialogueLength; n++){
		const contentImg = document.createElement('img');
		contentImg.classList.add("content-image-src");
		contentImg.src = feedPhotoArray[n];
		contentImgDiv[n].append(contentImg);
	}	
	//코멘트 삽입
	const writingTags = document.querySelectorAll('.writing');
	for(n = 0; n < dialogueLength; n++){
		const writingTextNodeArray = document.createTextNode(feedWritingArray[n]);
		writingTags[n].append(writingTextNodeArray);
	}
}

//사이드 컨테이너 보여주기
function displaySide(contents){
	const side = contents['side'];
	const sideProfile = document.querySelectorAll('.profile');
	const sideLength = sideProfile.length; //5
	const sideImgSrcArray = side.map((side) => side.imgSrc); //프로필이미지소스 배열
	const sideIdArray = side.map((side) => side.id); //아이디 배열
	const sideInfoArray = side.map((side) => side.info); //인포 배열

	const sideImgBorder= document.querySelectorAll('.others.profile-image.border');
	for(n = 0; n < sideLength; n++){
		const sideImgTag = document.createElement('img');
		sideImgTag.classList.add("others", "profile-image");
		sideImgTag.src = sideImgSrcArray[n];
		sideImgBorder[n].append(sideImgTag);
	}	
	
	const sideIdTags = document.querySelectorAll(".others.id");//NodeList
	for(n = 0; n < sideLength; n++){
		const IdTextNodeArray = document.createTextNode(sideIdArray[n]);
		sideIdTags[n].append(IdTextNodeArray);
	}

	const sideInfoTags = document.querySelectorAll(".others-info");
	for(n = 0; n < sideLength; n++){
		const infoTextNodeArray = document.createTextNode(sideInfoArray[n]);
		sideInfoTags[n].append(infoTextNodeArray);
	}
}

function displayMy(contents){
	const my = contents['my'];
	//이미지
	const myImgSrc = my.imgSrc;
	const myImgTag = document.createElement('img');
	myImgTag.classList.add("my", "profile-image");
	myImgTag.src = myImgSrc;
	const myImgBorder = document.querySelector('.my.profile-image.border');
	myImgBorder.append(myImgTag);
	const myNavImgTag = document.querySelector('.nav-icon.profile-image');
	myNavImgTag.src = myImgSrc;
	
	//이름
	const myName = my.name;
	const myNameTextNode = document.createTextNode(myName);
	const myNameTag = document.querySelector('.my-name');
	myNameTag.append(myNameTextNode);
	
	//아이디
	const myId = my.id;
	const myIdTag = document.querySelector('.my.id');
	const myIdTextNode = document.createTextNode(myId);
	myIdTag.append(myIdTextNode);
}