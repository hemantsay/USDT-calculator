document.querySelector(".button").addEventListener("click", function(){
    // console.log("hello");
    const num1 = parseFloat(document.querySelector(".inputamount").value) ;
    const num2 = parseFloat(document.querySelector(".SL").value) ;

    const calculation = num1/(num2/100);

    document.querySelector(".result").textContent = calculation.toFixed(2)+" USDT";
})