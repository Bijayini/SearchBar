import {isStringPresentInElement} from "./helper";

describe('isStringPresentInElement', function () {
  it('should return true if string is present', () =>{
    expect(isStringPresentInElement('Bijayini Parhi', 'bi')).toBe(true);
  });

  it('should return false if string is not present', () =>{
    expect(isStringPresentInElement('Bijayini Parhi', 'xyz')).toBe(false);
  });
});
