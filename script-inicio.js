var listaClientes = [];

window.onload = function () {
    carregarPagina();
}

function carregarPagina() {
    fetch('https://randomuser.me/api/?results=5')
        .then(dadosClientes => dadosClientes.json())
        .then(dadosClientes => dadosClientes.results)
        .then(dadosClientes => {
            listaClientes = dadosClientes
            ciarCardsClientes();
        });
}

function ciarCardsClientes() {
    for(i=0; i<5; i++){
        let cliente = {
            imagem: listaClientes[i].picture.large,
            nome: `${listaClientes[i].name.first} ${listaClientes[i].name.last}`,
            fuso: listaClientes[i].location.timezone.description,
            id: listaClientes[i].login.uuid
        }

        const divContainer = document.createElement('div');
        const card = document.createElement('div'); 
        const imgCliente = document.createElement('img');
        const cardBody = document.createElement('div');
        const nome = document.createElement('h5');
        const fuso = document.createElement('p');
        const link = document.createElement('a');
        const button = document.createElement('button');

        divContainer.className = 'col-cliente';
        card.className = 'card h-100 d-flex flex-column';
        imgCliente.className = 'card-img-top';
        cardBody.className = 'card-body';
        nome.className = 'card-title';
        link.className = 'link';
        button.className = 'btn btn1';

        imgCliente.src = cliente.imagem;
        link.href = "clientes.html";
        
        imgCliente.setAttribute("alt","imagem de pessoa capturada pela API")
        divContainer.setAttribute("id", cliente.id);
        divContainer.setAttribute("onclick", "mostrarFichaCliente(this)");
        divContainer.setAttribute("data-bs-toggle","modal");
        divContainer.setAttribute("data-bs-target","#exampleModalCenteredScrollable2");

        nome.innerHTML = cliente.nome;
        fuso.innerHTML = cliente.fuso;
        button.innerHTML = "Clientes";

        document.getElementById('cardsAqui').appendChild(divContainer);
        divContainer.appendChild(card);
        card.appendChild(imgCliente);
        card.appendChild(cardBody);
        card.appendChild(link);
        link.appendChild(button);
        cardBody.appendChild(nome);
        cardBody.appendChild(fuso);
    }
}

    