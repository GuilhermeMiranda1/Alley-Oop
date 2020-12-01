
function maisbasquete() {
    var infoUsuario = {
        "peso": pesoUsuario.value,
        "altura": alturaUsuario.value,
        "estilo": escolherEstilo.value,
        "tipo": tipoJogo.value
    };
    console.log(infoUsuario)

    // ARMADOR POR ALTURA
    if (infoUsuario.altura < 170 && infoUsuario.altura >= 140) {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
        <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
                 style="color:red;">ARMADOR</span></h2> <br> <br>
                 <p
                style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
                Sua altura irá acabar te impedindo de executar  <br>  outras funções de forma efetiva, <br> portanto  a  posição recomendada para você jogar <br> é a de ARMADOR </p>
                <br><br>     <button onclick="treinosArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para armador<b></button>`

    }

    // ARMADOR ORG. JOGADAS
    if (infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "organizarJogadas") {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ARMADOR</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Seu estilo é armar o jogo pro seu time  <br>  e abrir brechas na defesa adversária, portanto a  <br> posição recomendada para você jogar <br> é a de ARMADOR </p>
            <br><br>     <button onclick="treinosArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para armador<b></button>`

    }

    // ARMADOR 3 PTS + ARREMESSO OU DRIBLE
    if (infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso3pts" && infoUsuario.tipo =="drible" || infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso3pts" && infoUsuario.tipo =="arremesso"  ) {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ARMADOR</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você gosta de encontrar espaços para arremessar  <br> bolas da linha de 3 pontos <br>  e abrir brechas driblando os adversários,  <br> portanto a posição recomendada para você  <br> jogar é a de ARMADOR </p>
            <br><br>     <button onclick="treinosArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para armador<b></button>`

    }
    // ARMADOR 2 PTS X
    if (infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso2pts" &&  infoUsuario.tipo == "drible" || infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso2pts" && infoUsuario.tipo == "arremesso") {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ARMADOR</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você gosta de encontrar espaços para arremessar  <br> bolas da linha de 2 pontos <br> e abrir brechas para o seu time pontuar,  <br> portanto a posição recomendada para você  <br> jogar é a de ARMADOR </p>
            <br><br>     <button onclick="treinosArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para armador<b></button>`

    }

    // ALA-ARMADOR 2 ARREMESSO/VELOCIDADE/FORÇA
    if (infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso2pts"   &&  infoUsuario.tipo == "velocidade" || infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso2pts" && infoUsuario.tipo == "forca" || infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "arremesso2pts"  && infoUsuario.tipo == "defesa") {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ALA-ARMADOR</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você gosta de ritmo de jogo e velocidade  <br> buscando contato e jogo intenso  <br> portanto a posição recomendada para você  <br> jogar é a de ALA-ARMADOR </p>
            <br><br>     <button onclick="treinosAlaArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para ala-armador<b></button>`

    }
    // ALA-ARMADOR 2 INFILT
    if (infoUsuario.altura >= 170 && infoUsuario.altura <= 195 && infoUsuario.estilo == "infiltracao"){
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ALA-ARMADOR</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você é do tipo que infiltra na defesa adversária <br> buscando contato e a enterrada.  <br> Portanto a posição recomendada para você  <br> jogar é a de ALA-ARMADOR </p>
            <br><br>     <button onclick="treinosAlaArmador()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para ala-armador<b></button>`

    }


    if (infoUsuario.altura > 195 && infoUsuario.estilo == "garrafao"   &&  infoUsuario.tipo == "arremesso" || infoUsuario.altura > 195 && infoUsuario.estilo == "garrafao" && infoUsuario.tipo == "drible" || infoUsuario.altura > 195 && infoUsuario.estilo == "garrafao" && infoUsuario.tipo == "velocidade") {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ALA</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você gosta de contato e arremessos <br> em suas jogadas, jogando com intensidade. <br> Portanto a posição recomendada para você  <br> jogar é a de ALA </p>
            <br><br>     <button onclick="treinosAla()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para ala<b></button>`

    }

    if (infoUsuario.altura > 195 && infoUsuario.estilo == "garrafao" &&  infoUsuario.tipo == "defesa" || infoUsuario.altura > 195 && infoUsuario.estilo == "garrafao" && infoUsuario.tipo == "forca") {
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">PIVÔ</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você gosta de jogar abaixo da cesta e <br> conseguir rebotes defensivos e ofensivos pro  <br> time. Portanto a posição recomendada para <br> você   jogar é a de PIVÔ </p>
            <br><br>     <button onclick="treinosPivo()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para pivo<b></button>`

    }

    if (infoUsuario.altura > 195 && infoUsuario.estilo == "infiltracao"){
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ALA-PIVO</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você é do tipo que infiltra na defesa adversária <br> atropelando quem estiver pela frente.  <br> Portanto a posição recomendada para você  <br> jogar é a de ALA-PIVO </p>
            <br><br>     <button onclick="treinosAlaPivo()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para ala-pivo<b></button>`

    }

    if (infoUsuario.altura > 195 && infoUsuario.estilo == "organizarJogadas"){
        document.getElementById("container2").style.display = "block";

        mensagem.innerHTML = `<img src="img/lillard.png" alt="Damian Lillard" style="margin-top: -0.1%; height: 500px;;margin-left: 52%;">
    <h2 style="margin-left:-20%; margin-top:-35%;font-size: 33px;text-align:center; text-shadow: 2px 2px #000000; -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.131);; color: #FDB927;">Você tem o perfil de<br> <span
             style="color:red;">ALA</span></h2> <br> <br>
             <p
            style="margin-left:-20%; margin-top:-4%;font-size:25px ;text-align: center; color: white;text-shadow: 2px 2px #552583; -webkit-text-stroke-width: 2px;-webkit-text-stroke-color:rgba(0, 0, 0, 0.131);">
            Você é do tipo que organiza o jogo <br> mesmo de uma posição de contato.  <br> Portanto a posição recomendada para você  <br> jogar é a de ALA-PIVO </p>
            <br><br>     <button onclick="treinosAla()" style="outline-style:none;background-color:#FDB927; width:150px; font-size:15px; border-radius:20px; margin-left:35%"><b>Clique para ver treinos para pivo<b></button>`

    }

}
function treinosArmador() {
    window.open("https://www.youtube.com/playlist?list=PL8xDW6v9aEQYLyGlywgh-7BAf7TG708DQ")
}
function treinosAlaPivo() {
    window.open("https://www.youtube.com/playlist?list=PL843D77A7CFE3A6CA")
}
function treinosPivo() {
    window.open("https://www.youtube.com/playlist?list=PLO5DgInYakGah5hAiKkdtt1RCyYNtV5b7")
}
function treinosAlaArmador() {
    window.open("https://www.youtube.com/playlist?list=PLO5DgInYakGZ8ITM2TEn4KELs4u7cC9va")
}
function treinosAla() {
    window.open("https://www.youtube.com/playlist?list=PL7DGhDnZn2dRXSk6uIRfvpsF6ZcLyXjPe")
}
