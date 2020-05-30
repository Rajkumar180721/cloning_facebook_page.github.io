var userName = document.getElementById('name');
var button = document.querySelector('button');


function next(){
	window.location.href="https://rajkumar180721.github.io/cloning_facebook_page.github.io/birthdate.html";	
}

function error(event,width) {
	let warningPopup = document.getElementById('warning');
	let text = document.createTextNode('Enter your name.')
	warningPopup.appendChild(text);
	warningPopup.classList.add("warningPopup");
	warningPopup.style.width = width+"%";
	userName.style.borderColor="#e84545";
}

function clearBox(elementID) { 
    var div = document.getElementById(elementID); 
      
    while(div.firstChild) { 
        div.removeChild(div.firstChild); 
    } 
}

function keypress(element,width) {
	if(userName.value.length > 0 && event.keyCode === 13) {
		next();
	}
	else if(userName.value.length === 0 && event.keyCode === 13){
		clearBox('warning');
		error(event,width)
	}	
}

function click(element,width) {
	if(element.value.length > 0 ) {
		next();
	}
	else if(element.value.length === 0 ){
		clearBox('warning');
		error(event,width);
	}
}

userName.addEventListener('keypress', function() {keypress(userName,98);});
button.addEventListener('click', function() {click(userName,98);});

