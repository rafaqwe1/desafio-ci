const calculate = require('./incomeTax')

test("should return the correct income tax value", () => {
  expect(calculate(1900)).toEqual(0)
  expect(calculate(1903.98)).toEqual(0)
  expect(calculate(3700)).toEqual(3700 * 15/100)
  expect(calculate(7900)).toEqual(7900 * 30/100)
})