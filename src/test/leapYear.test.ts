import {isLeapYear} from "../main/leapYear";

describe("isLeapYear", () => {
  it('should output false for 1',  () => {
    const actual = isLeapYear(1);

    expect(actual).toBeFalsy()
  });
})
