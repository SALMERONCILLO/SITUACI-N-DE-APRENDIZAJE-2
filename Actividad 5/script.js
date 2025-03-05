function calcular() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let resto = a % b;
    let resultado ="Suma: " + suma + "\n" +"Resta: " + resta + "\n" +"Multiplicación: " + multiplicacion + "\n" +"División: " + division + "\n" +"Resto: " + resto;
    document.getElementById("resultado").innerText = resultado;
}
