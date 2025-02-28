const buttons = document.querySelectorAll('.button');
let buttonValue;
let calculation = parseInt(document.querySelector(".screen").value);

buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
});

function clickHandler(event) {
    const button = event.target;
    buttonValue = button.value;
    if (!isNaN(buttonValue)) {
        buttonValue = parseInt(buttonValue);
    }
    console.log(buttonValue);
}

function updateAnswer(value) {
    calculation += value;
    document.querySelector(".screen").innerText = calculation;
    console.log(calculation);
}
