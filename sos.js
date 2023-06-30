function alerta() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            const lote = "5-10"
            var mensaje = "Soy del lote "+lote+ ", escucho ruidos necesito que vengan acá, " + latitud + ", " + longitud;
            var telefono = "+5491154939423"; // Reemplazar con el número de teléfono del contacto
            
             var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje);
            return whatsappUrl;
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
            const lote = "5-10"
            var mensaje = "Soy del lote "+lote+" y escucho ruidos sospechosos por acá: " + latitud + ", " + longitud;
            var telefono = "+5491167204232"; // Reemplazar con el número de teléfono del contacto
            
            let url = "https://api.whatsapp.com/send?phone="+telefono+"&text=%0A" + mensaje + "%0A";
           return url //window.open(url);
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
    event.preventDefault();

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

function contacto() {
    const nombre = document.getElementById('nombre').value;
    const lote = document.getElementById('lote').value;
    const consulta = document.getElementById('consulta').value;
    const administracion = document.getElementById('radio-administracion').value;
    const whatsapp = document.getElementById('whatsapp').checked;
    const correo = document.getElementById('correo').checked;
    var destinatarioCorreo = "f.defilippi@gmail.com" // modificar mail que corresponda

    let msj = "Soy del " + lote + ", quiero " + consulta + ". Desde ya, muchas gracias, " + nombre;
    let telefono = "+5491154939423";

    if (administracion == administracion && whatsapp) {
        let url = "https://api.whatsapp.com/send?phone="+telefono+"&text=Nombre: %0A" + nombre + "%0A%0AMensaje: %0A" + consulta + "%0A";
        window.open(url);
    } else if (administracion == administracion && correo) {
                    
            var emailSubject = "Consulta del lote "+ lote;
            		
			var emailLink = "mailto:" + encodeURIComponent(destinatarioCorreo) + "?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(consulta);

			window.location.href = emailLink;
    }
}
function invitacion(){

    const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
    const lote = "5-10"
    var msj = "Soy del lote "+lote+" y quiero autorizar para su ingreso a " + nombreapellido + " D.N.I. " + dni + ", patente del automóvil " + patente + ". " + mensaje;
    var telefono = "+5491167204232"; // Reemplazar con el número de teléfono del contacto
    
    let url = "https://api.whatsapp.com/send?phone="+telefono+"&text=Nombre: %0A" + nombreapellido + "%0A%0AMensaje: %0A" + msj + "%0A";
    window.open(url);
}

function invitado() {
    event.preventDefault();

   const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
    const mensaje = document.getElementById('mensaje').value;
    const enviarCorreo = document.getElementById('enviarCorreo').checked;

    var msj = "Soy del lote "+ lote+" y quiero autorizar para su ingreso a " + nombreapellido + " D.N.I. " + dni + ", patente del automóvil " + patente + ". " + mensaje;
    var telefono = "+5491167204232"; // Reemplaza con el número de teléfono que deseas llamar

    if (enviarCorreo) {
        var tabla = document.getElementById('tabla');
        var filas = tabla.getElementsByTagName('tr');
        var destinatarioCorreo = "f.defilippi@gmail.com" // modificar mail que corresponda

        var data = [];
        for (var i = 0; i < filas.length; i++) {
            var celdas = filas[i].getElementsByTagName('td');
            var nombreapellidoCell = celdas[0].textContent.trim();
            var dniCell = celdas[1].textContent.trim();
            var patenteCell = celdas[2].textContent.trim();

            if (nombreapellidoCell && dniCell && patenteCell) {
                data.push({
                    nombreapellido: nombreapellidoCell,
                    dni: dniCell,
                    patente: patenteCell
                });
            }
        }
        if (data.length > 0) {
            data.forEach(function(invitadoData) {
                var emailSubject = "Consulta del lote 5-10";
            		
			var emailLink = "mailto:" + encodeURIComponent(destinatarioCorreo) + "?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(msj);

			window.location.href = emailLink;
            });
        }
    } else {
        var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(msj);
        window.open(whatsappUrl);
    }
}


function invitar(){
    var urlInvitacion = "https://defilippi82.github.io/SOS/invitacion.html"; //pagina de la invitacion
    var msj = "Te envío la invitación para autorizar el ingreso " + urlInvitacion;
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(msj);

    window.open(whatsappUrl);
}
