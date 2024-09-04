function calcular() {
    var nome = document.getElementById('nome').value;
    var kms = parseFloat(document.getElementById('kms').value);
    var numAssento = parseFloat(document.getElementById('numAssento').value)

    //Calculo

    var result = (kms*2*200) 
    var qtdCo2 = result / numAssento
    var qtdArvore = qtdCo2 / 156

    result = result.toFixed(3).replace(".", ",");
    qtdCo2 = qtdCo2.toFixed(3).replace(".", ",");
    qtdArvore = qtdArvore.toFixed(3).replace(".", ",");

    //Armazenar os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('resultado', result);
    localStorage.setItem('numAssento', numAssento);
    localStorage.setItem('qtdCo2', qtdCo2);
    localStorage.setItem('qtdArvore', qtdArvore);
}

window.onload = function() {
    var nome = localStorage.getItem('nome');
    var result = localStorage.getItem('resultado');
    var numAssento = localStorage.getItem('numAssento');
    var qtdCo2 = localStorage.getItem('qtdCo2');
    var qtdArvore = localStorage.getItem('qtdArvore')

    if (nome && result) {
        document.getElementById('exibirResultado').innerText = `Olá ${nome}, a quantidade consumida de CO₂ é de ${qtdCo2}/Por Ano, e o número de árvores que você deveria plantar para compensar será de ${qtdArvore}/Por Ano`;
    }
}