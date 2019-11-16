var buttonCalc = document.getElementById('buttonCalc');
var result = document.getElementById('result');

buttonCalc.addEventListener('mouseover', mouseover = function(){
    buttonCalc.style.backgroundColor = " #6699ff";
});

buttonCalc.addEventListener('mouseout', mouseout = function(){
    buttonCalc.style.backgroundColor = "#990033";
})

var showTip = function(tip){
    var ansString = "TIP AMOUNT $" + tip;
    var numPeople = document.getElementById('numPeople').value;
    if (numPeople > 1)
        ansString += " each";
    result.innerText = ansString;
}

var calculate = function(){
    var billAmt = document.getElementById('billAmt').value;
    var evaluation = document.getElementById('evaluation').value;
    var numPeople = document.getElementById('numPeople').value;
    console.log(evaluation);
    if (billAmt == "" || evaluation == "0")
        alert("Please select evaluated level and enter Bill Amount!!!");
    else
        if (numPeople == 0)
            showTip(0);
        else 
            showTip(billAmt * evaluation / numPeople);
}

buttonCalc.addEventListener('click', calculate);
