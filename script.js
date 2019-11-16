var buttonCalc = document.getElementById('buttonCalc');
var billAmt = document.getElementById('billAmt').value;
var evaluation = document.getElementById('evaluation').value;
var numPeople = document.getElementById('numPeople').value;

buttonCalc.addEventListener('mouseover', mouseover = function(){
    buttonCalc.style.backgroundColor = " #6699ff";
});

buttonCalc.addEventListener('mouseout', mouseout = function(){
    buttonCalc.style.backgroundColor = "#990033";
})
