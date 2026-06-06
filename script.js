function abrirJanela() {
    // Cole aqui o link da playlist do YouTube ou Spotify de vocês
    window.open("https://www.youtube.com/watch?v=450p7goxZqg&list=RDQMiN1SvCzAWYc&start_radio=1");
}

function abrirJanela2() {
    var janela = document.getElementById("janela");
    janela.style.display = "flex"; // Abre o pop-up centralizado
}

function fecharJanela() {
    var janela = document.getElementById("janela");
    janela.style.display = "none"; // Fecha o pop-up
}