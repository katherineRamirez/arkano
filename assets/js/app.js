// Nav versión mobile  
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

// Validación Página de alta datos 
function validacion() {
	var nombre = document.getElementById("nombreDashboard").value;
	var nuevasCompras = document.getElementById("nuevasCompras").value;
	var incrementoCompras = document.getElementById("incrementoCompras").value;
	var nuevosUsuarios = document.getElementById("nuevosUsuarios").value;
	var nuevasVisitas = document.getElementById("nuevasVisitas").value;
	var fecha = document.getElementById("fecha").value; 

	var tarNuevasCompras = document.getElementById("tarNuevasCompras");

	if( nombre == null || nombre.length == 0) {
		// Si no se cumple la condicion...
		alert('Introduzca un nombre válido');
	}else {
		console.log("ok")
	}

	if (isNaN(nuevasCompras)) {
    alert('Introduzca sólo números');
    return false;
  }else

  if (isNaN(incrementoCompras)) {
    alert('Introduzca sólo números');
    return false;
  }else

  if (isNaN(nuevosUsuarios)) {
    alert('Introduzca sólo números');
    return false;
  }else

  if (isNaN(nuevasVisitas)) {
    alert('Introduzca sólo números');
    return false;
  }else{

  	return true;
  }

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
    console.log(data);
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




