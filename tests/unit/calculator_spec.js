var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add 1 to 4 and get 5', function() {
    calculator.numberClick('4');
    calculator.operatorClick('+');
    calculator.numberClick('1');;
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(3);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 36);
  })

  it('should be able to chain multiple operations together', function() {
    calculator.numberClick('3');
    calculator.operatorClick('+');
    calculator.numberClick('6');
    calculator.operatorClick('-');
    calculator.numberClick('2');
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 7);
  })

  it('should be able to clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 42;
    calculator.clearClick();
    calculator.numberClick('4');
    calculator.operatorClick('+');
    calculator.numberClick('1');;
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })



});
