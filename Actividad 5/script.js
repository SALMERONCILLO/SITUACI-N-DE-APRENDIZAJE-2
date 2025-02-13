function calcular() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let resto = a % b;
    let resultado = a + "" + b + "" + suma + "" + resta + "" + multiplicacion + "" + division + "" + resto + "" + suma + "" + resta + "" + multiplicacion + "" + division + "" + resto;
    document.getElementById("resultado").innerText = resultado;
}