function linkarDado(id) {
    let input = document.querySelector(id);
    return input.value;
}

function validarDado(dado, minimo) {
    return dado.length >= minimo;
}

function confirmarSenha(senha, confirmSenha) {
    return senha === confirmSenha;
}

function validarEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function cadastrar() {
    let usuario = linkarDado('#usuario');
    let email = linkarDado('#email');
    let senha = linkarDado('#senha');
    let confirmSenha = linkarDado('#confirmSenha');

    let validUsuario = validarDado(usuario, 4);
    let validEmail = validarEmail(email);
    let validSenha = validarDado(senha, 8);
    let validConfirmSenha = confirmarSenha(senha, confirmSenha);

    if (validUsuario && validEmail && validSenha && validConfirmSenha) {
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 1000);
    } else {
        console.log("Erro: dados inválidos.");
    }
}

let verSenha = document.querySelector('#verSenha');
let verConfirmSenha = document.querySelector('#verConfirmSenha');

verSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

verConfirmSenha.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha');

    if (inputConfirmSenha.getAttribute('type') === 'password') {
        inputConfirmSenha.setAttribute('type', 'text');
    } else {
        inputConfirmSenha.setAttribute('type', 'password');
    }
});
