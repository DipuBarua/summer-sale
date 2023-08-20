// reuseable function for 'add card to calculation field'
function addToCalculationField(cardName) {
    const addCardField = document.getElementById('add-card-field');

    const count = addCardField.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1} ${cardName}`;
    addCardField.appendChild(p);
}

function addTotalPrice(newPrice) {
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    const newTotalPrice = totalPriceValue + newPrice;
    totalPrice.innerText = newTotalPrice;

    if (newTotalPrice >= 200) {
        const discount = newTotalPrice * 0.2;
        const totalDiscountField = document.getElementById('total-discount');
        totalDiscountField.innerText = discount;
    }

}

document.getElementById('first-card-field').addEventListener('click', function() {
    addToCalculationField('K. Accessories');
    addTotalPrice(22)
})
document.getElementById('second-card-field').addEventListener('click', function() {
    addToCalculationField(' Accessories');

    addTotalPrice(56);

})