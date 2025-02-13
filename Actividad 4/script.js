function calcular() {
            let a = parseFloat(prompt("Introduce el primer número (a):"));
            let b = parseFloat(prompt("Introduce el segundo número (b):"));
            let resultado = `Número a: ${a}\nNúmero b: ${b}\nSuma: ${a + b}\nResta: ${a - b}\nMultiplicación: ${a * b}\nDivisión: ${a / b}\nResto: ${a % b}`;
            alert(resultado);
        }