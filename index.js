var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    checkKey((buttonInnerHTML).toLowerCase());
  });
}

document.addEventListener("keypress", function(event) {
  checkKey((event.key).toLowerCase());
});

function checkKey(key){
  if(['a', 's', 'd', 'f', 'j', 'k', 'l'].indexOf(key) > -1){
    makeSound(key);
    buttonAnimation(key);
  }else{
    console.log(`${key} - This key is not supported!!`);
  }
}


function makeSound(key) {
  var music = new Audio(`sounds/${key}.mp3`);
  music.play();
}


function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
