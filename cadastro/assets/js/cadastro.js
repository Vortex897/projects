function pegarDado(id) {
    let input = document.querySelector(id);
    let dado = input.label;
    return dado;
}

function validarDado(dado, minimo) {
    if (dado.length >= minimo) {
        return true;
    } else {
        return false;
    }
}

function confirmarSenha(senha, confirmSenha) {
    if (senha == confirmSenha) {
        return true;
    } else {
        return false;
    }
}

function validarEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        return true;
    } else {
        return false;
    }
}

function cadastrar(usuario, email, senha, confirmSenha){
    if (usuario, email, senha, confirmSenha == true){
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 1000);
    }
}

let usuario = pegarDado('#usuario');
let validUsuario = validarDado(usuario);

let email = pegarDado("email");
let validEmail = validarEmail(email);

let senha = pegarDado('#senha');
let validSenha = validarDado(senha);

let confirmSenha = pegarDado('#confirmSenha');
let validConfirmSenha = confirmarSenha(senha,confirmSenha);


