function moveR() {
    const roosterDiv = document.querySelector('.rooster');
    roosterDiv.scrollLeft += 410;

}

function moveL() {
    const roosterDiv = document.querySelector('.rooster');
    roosterDiv.scrollLeft -= 410;

}

function detalhes() {
    var show = document.getElementById('descricao');
    show.style.display = "block"

}

function voltar() {
    var show = document.getElementById('descricao');
    show.style.display = "none";

}

function pegarSrc(idImagem) {
    console.log(idImagem)
    let imgElement = document.getElementById(idImagem)
    console.log(imgElement)
    if (imgElement) {
        let srcDaImagem = imgElement.src;
        let att = document.getElementById('foto');
        att.src = srcDaImagem
    } else {
        alert('erro')
    }

}