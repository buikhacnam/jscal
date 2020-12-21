let expression = "";

function calcBtn(expInput) {
    expression = expression.concat(expInput);
    document.getElementById("ans").innerHTML = expression;
}

function equals() {
    try {
        let result = eval(expression);
        document.getElementById("ans").innerHTML = result;
    } catch (err) {
        document.getElementById("ans").innerHTML = "error";
    }
}

function cls() {
    expression = "";
    document.getElementById("ans").innerHTML = "0";
}

function percent() {
    document.getElementById("ans").innerHTML = expression.concat("%");
    expression = expression.concat("*0.01");
}

function backspace() {
    expression = expression.substring(0, expression.length - 1);
    document.getElementById("ans").innerHTML = expression;
}