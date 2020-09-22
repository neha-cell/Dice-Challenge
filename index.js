 var i = 0;
 for( i = 0; i<document.querySelectorAll(".drum").length;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function() {
 this.style.color="white";
 console.log(this.innerHTML);
 var key = this.innerHTML;
  makSound(key);

 });
}
document.addEventListener("keydown",function(event){
   makSound(event.key);

});
document.getElementById("sounds/tom-1").preload() = "auto";
function makSound(key){
   var audio;
  var sound = "sounds/";
  switch (key.toLowerCase()) {
    case 'w':
      sound = sound + "tom-1.mp3";
      audio = new Audio(sound);
      audio.play();
      break;
    case 'a':
      sound = sound + "tom-2.mp3";
      audio = new Audio(sound);
      audio.play();
      break;
    case 's':
      sound = sound + "tom-3.mp3";
      audio = new Audio(sound);
      audio.play();
      break;
    case 'd':
      sound = sound + "tom-4.mp3";
      audio = new Audio(sound);
      audio.play();
      break;
      case 'j':
        sound = sound + "crash.mp3";
        audio = new Audio(sound);
        audio.play();
        break;
      case 'k':
        sound = sound + "kick-bass.mp3";
        audio = new Audio(sound);
        audio.play();
        break;
      case 'l':
        sound = sound + "snare.mp3";
        audio = new Audio(sound);
        audio.play();
        break;

    default:
    console.log(this.innerHTML);
  }
}
