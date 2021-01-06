(function (window){
var speakWord = "Hello";
var helloSpeaker= {};

helloSpeaker.speak=function (names){
  console.log(speakWord + " " + name);
}
	window.helloSpeaker =helloSpeaker;
})(window);

