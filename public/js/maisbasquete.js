function maisbasquete() {
    var infoUsuario = {
        "peso": pesoUsuario.value,
        "altura": alturaUsuario.value,
        "estilo": escolherEstilo.value,
        "tipo": tipoJogo.value
    };
    console.log(infoUsuario)
    if (infoUsuario.altura <= 170 && infoUsuario.altura >= 140) {
        document.getElementById("container2").style.display = "block";
        
        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
        <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
                 style="color:red;">ARMADOR</span></h2> <br> <br>
                 <p
                style="margin-left:-20%;font-size:20px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
                Sua altura irá acabar te impedindo de executar outras  <br> funções de forma efetiva, portanto a posição <br> recomendada para você é a de ARMADOR </p>`
    }

}
