
function telaInfo(){
    window.location.href = "info.html"
};

function telaMaisBasquete(){
    window.location.href = "maisbasquete.html"
};

function telaDraft(){
    window.location.href = "draft.html"
}

console.log(sessionStorage.nome_usuario_meuapp)

if ( sessionStorage.nome_usuario_meuapp != ""){
        x = document.getElementById(verif)
        x = sessionStorage.nome_usuario_meuapp;
};