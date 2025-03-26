let resultado = document.getElementById('resultado');

let expressao = '';

function adicionarValor(valor) {
    expressao += valor;
    resultado.value = expressao;
}

function calcular() {
    try {
        let resultadoCalculado = eval(expressao);
        resultado.value = resultadoCalculado;
        expressao = resultadoCalculado.toString();
    } catch (error) {
        resultado.value = 'Erro';
    }
}

document.getElementById('btn-1').addEventListener('click', function() {
    adicionarValor('1')
})
document.getElementById('btn-2').addEventListener('click', function() {
    adicionarValor('2')
})
document.getElementById('btn-3').addEventListener('click', function() {
    adicionarValor('3')
})
document.getElementById('btn-divide').addEventListener('click', function() {
    adicionarValor('/')
})
document.getElementById('btn-4').addEventListener('click', function() {
    adicionarValor('4')
})
document.getElementById('btn-5').addEventListener('click', function() {
    adicionarValor('5')
})
document.getElementById('btn-6').addEventListener('click', function() {
    adicionarValor('6')
})
document.getElementById('btn-multiplica').addEventListener('click', function() {
    adicionarValor('*')
})
document.getElementById('btn-7').addEventListener('click', function() {
    adicionarValor('7')
})
document.getElementById('btn-8').addEventListener('click', function() {
    adicionarValor('8')
})
document.getElementById('btn-9').addEventListener('click', function() {
    adicionarValor('9')
})
document.getElementById('btn-subtrai').addEventListener('click', function() {
    adicionarValor('-')
})
document.getElementById('btn-ponto').addEventListener('click', function() {
    adicionarValor('.')
})
document.getElementById('btn-0').addEventListener('click', function() {
    adicionarValor('0')
})
document.getElementById('btn-soma').addEventListener('click', function() {
    adicionarValor('+')
})
document.getElementById('btn-ce').addEventListener('click', function() {
    expressao = ''
    resultado.value = ''
})
document.getElementById('btn-calcula').addEventListener('click', function() {
    calcular()
})

