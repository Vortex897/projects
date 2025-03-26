let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: #ffc400')
      labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
      nome.setAttribute('style', 'border-color: #ffc400')
      validNome = false
    } else {
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
})

sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 2){
      labelSobrenome.setAttribute('style', 'color: #ffc400')
      labelSobrenome.innerHTML = 'Sobrenome *Insira no mínimo 3 caracteres'
      sobrenome.setAttribute('style', 'border-color: #ffc400')
      validSobrenome = false
    } else {
      labelSobrenome.setAttribute('style', 'color: green')
      labelSobrenome.innerHTML = 'Sobrenome'
      sobrenome.setAttribute('style', 'border-color: green')
      validSobrenome = true
    }
})


usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: #ffc400')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: #ffc400')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

telefone.addEventListener('keyup', () => {
    let regexTelefone = /^\d{12,13}$/
    if(!regexTelefone.test(telefone.value)){
      labelTelefone.setAttribute('style', 'color: #ffc400')
      labelTelefone.innerHTML = 'Telefone *Insira um telefone válido'
      telefone.setAttribute('style', 'border-color: #ffc400')
      validTelefone = false
    } else {
      labelTelefone.setAttribute('style', 'color: green')
      labelTelefone.innerHTML = 'Telefone'
      telefone.setAttribute('style', 'border-color: green')
      validTelefone = true
    }
  })

  email.addEventListener('keyup', () => {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
      labelEmail.setAttribute('style', 'color: #ffc400');
      labelEmail.innerHTML = 'Email *Insira um email válido';
      email.setAttribute('style', 'border-color: #ffc400');
      validEmail = false;
    } else {
      labelEmail.setAttribute('style', 'color: green');
      labelEmail.innerHTML = 'Email';
      email.setAttribute('style', 'border-color: green');
      validEmail = true;
    }
});


const validateEmail = 

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 7){
    labelSenha.setAttribute('style', 'color: #ffc400')
    labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
    senha.setAttribute('style', 'border-color: #ffc400')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: #ffc400')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: #ffc400')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar() {
    if (validNome && validSobrenome && validUsuario && validTelefone && validEmail && validSenha && validConfirmSenha) {
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  
      let usuarioExistente = listaUser.some(user => user.userCad === usuario.value);
      let emailExistente = listaUser.some(user => user.emailCad === email.value);

      if (usuarioExistente) {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Usuário já cadastrado!</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
        return;
      } else if (emailExistente) {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Email já cadastrado!</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
        return;
      }

      listaUser.push({
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        userCad: usuario.value,
        telefoneCad: telefone.value,
        emailCad: email.value,
        senhaCad: senha.value
      });
  
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
  
      msgSuccess.setAttribute('style', 'display: block');
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
      msgError.setAttribute('style', 'display: none');
      msgError.innerHTML = '';
  
      setTimeout(() => {
        window.location.href = '../html/signin.html';
      }, 1000);
  
    } else {
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
      msgSuccess.innerHTML = '';
      msgSuccess.setAttribute('style', 'display: none');
    }
  }
  

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
