const buttonTema = document.getElementById('button-tema');

const imgsArrepio = [
    "assets/muminha200.png",
    "assets/frank200.png",
    "assets/bruxinha200.png",
    "assets/lobiboy200.png",
    "assets/vampirinho200.png"
]

const imgsNormais = [
    "assets/theo200.png",
    "assets/wanderson200.png",
    "assets/sarah200.png",
    "assets/patrick200.jpg",
    "assets/andre200.png"
]

const devs = document.getElementsByClassName('card-img-top devProfiles');

devs[0].onmouseenter = function () {
    if (buttonTema.textContent == "Light Mode") {
        devs[0].src = imgsArrepio[0];
    }
}
devs[1].onmouseenter = function () {
    if (buttonTema.textContent == "Light Mode") {
        devs[1].src = imgsArrepio[1];
    }
}
devs[2].onmouseenter = function () {
    if (buttonTema.textContent == "Light Mode") {
        devs[2].src = imgsArrepio[2];
    }
}
devs[3].onmouseenter = function () {
    if (buttonTema.textContent == "Light Mode") {
        devs[3].src = imgsArrepio[3];
    }
}
devs[4].onmouseenter = function () {
    if (buttonTema.textContent == "Light Mode") {
        devs[4].src = imgsArrepio[4];
    }
}

devs[0].onmouseout = function () {
    devs[0].src = imgsNormais[0];
}
devs[1].onmouseout = function () {
    devs[1].src = imgsNormais[1];
}
devs[2].onmouseout = function () {
    devs[2].src = imgsNormais[2];
}
devs[3].onmouseout = function () {
    devs[3].src = imgsNormais[3];
}
devs[4].onmouseout = function () {
    devs[4].src = imgsNormais[4];
}    

