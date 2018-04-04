// search
var hsInputText = document.getElementById('hs-input-text');
var hsInputLabel = document.getElementById('hs-input-label');
hsInputText.onfocus = function(){
	hsInputLabel.style.visibility = "hidden";
	hsInputText.style.outline = 'none';
}
hsInputText.onblur = function(){
	if (hsInputText.value == "") {
		hsInputLabel.style.visibility = "visible";
	}else{
		hsInputLabel.style.visibility = "hidden";
	}
	
}

//login
var hsLogin = document.getElementById('hs-login');
var mask = document.getElementById('mask');
var maskLogin = document.getElementById('maskLogin');
var masklclose = document.getElementById('mask-l-close');

hsLogin.onclick = function() {
	mask.style.display = 'block';
	maskLogin.style.display = 'block';
}
masklclose.onclick = function() {
	mask.style.display = 'none';
	maskLogin.style.display = 'none';
}

var contentWYY = document.getElementById('contentWYY');
var contentLove = document.getElementById('contentLove');
var maskTopWYY = document.getElementById('maskTopWYY');
var maskTopLove = document.getElementById('maskTopLove');
maskTopWYY.onclick = function() {
	contentLove.style.visibility = "hidden";
	contentWYY.style.visibility = "visible";
	maskTopLove.style.borderBottom = "none";
	maskTopWYY.style.borderBottom = "4px solid #8bb721";
}
maskTopLove.onclick = function() {
	contentLove.style.visibility = "visible";
	contentWYY.style.visibility = "hidden";
	maskTopWYY.style.borderBottom = "none";
	maskTopLove.style.borderBottom = "4px solid #8bb721";
}

var userCloseIn = document.getElementById('userCloseIn');
var userInput = document.getElementById('userInput');
var userInputSelect = document.getElementById('userInputSelect');
userInput.onkeydown = function() {
	userCloseIn.style.display = "block";
	userInputSelect.style.display = "block";
}
userCloseIn.onclick = function() {
	userInput.value="";
	userInputSelect.style.display = "none";

}

$(document).ready(function(){
	$('#uCheckBox').click(function() {
		$('#uCheckBoxIn').toggle();
	});
});

var userISChoices = document.getElementsByClassName('userISChoice');
for (var i = 0; i < userISChoices.length; i++) {
	userISChoices[i].onmouseover = function() {
		for (var j = 0; j < userISChoices.length; j++) {
			userISChoices[j].classList.remove('userISChoiceColor');
		}
	this.classList.add('userISChoiceColor');
	}
	userISChoices[i].onclick = function() {
		userInput.value = "" + this.innerText + "";
		userInputSelect.style.display = "none";
	}
}
document.addEventListener("click", function() {
	userInputSelect.style.display = "none";
})
userInputSelect.addEventListener("click", function() {
	event.stopPropagation();
})


// hidden
var hsSour = document.getElementById('hs-sour');
var hsSourseH = document.getElementById('hs-sourse-hidden');

hsSour.onmouseover = function() {
	hsSourseH.style.display = "block";
}
hsSour.onmouseout = function() {
	hsSourseH.style.display = "none";
}

var hlMore = document.getElementById('hl-more');
var hlMoreHidden = document.getElementById('hl-more-hidden');
hlMore.onmouseover = function() {
	hlMoreHidden.style.display = "block";
}
hlMore.onmouseout = function() {
	hlMoreHidden.style.display = "none";
}

//轮播图 
var screen = document.getElementById('screen');
var ul = screen.children[0];
var lis = ul.children;
var square = document.getElementById('square');
var left = square.children[0];
var right = square.children[1];
var sliderul = document.getElementById("slider-ul");
var sliderLis = sliderul.children;
var banner = document.getElementById('banner');

ul.onmouseover = function(){
	square.style.visibility = 'visible';
}
ul.onmouseout = function(){
	square.style.visibility = 'hidden';
}
square.onmouseover = function(){
	square.style.visibility = 'visible';
}
square.onmouseout = function(){
	square.style.visibility = 'hidden';
}

var arr = ["rgb(149, 110, 255)","rgb(251, 204, 75)","rgb(251, 204, 75)","rgb(254, 207, 215)","rgb(167, 217, 226)","rgb(29, 34, 52)"];

var index = 0;
for (var i = 0; i < lis.length; i++) {
	if (lis[i].style.visibility=='visible') {
		index = i;
	}
}
left.onclick = function() {
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.visibility = 'hidden';
		sliderLis[i].style.backgroundColor = 'white';
		banner.style.backgroundColor = "";
	}
	if (index==0) {
		lis[lis.length-1].style.visibility = 'visible';
		sliderLis[lis.length-1].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[lis.length-1];
		index = lis.length-1;
	}else{
		lis[index-1].style.visibility = 'visible';
		sliderLis[index-1].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[index-1];
		index = index-1;
	}
	// console.log(lis.length + ',' + index);

}	
right.onclick = function() {
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.visibility = 'hidden';
		sliderLis[i].style.backgroundColor = 'white';
		banner.style.backgroundColor = "";
	}
	if (index==5) {
		lis[0].style.visibility = 'visible';
		sliderLis[0].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[0];
		index = 0;
	}else{
		lis[index+1].style.visibility = 'visible';
		sliderLis[index+1].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[index+1];
		index = index+1;
	}
	// console.log(lis.length + ',' + index);

}	


for (var i = 0; i < sliderLis.length; i++) {
	sliderLis[i].index = i;
	sliderLis[i].onmouseover = function() {
		for (var i = 0; i < sliderLis.length; i++) {
			// sliderLis[i].className = "";
			sliderLis[i].style.backgroundColor = 'white';
			banner.style.backgroundColor = "";
		}
		// this.className = 'current';
		this.style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[this.index];

		for (var k = 0; k < lis.length; k++) {
			lis[k].style.visibility = 'hidden';
		}
		lis[this.index].style.visibility = 'visible';
		index = this.index;
		// console.log(i+','+this.index);
	}
	
}


clearInterval(timer);
var timer = setInterval(function (){
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.visibility = 'hidden';
		sliderLis[i].style.backgroundColor = 'white';
		banner.style.backgroundColor = "";
	}
	if (index==5) {
		lis[0].style.visibility = 'visible';
		sliderLis[0].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[0];
		index = 0;
	}else{
		lis[index+1].style.visibility = 'visible';
		sliderLis[index+1].style.backgroundColor = '#55b929';
		banner.style.backgroundColor = arr[index+1];
		index = index+1;
	}
},6000);