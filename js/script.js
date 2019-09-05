$(document).ready(function(){ 

	$("#page-up").on("click", function(event){
	//

  		$("html").animate({
  			scrollTop:0 },
  			1000);

  		event.preventDefault();

  	});
	
	$("#logotipo").on("mouseover", function(){
		
		$("#titulo").addClass("efeito");

	});

	$("#logotipo").on("mouseout", function(){
		
		$("#titulo").removeClass("efeito");

	});

	$("#menu-nav").on("mouseover", function(){
		
		$(".navbar a").addClass("efeito1");
	
	}).on("mouseout", function(){
		
		$(".navbar a").removeClass("efeito1");
	});

	


	$("#enviar").on("click", function(){
		enviar=alert("dados salvos");
		window.location.replace("index.html");
		
});

});


