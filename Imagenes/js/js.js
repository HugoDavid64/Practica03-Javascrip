var slideIndex = 1;
showDivs(slideIndex);

window.onload = function() {
	iniciar();
}

function iniciar() {
	slideIndex = 1;
	showDivs(1);
	array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var val;
	for(i = 0; i < 5; i++) 
		array.splice(Math.floor(Math.random() * array.length), 1);

	shuffle(array);

	for(i = 0; i < 5; i++) 
		document.getElementById(i).src = "Imagenes/"+ array[i] +".jpg";
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n == x.length){
		document.getElementById('right').disabled = true;
		desactivarSiguiente();
	}if(n==1){
		document.getElementById('right').disabled = false;
		ActivarSiguiente();
	
	}if (n == 1) {
		document.getElementById('left').disabled = true;
		desactivarAnterior();
	}
	if (n==5){
		document.getElementById('left').disabled = false
		ActivarAnterior();
	}
		
		
	for (i = 0; i < x.length; i++)
		x[i].style.display = "none";

	x[slideIndex-1].style.display = "block"; 
}

function ActivarSiguiente() {
	document.getElementById("right").disabled = false;
	document.getElementById("right").style.color = "rgb(255, 255, 255)";
	document.getElementById("right").style.background = "#1883ba";
	document.getElementById("right").style.border = "2px solid #999";
  }
  

function desactivarSiguiente() {
	document.getElementById("right").disabled = true;
	document.getElementById("right").style.color = "rgb(83, 81, 81)";
	document.getElementById("right").style.background =
	  " rgb(170, 165, 165)";
	document.getElementById("right").style.border = "2px solid #ffffff";
  }
  

  function ActivarAnterior() {
	document.getElementById("left").disabled = false;
	document.getElementById("left").style.color = "rgb(255, 255, 255)";
	document.getElementById("left").style.background = "#1883ba";
	document.getElementById("left").style.border = "2px solid #999";
  }
  function desactivarAnterior() {
	document.getElementById("left").disabled = true;
	document.getElementById("left").style.color = "rgb(83, 81, 81)";
	document.getElementById("left").style.background =
	  " rgb(170, 165, 165)";
	document.getElementById("left").style.border = "2px solid #ffffff";
  }

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}