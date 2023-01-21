$(document).ready(function(){
	var mover_a = $(".desplazar");
	
	mover_a.click(function(evento){
		evento.preventDefault();
		$("body,html").animate(
		{
		scrollTop:$(this.hash).offset().top,
		},1500
		);
	})
})
let posicionMenu=true;
const claseContenido = document.getElementsByClassName("contContenido");
let datos={};
async function callback(){
	const response = await fetch('https://ciberham.github.io/repoDeArchivosJson/datos.json')
	const json = await response.json();
	console.log(json["nombreCompleto"])
	document.getElementById("fullname").innerHTML = json.nombreCompleto;
	document.getElementById("contenido").innerHTML = json.textoIntro;
	document.getElementById("email").innerHTML = json.email;
	document.getElementById("fNacimiento").innerHTML = json.fechaNacimiento;
	document.getElementById("ciudad").innerHTML = json.ciudad;
	document.getElementById("pais").innerHTML = json.paisOrigen;
	document.getElementById("fullname").innerHTML = json.nombreCompleto;
	document.getElementById("fullname").innerHTML = json.nombreCompleto;
	document.getElementById("fullname").innerHTML = json.nombreCompleto;
	document.getElementById("fullname").innerHTML = json.nombreCompleto;
}


callback()
 function cambiadorMenu(){
	
	if(posicionMenu==false){
		document.getElementById("ocultarMenu").style.display = "none";
		document.getElementById("cambiaMenu").style.width="15%"
			if(screen.width < 900){
				document.getElementById("cambiaMenu").style.width="100%"
			}
		document.getElementById("cambiaMenu").style.height="8%"
		posicionMenu=true;
	}else {
		document.getElementById("ocultarMenu").style.display = "flex";
	    document.getElementById("cambiaMenu").style.width="95.5%";
			if(screen.width < 900){
				document.getElementById("cambiaMenu").style.width="100%"
			}
		document.getElementById("cambiaMenu").style.height="8%"
		posicionMenu=false;
	}
}
