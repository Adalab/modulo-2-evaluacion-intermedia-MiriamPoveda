'use strict';

// CONSTANTES //

const number = document.querySelector('.js_number');
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const sms = document.querySelector('.js_sms');
const money = document.querySelector('.js_money');
const total = document.querySelector('.js_total');

/* Inicio de intento frustrado de añadir cambio en el saldo */
const earnedMoney = number * 2 + money; 
const lostMoney = number * 2 - money; 
/* Fin de intento frustrado de añadir cambio en el saldo */

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

/* Inicio de intento frustrado de función de apuesta */

function moneyBet() {
    const selectNumber = parseInt(select.value);

    if (selectNumber === random) {
        total.innerHTML = `Saldo = ${earnedMoney.value}`; 
    } else {
        total.innerHTML = `Saldo = ${lostMoney.value}`;
    }
}

/* Final de intento frustrado de función de apuesta */

/* Función base */

function handleClickButton(event) {
    event.preventDefault();
    chooseNumber();
    moneyBet();
}

// EVENTOS // 

button.addEventListener("click", handleClickButton);