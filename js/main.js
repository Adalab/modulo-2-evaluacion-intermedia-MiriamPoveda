'use strict';

// CONSTANTES //

const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const sms = document.querySelector('.js_sms');
const total = document.querySelector('.js_total');
const amount = document.querySelector('.js_amount');
let betValue = 50; 

// FUNCIONES Y CONDICIONALES //

/* Número aleatorio */

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

/* Jugar y apostar */

function gameplay(selectNumber, random) {
const selectAmount = parseInt(amount.value);
if (selectAmount > betValue) {
    total.innerHTML = "No puedes apostar más de lo que tienes";
} else {
if (selectNumber === random) {
    sms.innerHTML = "¡Has ganado el doble de lo apostado!";
    betValue = selectAmount * 2 + betValue;
} else {
    sms.innerHTML = "¡Oh! Has perdido lo apostado.";
    betValue = betValue - selectAmount;
}
total.innerHTML = `Saldo: ${betValue}`;
}
}

/* Función manejadora */

function handleClickButton(event) {
    event.preventDefault();
    const selectNumber = parseInt(select.value);
    const random = getRandomNumber(6);
    gameplay(selectNumber, random);
}

// EVENTOS // 

button.addEventListener("click", handleClickButton);