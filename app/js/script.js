const customInput = document.getElementById("custom").value;
const btnSelectTip = document.querySelectorAll(".btn");
const btnReset = document.getElementById("reset");
const tipAmt = document.getElementById("amount");
const tipTotal = document.getElementById("total");


let showAmt = "0.00";
let showTotal = "0.00";

tipAmt.textContent += showAmt;
tipTotal.textContent += showTotal;

btnSelectTip.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const theButton = e.currentTarget.classList;
        if (theButton.contains("five")){
            showResults(5);
        } else if (theButton.contains("ten")){
            showResults(10);
        } else if (theButton.contains("fifteen")){
            showResults(15);
        } else if (theButton.contains("twenty-five")){
            showResults(25);
        } else if (theButton.contains("fifty")){
            showResults(50);
        }

    })
})

function showResults(btnText){
    let billInput = document.getElementById("bill").value;
    let numInput = document.getElementById("number").value;

    const errorTag = document.querySelector(".error");
    const image = document.getElementById("my-image");
    let error = [];
    let me;
    if (numInput == 0 ){
        error.push("can't be zero");
        errorTag.textContent = error;
        errorTag.style.color = "red";
        document.getElementById("number").style.border = "1px solid red";
        document.getElementById("number").style.borderRadius = "5px";
    } else {
        errorTag.textContent = " ";
        document.getElementById("number").style.border = "none";
    }

    numInputToNumber = Number(numInput);
    billInputToNumber = Number(billInput);

    showAmt = (btnText / 100 * billInputToNumber) / numInputToNumber;
    let showRoundedAmt = Math.floor(showAmt * 10**2) / 100; 
    showTotal = (billInputToNumber + (showAmt * numInputToNumber)) / numInputToNumber;
    let showRoundedTotal = Math.round(showTotal * 10**2) / 100;

    tipAmt.style.fontSize = '35px';
    tipTotal.style.fontSize = '35px';
    
    tipAmt.textContent = "$" + showRoundedAmt;
    tipTotal.textContent = "$" + showRoundedTotal;
}

btnReset.addEventListener("click", function(){
    let billInput = document.getElementById("bill").value;
    let numInput = document.getElementById("number").value;

    document.getElementById("bill").value = "";
    document.getElementById("number").value = "";

    let showResetAmt = "0.00";
    let showResetTotal = "0.00";

    tipAmt.textContent = "$0.00";
    tipTotal.textContent = "$0.00";

})

