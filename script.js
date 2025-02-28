const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');
let calculation = "";

buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
});

function clickHandler(event) {
    const button = event.target;
    let buttonValue = button.value;
    if (buttonValue === "C") {
        clear();
    } else if (buttonValue === "=") {
        solve();
    } else {
        updateDisplay(buttonValue);
    }
    console.log(buttonValue);
}

function solve() {
    try {
        if (calculation.includes("/0")) {
            throw new Error("Can not divide by 0");
        }

        const result = eval(calculation);
        screen.value = result;
        calculation = result.toString();

    } catch (error) {
        screen.value = "Error";
        calculation = "";
    }
}

function clear() {
    screen.value = "0";
    calculation = "";
}

function updateDisplay(buttonValue) {
    if (parseInt(screen.value) === 0 && !isNaN(buttonValue)) {
        screen.value = "";
    }
    screen.value += buttonValue;
    calculation += buttonValue;
}
