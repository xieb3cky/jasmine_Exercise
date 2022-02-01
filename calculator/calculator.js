window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    //default values
    let defaultVal = { amount: 2500, years: 5, rate: 1 };
    //get inputs from DOM
    let amountInput = document.getElementById("loan-amount");
    let yearsInput = document.getElementById("loan-years");
    let rateInput = document.getElementById("loan-rate");
    //setting inputs to default values 
    amountInput.value = defaultVal.amount;
    yearsInput.value = defaultVal.years;
    rateInput.value = defaultVal.rate;

    update();

}



function update() {
    // Get the current values from the UI
    const currentValues = getCurrentUIValues();
    // Update the monthly payment
    updateMonthly(calculateMonthlyPayment(currentValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const amount = values.amount;
    const rate = (values.rate / 100) / 12;
    const years = 0 - (values.years * 12);
    const monthlyPayment = (amount * rate) / (1 - (1 + rate) ** (years));
    return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyAmount = document.getElementById("monthly-payment");
    monthlyAmount.innerText = "$" + monthly;
}
