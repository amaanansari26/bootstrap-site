//SCROLL = ALL SCROLL BTN
var scroll=document.querySelectorAll(".scroll");
var prev=document.querySelectorAll(".prev");

for(var i=0;i<scroll.length;i++){

	scroll[i].addEventListener("click",function(){

		
		for(var i=innerHeight;i>0;i--){

			setTimeout(function(){
				scrollBy(0,1);
			},100);
		}
	});
}

for(var i=0;i<prev.length;i++){

	prev[i].addEventListener("click",function(){

		
		for(var i=innerHeight;i>0;i--){

			setTimeout(function(){
				scrollBy(0,-1);
			},100);
		}
	});
}