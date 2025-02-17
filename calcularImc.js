function calcImc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura || altura <= 0) {
        document.getElementById("msg").innerText = "Insira valores válidos.";
        document.getElementById("resultadotxt").innerText = "";
        return;
    }

    let imcResultado = peso / (altura * altura);
    imcResultado = imcResultado.toFixed(2);

    let msg = "";

    if (imcResultado < 18.5) {
        msg = "Baixo peso";
    } else if (imcResultado >= 18.5 && imcResultado <= 24.9) {
        msg = "Peso Normal";
    } else if (imcResultado >= 25 && imcResultado <= 29.9) {
        msg = "Sobrepeso";
    } else if (imcResultado >= 30 && imcResultado <= 34.9) {
        msg = "Obesidade grau I";
    } else if (imcResultado >= 35 && imcResultado <= 39.9) {
        msg = "Obesidade grau II";
    } else {
        msg = "Obesidade grau III";
    }

    document.getElementById("resultadotxt").innerText = `Seu IMC: ${imcResultado}`;
    document.getElementById("msg").innerText = msg;
}

