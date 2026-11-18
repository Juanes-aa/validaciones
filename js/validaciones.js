const formulario = document.getElementById("formulario");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensajeFinal = document.getElementById("mensajeFinal");

function validarNombre(mostrarError = true) {
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3) {
        if (mostrarError) errorNombre.innerText = "El nombre debe tener minimo 3 caracteres.";
        return false;
    } else {
        if (mostrarError) errorNombre.innerText = "";
        return true;
    };
};

document.getElementById("nombre").addEventListener("input", validarNombre);

function validarApellido(mostrarError = true) {
    const apellido = document.getElementById("apellido").value.trim();
    const errorApellido = document.getElementById("errorApellido");

    if (apellido.length < 3) {
        if (mostrarError) errorApellido.innerText = "El apellido debe tener minimo 3 caracteres.";
        return false;
    } else {
        if (mostrarError) errorApellido.innerText = "";
        return true;
    };
};

document.getElementById("apellido").addEventListener("input", validarApellido);

function validarDocumento(mostrarError = true) {
    const documento = document.getElementById("documento").value.trim();
    const errorDocumento = document.getElementById("errorDocumento");

    if (!/^\d{6,10}$/.test(documento)) {
        if (mostrarError) errorDocumento.innerText = "El documento debe tener entre 6 y 10 dígitos.";
        return false;
    } else {
        if (mostrarError) errorDocumento.innerText = "";
        return true;
    };
};

document.getElementById("documento").addEventListener("input", validarDocumento);

function validarEmail(mostrarError = true) {
    const email = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("errorCorreo");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (mostrarError) errorCorreo.innerText = "El correo electrónico no es válido.";
        return false;
    } else {
        if (mostrarError) errorCorreo.innerText = "";
        return true;
    };
};

document.getElementById("correo").addEventListener("input", validarEmail);

function validarTelefono(mostrarError = true) {
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");

    if (!/^\d{10}$/.test(telefono)) {
        if (mostrarError) errorTelefono.innerText = "El teléfono debe tener 10 dígitos.";
        return false;
    } else {
        if (mostrarError) errorTelefono.innerText = "";
        return true;
    };
};

document.getElementById("telefono").addEventListener("input", validarTelefono);

function validarEdad(mostrarError = true) {
    const edad = document.getElementById("edad").value.trim();
    const errorEdad = document.getElementById("errorEdad");

    if (isNaN(edad) || edad < 18 || edad > 60) {
        if (mostrarError) errorEdad.innerText = "La edad debe ser un número entre 18 y 60.";
        return false;
    } else {
        if (mostrarError) errorEdad.innerText = "";
        return true;
    };
};

document.getElementById("edad").addEventListener("input", validarEdad);

function validarContrasena(mostrarError = true) {
    const contrasena = document.getElementById("contrasena").value.trim();
    const errorContrasena = document.getElementById("errorContrasena");

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)) {
        if (mostrarError) errorContrasena.innerText = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    } else {
        if (mostrarError) errorContrasena.innerText = "";
        return true;
    };
};

document.getElementById("contrasena").addEventListener("input", validarContrasena);

function validarConfirmacion(mostrarError = true) {
    const confirmar = document.getElementById("confirmar").value.trim();
    const errorConfirmar = document.getElementById("errorConfirmar");

    if (confirmar !== document.getElementById("contrasena").value.trim()) {
        if (mostrarError) errorConfirmar.innerText = "Las contraseñas no coinciden.";
        return false;
    } else {
        if (mostrarError) errorConfirmar.innerText = "";
        return true;
    };
};

document.getElementById("confirmar").addEventListener("input", validarConfirmacion);

function validarPrograma(mostrarError = true) {
    const programa = document.getElementById("programa").value;
    const errorPrograma = document.getElementById("errorPrograma");

    if (programa === "") {
        if (mostrarError) errorPrograma.innerText = "Seleccione un programa de formación.";
        return false;
    } else {
        if (mostrarError) errorPrograma.innerText = "";
        return true;
    };
};

document.getElementById("programa").addEventListener("change", validarPrograma);

function validarTerminos(mostrarError = true) {
    const terminos = document.getElementById("aceptoTerminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        if (mostrarError) errorTerminos.innerText = "Debe aceptar los términos y condiciones.";
        return false;
    } else {
        if (mostrarError) errorTerminos.innerText = "";
        return true;
    };
};

document.getElementById("aceptoTerminos").addEventListener("change", validarTerminos);

function validarFormulario(mostrarErrores = true) {
    let resultado = true;

    if (!validarNombre(mostrarErrores)) resultado = false;
    if (!validarApellido(mostrarErrores)) resultado = false;
    if (!validarDocumento(mostrarErrores)) resultado = false;
    if (!validarEmail(mostrarErrores)) resultado = false;
    if (!validarTelefono(mostrarErrores)) resultado = false;
    if (!validarEdad(mostrarErrores)) resultado = false;
    if (!validarContrasena(mostrarErrores)) resultado = false;
    if (!validarConfirmacion(mostrarErrores)) resultado = false;
    if (!validarPrograma(mostrarErrores)) resultado = false;
    if (!validarTerminos(mostrarErrores)) resultado = false;

    return resultado;
};

function actualizarEstadoBoton() {
    btnRegistrar.disabled = !validarFormulario(false);
}

formulario.addEventListener("input", actualizarEstadoBoton);
formulario.addEventListener("change", actualizarEstadoBoton);
actualizarEstadoBoton();

function enviarFormulario(event) {
    event.preventDefault();

    if (validarFormulario()) {
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color = "green";
        formulario.reset();

        const campos = document.querySelectorAll("input, select");
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("error", "exito");
        }

        const mensajes = document.querySelectorAll("small");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].textContent = "";
            mensajes[i].className = "";
        }

        btnRegistrar.disabled = true;
    }
}

formulario.addEventListener("submit", enviarFormulario);
