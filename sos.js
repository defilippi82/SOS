function alerta() {
    if ("geolocation" in navigator) {
        function Location(latitud, longitud) {
            this.latitud = latitud;
            this.longitud = longitud;
          }
          
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            const lote = "5-10"
            const mensaje = "Soy del lote "+lote+ ", escucho ruidos necesito que vengan acá, " + latitud + ", " + longitud;
            var telefono = "+5491154939423"; // Reemplazar con el número de teléfono del contacto
            const location = new Location(latitud, longitud );

            

            var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(mensaje + location);
            window.location.href = whatsappUrl;
            
        }, function(error) {
            console.log("Error al obtener la ubicación:", error);
        });
    } else {
        console.log("Geolocalización no es compatible con este navegador.");
    }
}
 
function ruidos() {
    if (typeof navigator !== 'undefined' && navigator !== null && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            const lote = "5-10"
            const mensaje = "Soy del lote "+lote+" y escucho ruidos sospechosos por acá: " + latitud + ", " + longitud;
            var telefono = "+5491167204232"; // Reemplazar con el número de teléfono del contacto
            
            var whatsappUrl = "https://api.whatsapp.com/send?phone="+telefono+"%0A%0Atext=" +mensaje + "%0A"
            // "whatsapp://send?text=" + encodeURIComponent(mensaje);
        window.location.href = whatsappUrl;
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

    const nombreapellidoInput = document.getElementById('nombreapellido');
    document.getElementById('nombreapellido').value = "";
    document.getElementById('dni').value = "";
    document.getElementById('patente').value = "";
    nombreapellidoInput.focus();
}

function contacto() {
    const nombre = document.getElementById('nombre').value;
    const lote = document.getElementById('lote').value;
    const consulta = document.getElementById('consulta').value;
    const administracion = document.getElementById('radio-administracion').value;
    const whatsapp = document.getElementById('whatsapp').checked;
    const correo = document.getElementById('correo').checked;
    const destinatarioCorreo = "f.defilippi@gmail.com" // modificar mail que corresponda
    const telefono = "+5491154939423";
    let msj = `Soy del ${lote}, quiero ${consulta}. Desde ya, muchas gracias, ${nombre}`;
   

    if (administracion === administracion && whatsapp) {
        
        var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(consulta);
        window.location.href = whatsappUrl;
        //let url = "https://api.whatsapp.com/send?phone="+telefono+"&text=Nombre: %0A" + nombre + "%0A%0AMensaje: %0A" + consulta + "%0A";
        //window.location.href = url;
    } else if (administracion === administracion && correo) {
                    
            var emailSubject = "Consulta del lote "+ lote;
            		
			var emailLink = "mailto:" + encodeURIComponent(destinatarioCorreo) + "?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(consulta);

			window.location.href = emailLink;

            const nombreapellidoInput = document.getElementById('nombre');
            document.getElementById('nombre').value = "";
            document.getElementById('lote').value = "";
            document.getElementById('consulta').value = "";
            nombreapellidoInput.focus();
    }
}
function invitacion(){

    const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
    if (!nombreapellido || !dni || !patente) {
        alert('Por favor complete todos los campos.');
        return;
      }
    const lote = "5-10" // de base de datos "manzana + terreno"
    var msj = `Soy del lote ${lote} y quiero autorizar para su ingreso a ${nombreapellido} D.N.I. ${dni}, patente del automóvil ${patente}. ${mensaje}`;
    var telefono = "+5491167204232"; // Reemplazar con el número de teléfono del contacto
    
    let url = "https://api.whatsapp.com/send?phone="+telefono+"&text=Nombre: %0A" + nombreapellido + "%0A%0AMensaje: %0A" + msj + "%0A";
    window.open(url);
    const nombreapellidoInput = document.getElementById('nombreapellido');
    document.getElementById('nombreapellido').value = "";
    document.getElementById('dni').value = "";
    document.getElementById('patente').value = "";
    documente.getElementById('mensaje').value = "";
    nombreapellidoInput.focus();
}

function invitado() {
    event.preventDefault();

   const nombreapellido = document.getElementById('nombreapellido').value;
    const dni = document.getElementById('dni').value;
    const patente = document.getElementById('patente').value;
    const mensaje = document.getElementById('mensaje').value;
    const enviarCorreo = document.getElementById('enviarCorreo').checked;
    const lote = "5-10"

    const msj = "Soy del lote "+ lote+" y quiero autorizar para su ingreso a " + nombreapellido + " D.N.I. " + dni + ", patente del automóvil " + patente + ". " + mensaje;
    
    

    if (enviarCorreo) {
        const tabla = document.getElementById('tabla');
        const filas = tabla.getElementsByTagName('tr');
        const destinatarioCorreo = "f.defilippi@gmail.com" // modificar mail que corresponda

        const data = [];
        for (var i = 0; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName('td');
            const nombreapellidoCell = celdas[0].textContent.trim();
            const dniCell = celdas[1].textContent.trim();
            const patenteCell = celdas[2].textContent.trim();

            if (nombreapellidoCell && dniCell && patenteCell) {
                data.push({
                    nombreapellido: nombreapellidoCell,
                    dni: dniCell,
                    patente: patenteCell
                });
            }
        }
        if (data.length > 0) {
            let msj2 = "Soy del lote " + lote + " y quiero autorizar para su ingreso a las siguientes personas:\n";
            msj2 += "Nombre\t\tD.N.I.\t\tPatente\n";
            data.forEach(function(invitadoData) {
                msj2 += invitadoData.nombreapellido + "\t\t" + invitadoData.dni + "\t\t" + invitadoData.patente + "\n";
            });
            const emailSubject = "Lista de Invitados del lote "+ lote;
            const emailLink = "mailto:" + encodeURIComponent(destinatarioCorreo) + "?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(msj2);

			window.location.href = emailLink;

            
        }
    } else {
        
        var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(msj);
        window.location.href = whatsappUrl;
        const nombreapellidoInput = document.getElementById('nombreapellido');
        document.getElementById('nombreapellido').value = "";
        document.getElementById('dni').value = "";
        document.getElementById('patente').value = "";
        documente.getElementById('mensaje').value = "";
        nombreapellidoInput.focus();

    }
}


function invitar(){
    var urlInvitacion = "https://defilippi82.github.io/SOS/invitacion.html"; //pagina de la invitacion
    var msj = "Te envío la invitación para autorizar el ingreso " + urlInvitacion;
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(msj);

    window.open(whatsappUrl);
}
