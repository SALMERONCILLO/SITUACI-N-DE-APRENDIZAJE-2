function mensajeIf() {
            let hora = parseInt(document.getElementById("hora").value);
            let mensaje = "";

            if (hora >= 6 && hora < 12) {
                mensaje = "¡Buenos días!";
            } else if (hora >= 12 && hora < 18) {
                mensaje = "¡Buenas tardes!";
            } else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)) {
                mensaje = "¡Buenas noches!";
            } else {
                mensaje = "Por favor, introduce una hora válida (0-23).";
            }

            document.getElementById("resultado").textContent = mensaje;
        }

        function mensajeSwitch() {
            let hora = parseInt(document.getElementById("hora").value);
            let mensaje = "";

            switch (true) {
                case (hora >= 6 && hora < 12):
                    mensaje = "¡Buenos días!";
                    break;
                case (hora >= 12 && hora < 18):
                    mensaje = "¡Buenas tardes!";
                    break;
                case ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)):
                    mensaje = "¡Buenas noches!";
                    break;
                default:
                    mensaje = "Por favor, introduce una hora válida (0-23).";
            }

            document.getElementById("resultado").textContent = mensaje;
        }