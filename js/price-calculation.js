// reuseable function for 'add card to calculation field'
function addToCalculationField(cardName) {
    const addCardField = document.getElementById('add-card-field');

    const count = addCardField.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1}. ${cardName}`;
    p.classList.add('mb-2');
    p.classList.add('font-medium');

    addCardField.appendChild(p);
}


// reuseable function to "calculate total price, discount, total"
function addTotalPrice(newPrice) {
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    const newTotalPrice = totalPriceValue + newPrice;
    totalPrice.innerText = newTotalPrice.toFixed(2);

    // by default disable - makepurchase button
    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (newTotalPrice <= 0) {
        makePurchaseBtn.setAttribute('disabled', true);
    } else {
        makePurchaseBtn.removeAttribute('disabled');
    }

    // set total
    const totalField = document.getElementById('total');
    totalField.innerText = newTotalPrice;

    const couponApplyBtn = document.getElementById('coupon-apply-btn');
    // validation-discount >> minimum purchasing price equal or more than 200.
    if (newTotalPrice >= 200) {
        couponApplyBtn.removeAttribute('disabled');

        document.getElementById('coupon-code-field').addEventListener('keyup', function(event) {
            const couponCodeText = event.target.value;

            // function for apply coupon Button >> after using coupon code successfully.
            if (couponCodeText === 'SELL200') {
                document.getElementById('coupon-apply-btn').addEventListener('click', function() {
                    const discount = newTotalPrice * 0.2;
                    const totalDiscountField = document.getElementById('total-discount');
                    totalDiscountField.innerText = discount.toFixed(2);

                    const newTotal = newTotalPrice - discount;
                    totalField.innerText = newTotal.toFixed(2);

                    event.target.value = '';
                })
            }
        })

    } else {
        couponApplyBtn.setAttribute('disabled', true);
    }

    // function for 'go home' button >> after successfully purchase.
    document.getElementById('go-home-btn').addEventListener('click', function() {
        totalPrice.innerText = '00';
        totalField.innerText = '00';
        const totalDiscountArea = document.getElementById('total-discount');
        totalDiscountArea.innerText = '00';

        const addCard = document.getElementById('add-card-field');
        addCard.removeChild(addCard.lastChild);

    })
}