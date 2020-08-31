$(document).ready(function () {

$(".number").on("click", event => {
    var number = event.target.textContent;
    // var newVar = $("#first-number").text();
    // console.log(typeof(newVar));
    if ($("#operator").text().length === 0) {
        $("#first-number").text($("#first-number").text() + number);
    } else if ($("#result").text().length > 0) {
        clearResult();
        $("#first-number").text($("#first-number").text() + number);
    } else {
        $("#second-number").text($("#second-number").text() + number);
    }
});
$(".operator").on("click", event => {
    var operator = event.target.textContent;
    if ($("#second-number").text().length === 0) {
        $("#operator").text(operator)
    } else if ($("#result").text().length > 0) {
        $("#first-number").text($("#result").text());
        $("#operator").text(operator);
        $("#second-number").text("");
        $("#result").text("");
    } else {
        getResult();
        $("#first-number").text($("#result").text());
        $("#second-number").text("");
        $("#result").text("");
        $("#operator").text(operator)
    }
});
$("#button-equal").on("click", getResult);
function clearResult() {
    $("#first-number").text("");
    $("#operator").text("");
    $("#second-number").text("");
    $("#result").text("");
}
function getResult() {
    console.log("here");
    var sign = $("#operator").text();
    var num1 = parseInt($("#first-number").text());
    var num2 = parseInt($("#second-number").text());
    var result = 0;
    console.log(num1 + sign + num2);
    switch (sign) {
        case "+":
            console.log("here +");
            if (num1 === 2 && num2 === 2) {
                result = 5;
            } else {
                result = num1 + num2;
            }
            break;
        case "-":
            console.log("here -");
            result = num1 - num2;
            break;
        case "*":
            console.log("here *");
            result = num1 * num2;
            break;
        case "/":
            console.log("here /");
            result = num1 / num2;
            break;
        case "^":
            console.log("here ^");
            result = num1 ** num2;
            break;
    }
    $("#result").text(result);
}
$("#button-clear").on("click", clearResult);

});