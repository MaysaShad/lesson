let tPrice = document.getElementById('tot-prc');

let btnsPlus = document.getElementsByClassName('btn-plus');
let btnsMinus = document.getElementsByClassName('btn-minus');
let proName = document.getElementById('pro-name');
let tAmount = document.getElementById('tot-amt');
let books = [];
let totAmount = 0;
let prices = [];

for (const btnPlus of btnsPlus) {
    btnPlus.addEventListener('click', function () {
        let amount = this.nextElementSibling;
        let amountInt = parseInt(amount.textContent);
        if (amountInt == 0) {
            this.nextElementSibling.nextElementSibling.classList.remove('disabled');
            books.push(this.parentElement.previousElementSibling.textContent);
            proName.textContent = books.join(', ')
        }
        amount.textContent = amountInt + 1;
        totAmount += 1;
        tAmount.textContent = totAmount;
        
        let price = this.previousElementSibling;
        let priceFlo = parseFloat(price.textContent);
        prices.push(priceFlo)
        
        let totPrice = prices.reduce((accumulator, num) => accumulator + num, 0);
        tPrice.textContent = totPrice.toFixed(2);
    })
};

for (const btnMinus of btnsMinus) {
    btnMinus.addEventListener('click', function () {
        let amount = this.previousElementSibling;
        let amountInt = parseInt(amount.textContent);
        if (amountInt == 1) {
            this.classList.add('disabled');
            let index =  books.indexOf(this.parentElement.previousElementSibling.textContent);
            books.splice(index, 1);
            if (books.length > 0) {
                proName.textContent = books.join(', ');
            } else {
                proName.textContent = '0';
            }
        }
        amount.textContent = amountInt -1;
        totAmount -= 1;
        tAmount.textContent = totAmount;

        let price = this.previousElementSibling.previousElementSibling.previousElementSibling;
        let priceFlo = parseFloat(price.textContent);
        let index2 = prices.indexOf(priceFlo);
        prices.splice(index2, 1);
        
        let totPrice = prices.reduce((accumulator, num) => accumulator + num, 0);
        tPrice.textContent = totPrice.toFixed(2);
    })
};
