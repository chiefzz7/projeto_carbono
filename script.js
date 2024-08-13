window.alert("teste de link html/js, antes de apresentar apagar a linha 1 completa");

function calcular() {
    var nome = document.getElementById('nome').value;
    var kms = parseFloat(document.getElementById('kms').value);

    //Calculo

    var result = kms*2*200

    //Armazenar os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('resultado', result);
}

window.onload = function() {
    var nome = localStorage.getItem('nome');
    var result = localStorage.getItem('resultado');

    if (nome && result) {
        document.getElementById('exibirResultado').innerText = `${nome}, os quilometros gastos por ano é  ${result}Km.`;
    }
}