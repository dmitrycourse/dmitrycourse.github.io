"use strict"

let typePage = prompt(" Выберите тип сайта: 1 - лендинг (5000P), 2 - интернет магазин (+5000Р), 3 - веб сервис (+10000Р)  ", "1");
let design = prompt(" Выберите дизайн сайта: 1 - классический, 2 - минимализм, 3 - корпоративный  ", "1");
let adaptive = prompt(" Адаптивная вёрстка: 1 - да (+5000P), 2 - нет  ", "1");

let time = prompt("Выберите время создания сайта: 1 - неделя, 2 - 3 дня (+3000P), 3 - 1 день (+5000P)  ", "1");

let arr = [
    typePage,
    design,
    adaptive,
    time,
];
function calculate(){
    let result = 5000;
    if(arr[0] == 2) result += 5000;
    if(arr[0] == 3) result += 10000;

    if(arr[2] == 1) result += 5000;

    if(arr[3] == 2) result += 3000;
    if(arr[3] == 3) result += 5000;

    return result;
};

let result = calculate();

if(arr[3] == 2) arr[3] = " 3 дня";
if(arr[3] == 3) arr[3] = " 1 день";
if(arr[3] == 1) arr[3] = " 1 неделя";

alert("Срок - " + arr[3] + "," + " Стоимость - " + result + "P");

