setInterval(function(){

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var min = (minutes < 10) ? '0'+ minutes : minutes;
var sec = (seconds < 10) ? '0' + seconds : seconds;
var totalTime = hour + ':' + minutes + ':' + seconds;

$('#clock').text(totalTime);
},1000);