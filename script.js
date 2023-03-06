const getSwitched = document.getElementById("switch");
const circleSwitched = document.getElementById("switch-circle");
const input = document.getElementById("input");
const progress = document.getElementById("progress");
const prizes = document.getElementsByClassName("p-prize");
const perMonth = document.getElementsByClassName("p-month");
const amount = document.getElementById("amount");
let count = 0;


getSwitched.addEventListener("click", () => {
    if (count % 2 == 0) {
        getSwitched.style.background = "#7AEADF";
        circleSwitched.style.marginLeft = "25px";
        circleSwitched.style.transition = ".4s";
        count += 1;
    } else if (count % 2 == 1) {
        getSwitched.style.background = "";
        circleSwitched.style.marginLeft = "4px";
        circleSwitched.style.transition = ".4s";
        count += 1;
    }
    
})

input.addEventListener("change", () => {
    if(input.value) {
        progress.style.width = `${(50 * input.value) - 10}px`;
    }

    if(input.value == "1") {
        amount.innerText = "10K pageviews";
        prizes[0].innerText = "$8.00";
        prizes[1].innerText = "$8.00";
        perMonth[0].innerText = "";
        console.log(prizes[0]);
    }

})