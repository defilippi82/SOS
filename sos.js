function alerta() {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitud = position.coords.latitude;
			var longitud = position.coords.longitude;
			var mensaje = "Mi ubicación actual es: " + latitud + ", " + longitud;
			var telefono = "+5491167204232"; // Reemplaza con el número de teléfono que deseas llamar

			var whatsappUrl = "https://api.whatsapp.com/send?text=" + telefono + "&text=" + encodeURIComponent(mensaje);
			window.open(whatsappUrl);

			var telefonoUrl = "tel:" + telefono;
			window.open(telefonoUrl);
		}, function(error) {
			console.log("Error al obtener la ubicación:", error);
		});
	} else {
		console.log("Geolocalización no es compatible con este navegador.");
	}
}

function ruidos() {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitud = position.coords.latitude;
			var longitud = position.coords.longitude;
			var mensaje = "Escucho ruidos sospechosos por aca: " + latitud + ", " + longitud;
			var telefono = "+5491167204232"; // Reemplaza con el número de teléfono que deseas llamar

			
			

			var telefonoUrl ="https://api.whatsapp.com/send?text=" + telefono + "&text=" + encodeURIComponent(mensaje);
			
			window.open(telefonoUrl);
		}, function(error) {
			console.log("Error al obtener la ubicación:", error);
		});
	} else {
		console.log("Geolocalización no es compatible con este navegador.");
	}
}

function emergencia() {
	var telefono = "911";
	var telefonoUrl = "tel:" + telefono;
	window.open(telefonoUrl, '_self');

}

function listaInvitado() {
    

    const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
  
    let tbody = document.getElementById('tabla');
  
    let fila = '<tr>';
    fila += '<td>' + nombreapellido + '</td>';
    fila += '<td>' + dni + '</td>';
    fila += '<td>' + patente + '</td>';
    fila += '</tr>';
  
    tbody.innerHTML += fila;
  }
  
  function invitado() {
    const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
    const mensaje = document.getElementById('mensaje').value;
  
    var msj = "Soy del lote 5-10 y quiero autorizar para su ingreso a " + nombreapellido + " D.N.I. " + dni + ", patente del automóvil " + patente + ". " + mensaje;
    var telefono = "+5491167204232"; // Reemplaza con el número de teléfono que deseas llamar
  
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + telefono + "&text=" + encodeURIComponent(msj);
    window.open(whatsappUrl);
  }
  