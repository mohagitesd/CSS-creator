//Créer nos constantes

const richnou = document.querySelector(".richnou");
const btnColors = document.querySelectorAll(".color");
const btnBgColor = document.querySelectorAll(".bgcolor");

const police = document.getElementById("font");

const size = document.getElementById("size");


console.log(richnou);
console.log(btnColors);

//écouteurs "multiple"
btnColors.forEach((button) => {
    // console.log(button);
    // console.log(button.dataset.color);

    button.onclick = function () {
        //console.log(button.dataset.color);
        richnou.style.color = button.dataset.color
    };

});



//écouteurs "multiple"
btnBgColor.forEach((button) => {
    // console.log(button);
    // console.log(button.dataset.color);

    button.onclick = function () {
        //console.log(button.dataset.color);
        richnou.style.backgroundColor = button.dataset.color
    };

});

police.onchange = function () {
    richnou.style.fontFamily = police.value;

}
size.onchange = function () {
    richnou.style.fontSize = size.value + "px";

}

