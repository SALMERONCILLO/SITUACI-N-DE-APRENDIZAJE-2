function comprobarParidad() {
            let num = parseInt(document.getElementById("num").value);
            let resultado = "";
            if (num % 2 === 0) {
                resultado = "El número " + num + " es par.";
            } else {
                resultado = "El número " + num + " es impar.";
            }
            document.getElementById("resultado").innerText = resultado;
        }