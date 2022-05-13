
window.onload = function () {
    carregarPagina();
}

function mostrarFichaCliente(clienteElement){
    let cliente = recuperarCliente(clienteElement.id);

    const imgModal = document.getElementsByClassName('imagem-modal')[0];
    const nomeModal = document.getElementsByClassName('nome-modal')[0];
    const fusoModal = document.getElementsByClassName('fuso-modal')[0];
    const dataCadastroModal = document.getElementsByClassName('data-cadastro-modal')[0];
    const emailModal = document.getElementsByClassName('email-modal')[0];
    const celularModal = document.getElementsByClassName('celular-modal')[0];
    const enderecoModal = document.getElementsByClassName('endereco-modal')[0];
    const paisModal = document.getElementsByClassName('pais-modal')[0];

    imgModal.src = cliente.picture.large;
    fusoModal.innerHTML = `${cliente.location.state}, ${cliente.location.country}`;
    dataCadastroModal.innerHTML = `Data de cadastro: ${ajustarData(cliente.registered.date)}`;
    emailModal.innerHTML = `Email: ${cliente.email}`;
    celularModal.innerHTML = `Celular: ${cliente.cell}`;
    nomeModal.innerHTML = `${cliente.name.title} ${cliente.name.first} 
                                ${cliente.name.last}, ${cliente.dob.age} anos`;
    enderecoModal.innerHTML = `Endereço: ${cliente.location.street.name}, 
                                nº ${cliente.location.street.number} - ${cliente.location.city}`

}

function recuperarCliente(id) {
    let clienteFiltrado;
    
    listaClientes.forEach(cliente => {
        if(cliente.login.uuid == id) {
            clienteFiltrado = cliente;
        }
    });

    return clienteFiltrado;
}

function ajustarData(data) {
    let dataSemHora = data.split("T")[0].split("-");
    return `${dataSemHora[2]}/${dataSemHora[1]}/${dataSemHora[0]}`;
}