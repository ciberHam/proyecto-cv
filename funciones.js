
let posicionMenu=true;
const claseContenido = document.getElementsByClassName("contContenido");

 function cambiadorMenu(){
	
	if(posicionMenu==false){
		document.getElementById("ocultarMenu").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("ocultarMenu").style.display = "block";
		posicionMenu=false;
	}
}
function principal(){
	if(posicionMenu==false){
		document.getElementById("imagenCont").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("imagenCont").style.display = "flex";
		posicionMenu=false;
	}
}
function datoPerso(){
		if(posicionMenu==false){
		document.getElementById("infoPersonal").style.display = "block";
		posicionMenu=true;
	}else {
		document.getElementById("infoPersonal").style.display = "none";
		posicionMenu=false;
	}
}
function fEdu(){
		if(posicionMenu==false){
		document.getElementById("fEducativa").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("fEducativa").style.display = "block";
		posicionMenu=false;
	}
}
function refLab(){
		if(posicionMenu==false){
		document.getElementById("dLaboral").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("dLaboral").style.display = "block";
		posicionMenu=false;
	}
}
function habi(){
		if(posicionMenu==false){
		document.getElementById("Habilidades").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("Habilidades").style.display = "block";
		posicionMenu=false;
	}
}
function habi2(){
		if(posicionMenu==false){
		document.getElementById("Habilidades2").style.display = "none";
		posicionMenu=true;
	}else {
		document.getElementById("Habilidades2").style.display = "block";
		posicionMenu=false;
	}
}
function modoNoche(){
		if(posicionMenu==true){
		document.getElementById("body").style.background = "rgb(24, 29, 49)";
		document.getElementById("general2").style.background = "rgb(24, 29, 49)";
		for (let i = 0; i < claseContenido.length; i++) {
		  claseContenido[i].style.backgroundColor = "rgb(24, 29, 49)";
		}
		posicionMenu=false;
	}else {
		document.getElementById("body").style.background="rgb(0, 129, 201)";
		document.getElementById("general2").style.background = "rgb(0,100,201)";
		for (let i = 0; i < claseContenido.length; i++) {
		  claseContenido[i].style.backgroundColor ="rgb(0,80,201)";
		}
		posicionMenu=true;
	}
}