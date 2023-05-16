src="https://kit.fontawesome.com/64d58efce2.js"
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);

});

/*TEXT SIZE CHANGER */

function fontchange(n){
    var paragraph = document.getElementById('maincardtext');
    paragraph.style.fontSize = n + "px";
}


var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}



