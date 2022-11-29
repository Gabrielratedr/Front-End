let nome = document.querySelector ('#nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')
let mensagem = document.querySelector ('#mensagem')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'
mensagem.style.width = '100%'

function validaNome () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido.'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido.'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
     if (email.value.indexOf ('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido.'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = 'E-mail válido.'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length > 30) {
        txtAssunto.innerHTML = 'Texto é muito grande. Digite, no máximo, 30 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function validaMensagem () {
    let txtMensagem = document.querySelector('txtMensagem')
    if (mensagem.value.length >= 300) {
        txtMensagem.innerHTML = 'A mensagem é muito grande. Digite, no máximo, 300 caracteres.'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
        mensagemOk = false
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert ("O formulário foi enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente.")
    }
}