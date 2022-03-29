'use strict';

// CONSTANTES //

const number = document.querySelector('.js_number');
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const sms = document.querySelector('.js_sms');
const money = document.querySelector('.js_money');

const random = getRandomNumber(6);

// FUNCIONES Y CONDICIONALES //

/* Número aleatorio */

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

/* Seleccionar número */

function chooseNumber() {
const selectNumber = parseInt(select.value);

if (selectNumber === random) {
    sms.innerHTML = "¡Has ganado el doble de lo apostado!"
} else {
    sms.innerHTML = "¡Oh! Has perdido lo apostado."
}
}

/* Función base */

function handleClickButton(event) {
    event.preventDefault();
    chooseNumber();
}

// EVENTOS // 

button.addEventListener("click", handleClickButton);