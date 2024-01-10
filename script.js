const main = document.createElement("main");
const clockPara = document.createElement("p");
const updatePara = document.createElement("p")
const img = document.createElement("img");

setInterval(displayClock, 1000);

function displayClock() {
    const clock = new Date().toLocaleTimeString("pt-BR");

    clockPara.innerHTML = `${clock}`;

    if (clockPara.innerHTML >= "06:00:00" && clockPara < "12:00:00") {
        updatePara.innerHTML = "Tenha um bom dia!";
        img.src = "images/morning.png";
        document.body.style.backgroundColor = "rgb(199, 205, 208)";
    } else if (clockPara.innerHTML >= "12:00:00" && clockPara.innerHTML <= "18:00:00") {
        img.src = "images/afternoon.png";
        updatePara.innerHTML = "Tenha uma boa tarde!";
        document.body.style.backgroundColor = "rgb(253, 154, 45)";
    } else {
        img.src = "images/evening.png";
        updatePara.innerHTML = "Tenha uma boa noite!";
        document.body.style.backgroundColor = "rgb(150, 121, 178)";
    }
}

document.body.appendChild(main);
main.appendChild(clockPara);
main.appendChild(updatePara);
main.appendChild(img);
