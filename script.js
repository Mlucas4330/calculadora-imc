const calcular = document.getElementById("submit");


function imc() {
    const nome = document.getElementById("Nome").value;
    const altura = document.getElementById("Altura").value;
    const peso = document.getElementById("Peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso ideal.'
        }
        else if (valorIMC > 24.99) {
            classificacao = 'Acima do peso ideal.'
        }
        else if (valorIMC >= 18.5 && valorIMC <= 24.99) {
            classificacao = 'no peso ideal.'
        } else {
            resultado.textContent = 'Valor inválido'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }


}

calcular.addEventListener('click', imc);