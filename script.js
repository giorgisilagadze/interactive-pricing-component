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
        calculate(input.value)
    } else if (count % 2 == 1) {
        getSwitched.style.background = "";
        circleSwitched.style.marginLeft = "4px";
        circleSwitched.style.transition = ".4s";
        count += 1;
        calculate(input.value)
    }
    
})

function draw(pageviews, price, date) {
    amount.innerText = pageviews;
    prizes[0].innerText = price;
    prizes[1].innerText = price;
    perMonth[0].innerText = date;
    perMonth[1].innerText = date; 
}


function calculate(value) {
    if(value) {
        progress.style.width = `${(50 * value) - 10}px`;
    }

    if(value == "1") {
        if(count % 2 == 0) {
            draw("10k pageviews", "$8.00", "/ month");
        } else if (count % 2 == 1){
            draw("10k pageviews", "$72.00", "/ year");
        }       
    } else if(value == "2") {
        if(count % 2 == 0) {
            draw("50k pageviews", "$12.00", "/ month"); 
        } else if (count % 2 == 1){
            draw("50k pageviews", "$108.00", "/ year"); 
        }       
    } else if(value == "3") {
        if(count % 2 == 0) {
            draw("100k pageviews", "$16.00", "/ month"); 
        } else if (count % 2 == 1){
            draw("100k pageviews", "$144.00", "/ year");
        }       
    } else if(value == "4") {
        if(count % 2 == 0) {
            draw("500k pageviews", "$24.00", "/ month");
        } else if (count % 2 == 1){
            draw("500k pageviews", "$216.00", "/ year");
        }       
    } else if(value == "5") {
        if(count % 2 == 0) {
            draw("1M pageviews", "$36.00", "/ month"); 
        } else if (count % 2 == 1){
            draw("1M pageviews", "$324.00", "/ year");
        }       
    }
}

input.addEventListener("change", () => {
    calculate(input.value)
})
