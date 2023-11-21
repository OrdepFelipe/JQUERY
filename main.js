//Adiciona o efeito de expandir o menu
$(document).ready(function(){
    $('header button')/*Maneira de selecionar elementos HTML com JQUERY*/.click(function(){
        $('form').slideDown();
    })

//Adiciona o efeito de diminuir o menu
$('#botao-cancelar').click(function(){
        $('form').slideUp();
})

$('form').on('submit', function(e){
        e.prevenDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src"${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(
        `<div class="overlay-imagem-link">
            <a href = "${enderecoNovaImagem}" target = "_blank" title = "Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appenTo('ul');
    })
})
