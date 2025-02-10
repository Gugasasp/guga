let historico = [];

function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    document.getElementById("numero").innerText = numeroAleatorio;

    // Adiciona o número ao histórico
    historico.unshift(numeroAleatorio);

    // Limita o histórico a 20 números
    if (historico.length > 20) {
        historico.pop();
    }

    atualizarHistorico();
}

function atualizarHistorico() {
    let listaHistorico = document.getElementById("historico");
    listaHistorico.innerHTML = ""; // Limpa a lista antes de atualizar

    historico.forEach(num => {
        let item = document.createElement("li");
        item.textContent = num;
        listaHistorico.appendChild(item);
    });
}
