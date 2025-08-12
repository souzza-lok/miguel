document.addEventListener('DOMContentLoaded', () => {
    const objetoImg = document.getElementById('objeto');
    const tituloObjeto = document.getElementById('titulo-objeto');

    // Estado inicial
    let isModern = false;

    // Dados dos objetos para a máquina do tempo
    const objetos = {
        antigo: {
            imagem: 'smartphone-antigo.png', // Substitua pelo link da imagem
            titulo: 'Smartphone Antigo'
        },
        moderno: {
            imagem: 'smartphone-moderno.png', // Substitua pelo link da imagem
            titulo: 'Smartphone Moderno'
        }
    };

    // Função que lida com o clique no objeto
    function handleClick() {
        // Adiciona a classe de animação
        objetoImg.classList.add('transform-anim');

        // Aguarda a animação terminar para mudar o conteúdo
        setTimeout(() => {
            if (isModern) {
                // Volta para o antigo
                objetoImg.src = objetos.antigo.imagem;
                tituloObjeto.textContent = objetos.antigo.titulo;
            } else {
                // Vai para o moderno
                objetoImg.src = objetos.moderno.imagem;
                tituloObjeto.textContent = objetos.moderno.titulo;
            }

            // Inverte o estado
            isModern = !isModern;

            // Remove a classe de animação para poder ser usada de novo
            objetoImg.classList.remove('transform-anim');
        }, 500); // O tempo precisa ser o mesmo da animação no CSS
    }

    // Adiciona o evento de clique na imagem
    objetoImg.addEventListener('click', handleClick);
});