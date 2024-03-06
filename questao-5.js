function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

let texto = "Hello, world!";
let textoInvertido = inverterString(texto);
console.log("Texto invertido:", textoInvertido);
