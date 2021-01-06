(function (window){
var speakWord = "Good Bye";
var byeSpeaker ={};

byeSpeaker.speak=function(names){
  console.log(speakWord + " " + name);
}

window.byeSpeaker =byeSpeaker;
})(window);