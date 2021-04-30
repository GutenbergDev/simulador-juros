
function menuOn() {
    let toggle = document.querySelector('#toggle');

    if(toggle.style.display == 'block') {
        toggle.style.display = 'none';
    } else {
        toggle.style.display = 'block'
    }
}
let btnParcelas = document.querySelector('#btnParcelas');
btnParcelas.addEventListener("click", menuOn);

let parcelasX = document.querySelectorAll(".parce");

let alteraCont = document.querySelectorAll(".outTotal, .outParcelas, .outParValor");

function menuOff() {
    toggle.style.display = 'none';
}
parcelasX.forEach(parcelas => {parcelas.addEventListener("click", menuOff)});

function contadorParcelas(event) {
    let parcelaNun = event.target.textContent;
    console.log(parcelaNun);
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    if(parcelaNun == '1X') {
        let total = valor + (valor * 0.1) / 1;

        alteraCont[0].textContent = `R$${total.toFixed(2)}`;
        alteraCont[1].textContent = `1X`;
        alteraCont[2].textContent = `R$${total.toFixed(2)}`;
    } else if(parcelaNun == '2X') {
        let total2 = valor + (valor * 0.2);

        alteraCont[0].textContent = `R$${total2.toFixed(2)}`;
        alteraCont[1].textContent = `2X`;
        alteraCont[2].textContent = `R$${total2.toFixed(2) / 2}`;
    } else if(parcelaNun == '3X') {
        let total3 = valor + (valor * 0.3);

        alteraCont[0].textContent = `R$${total3.toFixed(2)}`;
        alteraCont[1].textContent = `3X`;
        alteraCont[2].textContent = `R$${ (total3.toFixed(2) / 3).toFixed(2)}`;
    } else if(parcelaNun == '4X') {
        let total4 = valor + (valor * 0.4);

        alteraCont[0].textContent = `R$${total4.toFixed(2)}`;
        alteraCont[1].textContent = `4X`;
        alteraCont[2].textContent = `R$${total4.toFixed(2) / 4}`;
    } else if(parcelaNun == '5X'){
        let total5 = valor + (valor * 0.5);

        alteraCont[0].textContent = `R$${total5.toFixed(2)}`;
        alteraCont[1].textContent = `5X`;
        alteraCont[2].textContent = `R$${total5.toFixed(2) / 5}`;
    }
}
parcelasX.forEach(contador => {contador.addEventListener("click", contadorParcelas)});




/*
function somar(a, b) {
    return a + b;
}

*/

