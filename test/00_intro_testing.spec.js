/**
* Introduction to testing framework (Mocha)
**/
var expect = require('chai').expect;


xdescribe('Introductio to Mocha and WallabyJS', function() {

  // You can disable test by adding an 'x' in front of the runner
  it('Disable this test', function(){
    var disabled = false;
    expect(disabled).toBeTruthy();
  });

  // We shall contemplate truth by testing reality, via spec expectations.
  xit('should expect true', function() {
    expect(false).toBeTruthy();
  });

  xit('List all the falsy values in JavaScript', function() {
    expect('').toBeFalsy();
  });

  // Expected value versus actual value
  xit('should expect equality', function() {
    var expectedValue = ___;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  xit('should assert equality a better way', function() {
    var expectedValue = ___;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  xit('should assert equality with ===', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });
});
