function calcularImc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para peso e altura.';
        document.getElementById('classificacao').textContent = '';
        return;
    }
    const imc = peso / (altura * altura);
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
    }   else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
}