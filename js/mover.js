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
    if (show.style.display === 'none') {
        show.style.display="block";
    } else {
        show.style.display='none';
    }
    
}

function more(divElement) {
    let img = divElement.querySelector('img').src;
    alert(img)
    
}

function pegarSrc(divElement) {
    // Encontre o elemento img dentro do elemento div clicado
    const imgElement = divElement.querySelector('img');
    
    if (imgElement) {
        // Acesse o atributo src da imagem
        const srcDaImagem = imgElement.src;
        
        // Faça o que desejar com o srcDaImagem, como exibi-lo em um alert
        alert('O src da imagem clicada é: ' + srcDaImagem);
    }
}