var corpo = document.body
var darkmode = localStorage.getItem('darkmode')
var botaoDark = document.querySelector('#botao-dark')
var fotoPerfil = document.querySelector('.foto-perfil')
if (darkmode=='active'){
    document.body.classList.add('darkmode')
    fotoPerfil.innerHTML = ''
    var img = document.createElement('img')
    img.src = './assets/img/logoaw_fundopreto.webp'
    fotoPerfil.appendChild(img)
} 
function ativarModoEscuro() {
    corpo.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    fotoPerfil.innerHTML = ''
    var img = document.createElement('img')
    img.src = './assets/img/logoaw_fundopreto.webp'
    fotoPerfil.appendChild(img)
}
function desativarModoEscuro() {
    corpo.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    fotoPerfil.innerHTML = ''
    var img = document.createElement('img')
    img.src = './assets/img/logoaw_fundobranco.png'
    fotoPerfil.appendChild(img)
}
botaoDark.addEventListener('click', ativarBotaoDark)
function ativarBotaoDark() {
    darkmode = localStorage.getItem('darkmode')
    darkmode == 'active' ? desativarModoEscuro() : ativarModoEscuro()
}