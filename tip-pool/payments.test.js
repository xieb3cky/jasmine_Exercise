
describe("Payment tests", function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    });
    //test submitPaymentInfo() with input values
    it("should add payment table on submitPaymentInfo()", function () {
        submitPaymentInfo();
        //allPayments object length should be 1 
        expect(Object.keys(allPayments).length).toEqual(1);
        //payment id should be 1
        expect(paymentId).toEqual(1);
        //updates the html(table body)
        expect(paymentTbody.innerText).toEqual("$50\t$5\t10%")
    });
    //test createCurPayment()
    it("should return undefined with empty inputs", function () {
        //test with empty inputs
        billAmtInput.value = "";
        tipAmtInput.value = "";
        createCurPayment();
        expect(createCurPayment()).toBe(undefined);
    })
    //test createCurPayment()
    it("should return undefined with negative inputs", function () {
        //test with negative inputs
        billAmtInput.value = "-100";
        tipAmtInput.value = "";
        createCurPayment();
        expect(createCurPayment()).toBe(undefined);
    })

    //test appendPaymentTable()
    it("should create table row element and pass to appendTd with input value", function () {
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);
        expect(paymentTbody.innerHTML).toBe('<tr id="payment0"><td>$50</td><td>$5</td><td>10%</td></tr>');
    })

    //test updateSummary()
    it("should create table row element of calculated sum of all payments", function () {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerText).toBe('$50');
        expect(summaryTds[1].innerText).toBe('$5');
        expect(summaryTds[2].innerText).toBe('10%');
    })
    afterEach(function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        paymentTbody.innerText = ""
        allPayments = {}
        paymentId = 0;
        summaryTds[0].innerText = "";
        summaryTds[1].innerText = "";
        summaryTds[2].innerText = "";
    })
});

