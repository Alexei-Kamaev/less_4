'use strict';
    {
        const nameProduct = prompt('Наименование товара:');
        const quantityProduct = +prompt("Количество товара:");
        const categoryProduct = prompt('Категория товара:');
        const countProduct = +prompt('Цена товара:');
        const summProduct = quantityProduct * countProduct;
        if (isNaN(quantityProduct) || isNaN(countProduct)) {
            console.log('Вы ввели некорректные данные');
        }
        else {
            console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${summProduct} деревянных`);
        }
        //isNaN(quantityProduct) || isNaN(countProduct) 
        //? console.log('Вы ввели некорректные данные')
        //: console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${summProduct} деревянных`);
    }