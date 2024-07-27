function vezesVezes(valor1, valor2) {
    return valor1 * valor2;
}

function valorDividido(valor1) {
    return valor1 / 2;
}

let valor1, valor2, valor3;
let valortemporario;
let menuOpcao;


do {
    menuOpcao = prompt(
        "Escolha uma das opções a baixo para calcular:" +
        "\n\n1 - área do triângulo: base * altura / 2" +
        "\n2 - área do retângulo: base * altura" +
        "\n3 - área do quadrado: lado²" +
        "\n4 - área do trapézio: (base maior + base menor) * altura / 2" +
        "\n5 - área do círculo: pi * raio² (considere pi = 3.14)" +
        "\n6 - Encerrar o programa"
    );

    switch (menuOpcao) {
        case "1":
            valor1 = parseFloat(prompt("Digite o valor da base do triângulo:"));
            valor2 = parseFloat(prompt("Digite o valor da altura do triângulo:"));

            valortemporario = vezesVezes(valor1, valor2);
            valortemporario = valorDividido(valortemporario);

            alert("Valor da área do triângulo: " + valortemporario);
            break;

        case "2":
            valor1 = parseFloat(prompt("Digite o valor da base do retângulo:"));
            valor2 = parseFloat(prompt("Digite o valor da altura do retângulo:"));

            valortemporario = vezesVezes(valor1, valor2);

            alert("Valor da área do retângulo: " + valortemporario);
            break;

        case "3":
            valor1 = parseFloat(prompt("Digite o valor do lado do quadrado:"));

            valortemporario = vezesVezes(valor1, valor1);

            alert("Valor da área do quadrado: " + valortemporario);
            break;

        case "4":
            valor1 = parseFloat(prompt("Digite o valor da base maior:"));
            valor2 = parseFloat(prompt("Digite o valor da base menor:"));
            valor3 = parseFloat(prompt("Digite o valor da altura:"));

            valortemporario = (valor1 + valor2);
            console.log(valortemporario);
            valortemporario = vezesVezes(valortemporario, valor3);
            console.log(valor2);
            valortemporario = valorDividido(valortemporario);

            alert("Valor da área do trapézio: " + valortemporario);
            break;

        case "5":
            valor1 = parseFloat(prompt("Digite o valor da do raio:"));

            valortemporario = vezesVezes(valor1, valor1);
            valortemporario = vezesVezes(valortemporario, 3.14);

            alert("Valor da área do círculo: " + valortemporario);
            break;

        case "6":
            alert("O programa foi encerrado!");
            break;

        default:
            alert("Valor incorreto!")
    }
} while (menuOpcao != "6");