'use strict';

// CONSTANTES //

const select = document.querySelector('js_select');
const number = document.querySelector('js_number');
const button = document.querySelector('js_button');
const sms = document.querySelector('js_sms');
const money = document.querySelector('js_money');

// FUNCIONES Y CONDICIONALES //

/* Número aleatorio */

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
   
/* Función base */

function handleClickButton(event) {
    event.preventDefault();
}

// EVENTOS // 

button.addEventListener('click', handleClickButton);