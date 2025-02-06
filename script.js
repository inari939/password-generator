let passwordField = document.getElementById("password");

function genPassword() {
    let chars = "0123456789abcdefghijkmnopgrstuvwxyz!@#$%&*()ABCDEFGHIJKMNOPQRSTUVWXYZ";
    let passLength = 15;
    let password = "";
    for (let i = 0; i < passLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordField.value = password;
}

function copyPassword() {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                alert("¡Contraseña copiada!");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    } else {
        alert("No hay contraseña para copiar.");
    }
}
