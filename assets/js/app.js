// Nav versión mobile  
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

// Validación Página de alta datos 
function validacion() {
	// Validando nombre de dashboard
	var tarNombreDashboard = document.getElementById("tarNombreDashboard");
	var nombreDashboard = document.getElementById("nombreDashboard").value;

	if (nombreDashboard == "" || nombreDashboard == null || nombreDashboard.length == 0 || !isNaN(nombreDashboard) || /^\s+$/.test(nombreDashboard)) {
    alert('Escriba un nombre correcto');
   }else{

	var pNombreDashboard = document.createElement('h2');
	var tNombreDashboard =  document.createTextNode(nombreDashboard);
	pNombreDashboard.appendChild(tNombreDashboard);
	tarNombreDashboard.appendChild(pNombreDashboard);
}
	// Validando nuevas compras
	var tarNuevasCompras = document.getElementById("tarNuevasCompras");
	var nuevasCompras = document.getElementById("nuevasCompras").value;
	if (isNaN(nuevasCompras)) {
    alert('Introduzca sólo números');
   }else{

	var pNuevasCompras = document.createElement('h2');
	var tNuevasCompras =  document.createTextNode(nuevasCompras);
	pNuevasCompras.appendChild(tNuevasCompras);
	tarNuevasCompras.appendChild(pNuevasCompras);
}

	// Validando incremento de compras
	var tarIncrementoCompras = document.getElementById("tarIncrementoCompras");
	var incrementoCompras = document.getElementById("incrementoCompras").value;
	  if (isNaN(incrementoCompras)) {
    alert('Introduzca sólo números');
   }else{

	var pIncrementoCompras = document.createElement('h2');
	var tIncrementoCompras =  document.createTextNode(incrementoCompras);
	pIncrementoCompras.appendChild(tIncrementoCompras);
	tarIncrementoCompras.appendChild(pIncrementoCompras);
}
	// Validando nuevos usuarios
	var tarNuevosUsuarios = document.getElementById("tarNuevosUsuarios");
	var nuevosUsuarios = document.getElementById("nuevosUsuarios").value;
  if (isNaN(nuevosUsuarios)) {
    alert('Introduzca sólo números');
   }else{

	var pNuevosUsuarios = document.createElement('h2');
	var tNuevosUsuarios =  document.createTextNode(nuevosUsuarios);
	pNuevosUsuarios.appendChild(tNuevosUsuarios);
	tarNuevosUsuarios.appendChild(pNuevosUsuarios);
}
	// Validando nuevas visitas
	var tarNuevasVisitas = document.getElementById("tarNuevasVisitas");
	var nuevasVisitas = document.getElementById("nuevasVisitas").value;
	if (isNaN(nuevasVisitas)) {
    alert('Introduzca sólo números');
   }else{

	var pNuevasVisitas = document.createElement('h2');
	var tNuevasVisitas =  document.createTextNode(nuevasVisitas);
	pNuevasVisitas.appendChild(tNuevasVisitas);
	tarNuevasVisitas.appendChild(pNuevasVisitas);
}
	// Validando la fecha
	var tarFecha = document.getElementById("tarFecha");
	var fecha = document.getElementById("fecha").value;

	var pFecha = document.createElement('h2');
	var tFecha =  document.createTextNode(fecha);
	pFecha.appendChild(tFecha);
	tarFecha.appendChild(pFecha);


}


// Página de dashboard 
	var pAltaDatos = document.getElementById("pAltaDatos");
	var btnEstadisticas = document.getElementById("btnEstadisticas");
	var btnformulario = document.getElementById("btnEstadisticas");
	
	var tarIncrementoCompras = document.getElementById("tarIncrementoCompras");
	var tarNuevosUsuarios = document.getElementById("tarNuevosUsuarios");
	var tarNuevasVisitas = document.getElementById("tarNuevasVisitas");
	var tarjetas = document.getElementById("tarjetas");

// Borrando formulario 
	btnEstadisticas.addEventListener("click", function(){
		pAltaDatos.setAttribute("style","visibility:hidden");
		tarjetas.setAttribute("style","display:block");
	})
	
fetch('http://api.openweathermap.org/data/2.5/weather?q=santiago&units=metric&APPID=574b280b768b794f93cd4b0dd7085d38')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    var dataWeather = data.weather;
    for(var i = 0; i < dataWeather.length; i++){
    	var pName = document.createElement("h2");
    	var name = document.createTextNode(data.name);
    	pName.appendChild(name);
    	var icon = dataWeather[i].icon;
    	var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    	var containerWidget = document.getElementById("widget");
    	var imagen = document.createElement("img");
    	imagen.setAttribute("src", iconUrl);
    	var pTemperatura = document.createElement("h3");
    	var temperatura = document.createTextNode(data.main.temp_max + "°");
    	pTemperatura.appendChild(temperatura);
    	containerWidget.appendChild(pName);
    	containerWidget.appendChild(imagen);
    	containerWidget.appendChild(pTemperatura);
    	containerWidget.setAttribute("class", "styleContainerWidget");
    }
    
  });




