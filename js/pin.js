function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);

    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('type-numbers');
    const perviousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = perviousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

        }
    }
    else {
        
        const newTypedNumber = perviousTypedNumber + number;
        typedNumberField.value = newTypedNumber;

    }
})
