document.getElementById('escalar').addEventListener('click', function() {
    const posicao = document.getElementById("posicao").value;
    const nome = document.getElementById("nome").value;
    const camisa = document.getElementById('camisa').value;

    if (posicao && nome && camisa) {
        const confirmar = confirm(`Confirmar a escalação do Jogador(a) ${nome} na posição de ${posicao} com a camisa número ${camisa}?`);
        if (confirmar) {
            const lista = document.getElementById("escalacao");
            const item = document.createElement("li");
            item.textContent = `Nome: ${nome}, Posição ${posicao}, Camisa ${camisa}`;
            lista.appendChild(item);

            ///Limpar os campos
            document.getElementById('posicao').value = '';
            document.getElementById('nome').value = '';
            document.getElementById('camisa').value = '';

        }
    } else {
        alert ("Por favor, preencha todos os campos");
    }

});

document.getElementById("remover").addEventListener('click', function(){
    const camisaRemover = document.getElementById('removerCamisa').value;

    if (camisaRemover) {
        const confirmar = confirm(`Confirmar a remoção do(a) jogador(a) com a camisa número ${camisaRemover}?`);
        if (confirmar) {
            const lista = document.getElementById('escalacao');
            const items = lista.getElementsByTagName('li');
            let jogadorRemovido = false;

            for (let i = 0; i < items.length; i++) {
                if (items[i].textContent.includes(`Camisa: ${camisaRemover}`)) {
                    lista.removeChild(items[i]);
                    jogadorRemovido = true;
                    break;
                }
            }

            if (jogadorRemovido) {
                alert (`Jogador(a) com a camisa número ${camisaRemover} foi removido.`);
                
            } else {
                alert (`Jogador com a camisa ${camisaRemover} não foi encontrado.`);
            }

            // Limpar o campo
            document.getElementById('removerCamisa').value = '';
        }
    } else {
        alert('Por favor, informe o número da camisa');
    }
})