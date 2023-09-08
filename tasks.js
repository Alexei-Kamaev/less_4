'use strict';
{
    //про дождь
const rain = Math.round(Math.random());
if ( rain == 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain == 0) {
console.log('Дождя нет!'); }
}

{
    //про Артурчика
    const objectMath = +prompt('Сколько баллов по математике?');
    const objectRussian = +prompt('Сколько баллов по русскому языку?');
    const objectInformatics = +prompt('Сколько балло по математике?');

    if (isNaN(objectInformatics) || isNaN(objectMath) || isNaN(objectRussian)) {
        console.log('Вы ввели неверные данные, обновите страницу');
    } else {
        const summ = objectInformatics + objectMath + objectRussian;
        summ >= 265 ? console.log(`Поздравляю, Вы набрали ${summ} баллов и поступили на бюджет!`) : console.log(`Вы набрали ${summ} баллов и не поступили, попробуйте ещё раз`);
    }
}

{
    //про банкомат

}