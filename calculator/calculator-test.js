
it('should calculate the monthly rate correctly', function () {
    let values = { amount: 2500, years: 5, rate: 1 }
    expect(calculateMonthlyPayment(values)).toEqual('42.73')
});


it("should return a result with 2 decimal places", function () {
    let values = { amount: 12500, years: 10, rate: 2 }
    expect(calculateMonthlyPayment(values)).toEqual('115.02')
});

  /// etc
