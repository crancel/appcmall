// JavaScript Document
$(document).ready(function(e) {
   	$("#logout").click(function(){
		localStorage.login="false";
		window.location.href = "login.html";
	}); 
});
