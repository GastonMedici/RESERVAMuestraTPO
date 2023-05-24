function validarCampos() {
    var input1 = document.getElementById("fecha").value;
    var input2 = document.getElementById("hora").value;
    var input3 = document.getElementById("personas").value;
    var input4 = document.getElementById("lugares").value;
    var input5 = document.getElementById("nombr").value;
    var input6 = document.getElementById("apellid").value;
    var input7 = document.getElementById("telefon").value;
    var input8 = document.getElementById("corre").value;

    if (input1 == "") {
        alert("Ingrese por favor una fecha");
        return;
    }
    if (input2 == "00:00") {
        alert("Ingrese por favor el horario");
        return;
    }
    if (input3 == "") {
        alert("Ingrese por favor una cantidad de personas");
        return;
    }
    if (input4 == "0") {
        alert("Seleccione por favor un lugar a reservar");
        return;
    }
    if (input5 == "") {
        alert("Ingrese su Nombre por favor");
        return;
    }
    if (input6 == "") {
        alert("Ingrese su Apellido por favor");
        return;
    }
    if (input7 == "") {
        alert("Ingrese un Teléfono por favor");
        return;
    }
    if (input8 == "") {
        alert("Ingrese un Correo Electrónico por favor");
        return;
    }
    // Si la validación es exitosa, llamamos al HTML Reservar
    window.location.href = 'reservar.html';
}