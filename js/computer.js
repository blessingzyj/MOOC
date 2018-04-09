//侧边栏
var sideBar = document.getElementById('sideBar');
window.onscroll = function() {
	if (window.pageYOffset>"80") {
		sideBar.style.position = "fixed";
		sideBar.style.top = "20px";
		sideBar.style.right = "45px";
	}else{
		sideBar.style.position = "absolute";
		sideBar.style.right = "0px";
		sideBar.style.top = "30px";
	}
}

// main
var mainNavUl = document.getElementById('mainNavUl');
var mainNavLis = mainNavUl.children;
for (var i = 0; i < mainNavLis.length; i++) {
	mainNavLis[i].onclick = function() {
		for (var j = 0; j < mainNavLis.length; j++) {
			mainNavLis[j].firstElementChild.style.backgroundColor = "transparent";
			mainNavLis[j].firstElementChild.style.color = "#333";
		}
		this.firstElementChild.style.backgroundColor = "#55B929";
		this.firstElementChild.style.color = "white";
		mainNavLis[mainNavLis.length-1].firstElementChild.style.backgroundColor = "transparent";
		mainNavLis[mainNavLis.length-1].firstElementChild.style.color = "#55B929";

	}
}
var lastLiA = document.getElementById('lastLiA');
var lastLiANews = document.getElementById('lastLiANews');
lastLiA.onmouseover = function() {
	lastLiANews.style.display= "block";
}
lastLiA.onmouseout = function() {
	lastLiANews.style.display= "none";
}
lastLiANews.onmouseover = function() {
	lastLiANews.style.display= "block";
}
lastLiANews.onmouseout = function() {
	lastLiANews.style.display= "none";
}

var mnav2 = document.getElementById('mnav2');
var mnav2Lis = mnav2.children;
for (var i = 0; i < mnav2Lis.length; i++) {
	mnav2Lis[i].onclick = function() {
		for (var i = 0; i < mnav2Lis.length; i++) {
			mnav2Lis[i].firstElementChild.style.color = "#333";
		}
		this.firstElementChild.style.color = "#55B929";
	}
}

// course切换
var resultBar = document.getElementById('resultBar');
var resultBars = resultBar.getElementsByTagName('li');
var carBox = document.getElementById('carBox');
var carBoxs = carBox.children;

for (var i = 0; i < resultBars.length; i++) {
	resultBars[i].index = i;
	resultBars[i].onclick = function() {
		for (var j = 0; j < resultBars.length; j++) {
			resultBars[j].style.color = "#333";
		}
		this.style.color = "#55B929";
		for (var i = 0; i < carBoxs.length; i++) {
			carBoxs[i].style.display = "none";
		}
		carBoxs[this.index].style.display = "block";
	}
}
// 鼠标滑过添加课程背景色
var mClists = document.getElementsByClassName('m-clist');
for (var i = 0; i < mClists.length; i++) {
	mClists[i].onmouseover = function() {
		for (var i = 0; i < mClists.length; i++) {
			mClists[i].style.backgroundColor = "";
		}
		this.style.backgroundColor = "#f5f5f5";
	}
	mClists[i].onmouseout = function() {
		this.style.backgroundColor = "";
	}
}

//切换页码
var mresultPages = document.getElementById('mresultPages');
var pagesLis = mresultPages.getElementsByTagName('a');
for (var i = 0; i < pagesLis.length; i++) {
	pagesLis[i].index = i;
	pagesLis[i].onclick = function() {
		for (var j = 0; j < pagesLis.length; j++) {
			pagesLis[j].style.backgroundColor = "transparent";
			pagesLis[j].style.color = "#333";
		}
		this.style.backgroundColor = "#49AF4F";
		this.style.color = "white";
		if (this.index!==1&&this.index!==0) {
			pagesLis[0].style.cursor = "pointer";
			pagesLis[0].style.color = "#859295";
			pagesLis[0].onmouseover = function() {
				pagesLis[0].style.backgroundColor = "#49AF4F";
				pagesLis[0].style.color = "white";
			}
			pagesLis[0].onmouseout = function() {
				pagesLis[0].style.backgroundColor = "transparent";
				pagesLis[0].style.color = "#859295";
			}
		}else if (this.index==1) {
			pagesLis[0].style.cursor = "not-allowed";
			pagesLis[0].style.color = "#333";
			pagesLis[0].onmouseover = function() {
				pagesLis[0].style.backgroundColor = "transparent";
				pagesLis[0].style.color = "#333";
			}
			pagesLis[0].onmouseout = function() {
				pagesLis[0].style.backgroundColor = "transparent";
				pagesLis[0].style.color = "#333";
			}
		}else if (this.index==0) {
			pagesLis[0].style.cursor = "not-allowed";
			pagesLis[0].style.color = "#333";
			pagesLis[0].onmouseover = function() {
				pagesLis[0].style.backgroundColor = "transparent";
				pagesLis[0].style.color = "#333";
			}
			pagesLis[0].onmouseout = function() {
				pagesLis[0].style.backgroundColor = "transparent";
				pagesLis[0].style.color = "#333";
			}
		}
	}
}


















