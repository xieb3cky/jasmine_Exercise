
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
// const allPayments = 
// {
//     payment1: {billAmt: '100', tipAmt: '15', tipPercent: 15}, 
//     payment2: {billAmt: '100', tipAmt: '10', tipPercent: 10}
// }
function sumPaymentTotal(type) {
    let total = 0;
    //ex: type = "tipPercent"
    for (let key in allPayments) {
        //keys = payment1, payment2
        let payment = allPayments[key];
        //payment = allPayment[payment1]
        //payment = {billAmt: '100', tipAmt: '15', tipPercent: 15}
        total += Number(payment[type]);
        //payment[type] = payment["tipPercent"]
        //Number(payment["tipPercent"]) = 15
        //total += 15
    }

    return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
    return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
    let newTd = document.createElement('td');
    newTd.innerText = value;

    tr.append(newTd);
}

//create td with value 'x', when clicked it will delete the table row it belongs to
function appendDeleteBtn(tr, value) {
    let newTd = document.createElement("td");
    newTd.innerText = 'X'

    newTd.addEventListener("click", removeParent)
    tr.append(newTd)
}

//add event listener , when click remove parent 'tr' from the dom
function removeParent(event) {
    event.target.parentElement.remove();
}