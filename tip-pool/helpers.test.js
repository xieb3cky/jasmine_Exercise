describe("Helpers tests", function () {
    beforeEach(function () {
        billAmtInput = 50;
        tipAmtInput = 5;
        submitPaymentInfo();
    })
    //test sumPaymentTotal();
    it("should sum total tip percent on sumPaymentTotal()", function () {
        expect(sumPaymentTotal('tipPercent')).toBe(10);
    })
    //test calculateTipPercent
    it("should convert bill and tip amount into tip percent on calculateTipPercent()", function () {
        expect(calculateTipPercent(100, 10)).toEqua(10);
    })
    //test appendTd(tr, value)
    it("should create new td and append to tr on appendTd(tr, value)", function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, "value");
        expect(newTr.children.length).toEqual(1);
    })

    //test appendDeleteBtn(tr, value)
    it("should delete td and append tr on appendDeleteBtn(tr, value)", function () {
        let newTr = document.createElement("tr");
        expect(newTr.children.length).toBe(1)
    })

    afterEach(function () {
        billAmtInput = "";
        tipAmtInput = "";
    })
})



