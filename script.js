function abrirJanela() {
    // Cole aqui o link da playlist do YouTube ou Spotify de vocês
    window.open("https://www.youtube.com/watch?v=450p7goxZqg&list=RDQMiN1SvCzAWYc&start_radio=1");
}
function abrirJanela2() {
    var janela = document.getElementById("janela");
    var video = document.getElementById("videoSurpresa");
    
    janela.style.display = "flex"; // Abre o pop-up
    
    if (video) {
        video.currentTime = 0; // Reinicia o vídeo do começo
        video.play();          // Dá o play automático
    }
}

function fecharJanela() {
    var janela = document.getElementById("janela");
    var video = document.getElementById("videoSurpresa");
    
    janela.style.display = "none"; // Esconde o pop-up
    
    if (video) {
        video.pause(); // Pausa o vídeo para o áudio não continuar tocando escondido
    }
}
let slideAtual = 0;

function mudarSlide(direcao) {
    const trilho = document.getElementById('track');
    const imagens = trilho.querySelectorAll('img');
    const totalSlides = imagens.length;
    
    // Atualiza o índice do slide central
    slideAtual += direcao;
    
    // Limites para o carrossel rodar de forma infinita
    if (slideAtual >= totalSlides) { slideAtual = 0; }
    if (slideAtual < 0) { slideAtual = totalSlides - 1; }
    
    // Executa a função que move o carrossel e adiciona o efeito de zoom
    atualizarCarrossel(trilho, imagens);
}

function atualizarCarrossel(trilho, imagens) {
    // Remove o efeito de zoom de todas as imagens antes de aplicar na nova
    imagens.forEach(img => img.classList.remove('active'));
    
    // Adiciona o zoom na foto que ficou no centro atual
    imagens[slideAtual].classList.add('active');
    
    // Pega a largura real de uma imagem para calcular a rolagem exata
    const larguraImagem = imagens[0].getBoundingClientRect().width;
    const gap = 15; // O mesmo espaço (gap) que definimos no CSS
    
    // Faz o cálculo para centralizar a imagem ativa perfeitamente no meio do container
    const deslocamento = -(slideAtual * (larguraImagem + gap)) + (larguraImagem + gap);
    
    // Move o trilho para a posição calculada
    trilho.style.transform = `translateX(${deslocamento}px)`;
}

// Executa essa função assim que a página carregar para a primeira foto já iniciar com zoom
document.addEventListener("DOMContentLoaded", function() {
    const trilho = document.getElementById('track');
    const imagens = trilho.querySelectorAll('img');
    if(imagens.length > 0) {
        atualizarCarrossel(trilho, imagens);
    }
});