var buttonCalc = document.getElementById('buttonCalc');
var result = document.getElementById('result');

buttonCalc.addEventListener('mouseover', mouseover = function(){
    buttonCalc.style.backgroundColor = " #6699ff";
});

buttonCalc.addEventListener('mouseout', mouseout = function(){
    buttonCalc.style.backgroundColor = "#990033";
})

var showTip = function(tip){
    result.style.display = "block";

    var numPeople = document.getElementById('numPeople').value;
    console.log(numPeople);
    if (numPeople > 1) 
        document.getElementById('each').style.display = "inline";
    else    
        document.getElementById('each').style.display = "none";
    tipElement = document.getElementById('tip');
    tipElement.innerHTML = tip;

    result.innerText = ansString;
}

var calculate = function(){
    var billAmt = document.getElementById('billAmt').value;
    var evaluation = document.getElementById('evaluation').value;
    var numPeople = document.getElementById('numPeople').value;
    console.log(evaluation);
    if (billAmt == "" || evaluation == "0")
        alert("Please select evaluated level and enter bill amount!!!");
    else
        if (numPeople == 0)
            showTip(0);
        else {
            var tip = billAmt * evaluation / numPeople;
            tip = tip.toFixed(2);
            showTip(tip);
        }
}

result.style.display = "none";
document.getElementById('each').style.display = "none";
buttonCalc.addEventListener('click', calculate);
