let calculation;

function updateAnswer(value) {
    calculation += value;
    document.querySelector(".screen").innerText = calculation;
    console.log(calculation);
}

