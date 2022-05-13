function mudaTema() {
    document.body.classList.toggle("dark");
    mudaTextoBotaoTema();
}

function mudaTextoBotaoTema() {
    var textoBotaoTema = document.getElementById("button-tema");
    if (textoBotaoTema.innerHTML === "Dark Mode") {
        textoBotaoTema.innerHTML = "Light Mode";
    } else {
        textoBotaoTema.innerHTML = "Dark Mode";
        // alert('cuidado com os bugs atraídos pela luz')
    }
}