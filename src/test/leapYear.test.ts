import {isLeapYear} from "../main/leapYear";

describe("isLeapYear", () => {
  it('should output false for 1', () => {
    const actual = isLeapYear(1);

    expect(actual).toBeFalsy()
  });
  it('should output false for 2', () => {
    const actual = isLeapYear(2);

    expect(actual).toBeFalsy()
  });
  it('should output true for 4', () => {
    const actual = isLeapYear(4);

    expect(actual).toBeTruthy();
  });
})
