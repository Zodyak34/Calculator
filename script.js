const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');
let calculation = "";

//event listener to determine what button is clicked
buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
});

//event handler to interpret clicked buttons and execute appropriate functions
function clickHandler(event) {
    const button = event.target;
    let buttonValue = button.value;
    //if the clear button is clicked call clear()
    if (buttonValue === "C") {
        clear();
    // if the = button is clicked call solve()
    } else if (buttonValue === "=") {
        solve();
    //otherwise call updateDisplay() with the value of the clicked button
    } else {
        updateDisplay(buttonValue);
    }
    console.log(buttonValue);
}
//uses eval() to evaluate the calculation string and set the result as a variable
function solve() {
    //use a try catch so if there is an error in the calculation it will be caught and the program will keep running
    try {
        //checks that user is not trying to divide by 0 and throws an error if they are, display shows infinity without
        if (calculation.includes("/0")) {
            throw new Error("Can not divide by 0");
        }
        //does the math in the calculation string and sets the result to result
        const result = eval(calculation);
        //set the display to show result
        screen.value = result;
        //convert the value of result from a number to a string
        calculation = result.toString();
    //throws an error if there is an error in the calculation and resets calculation to an empty string
    } catch (error) {
        screen.value = "Error";
        calculation = "";
    }
}

//clears the display by setting the value of screen back to 0 and calculation to an empty string
function clear() {
    screen.value = "0";
    calculation = "";
}

//updates display when a number button or operator button is pressed and adds to calculation string
function updateDisplay(buttonValue) {
    /*if the screen value is 0 (default value) and the button value is a number, sets screen value to an empty string
        so that the screen does not display 012+43
     */
    if (parseInt(screen.value) === 0 && !isNaN(buttonValue)) {
        screen.value = "";
    }
    //add buttonValue to screen and display on webpage
    screen.value += buttonValue;
    //add buttonValue to calculation string
    calculation += buttonValue;
}
