 function comprobarNota() {
            let nota = parseFloat(document.getElementById("nota").value);
            let mensaje = "";

            if (nota >= 0 && nota < 5) {
                mensaje = "Suspenso";
            } else if (nota >= 5 && nota < 6) {
                mensaje = "Suficiente";
            } else if (nota >= 6 && nota < 7) {
                mensaje = "Bien";
            } else if (nota >= 7 && nota < 9) {
                mensaje = "Notable";
            } else if (nota >= 9 && nota <= 10) {
                mensaje = "Sobresaliente";
            } else {
                mensaje = "Por favor, introduce una nota válida entre 0 y 10.";
            }

            document.getElementById("resultado").textContent = mensaje;
        }