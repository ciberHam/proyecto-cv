
let posicionMenu=true;
const claseContenido = document.getElementsByClassName("contContenido");
let datos={};
function callback(){
	const archivoJasonVariable = JSON.parse(datos.json);
	return archivoJasonVariable;
}


callback()
 function cambiadorMenu(){
	
	if(posicionMenu==false){
		document.getElementById("ocultarMenu").style.display = "none";
		document.getElementById("cambiaMenu").style.width="15%"
			if(screen.width < 900){
				document.getElementById("cambiaMenu").style.width="97%"
			}
		document.getElementById("cambiaMenu").style.height="8%"
		posicionMenu=true;
	}else {
		document.getElementById("ocultarMenu").style.display = "flex";
	    document.getElementById("cambiaMenu").style.width="95.5%";
			if(screen.width < 900){
				document.getElementById("cambiaMenu").style.width="97%"
			}
		document.getElementById("cambiaMenu").style.height="8%"
		posicionMenu=false;
	}
}
