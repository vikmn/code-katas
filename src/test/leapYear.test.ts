import {isLeapYear} from "../main/leapYear";

describe.skip("isLeapYear", () => {
  it.each([
    [1, false],
    [2, false],
    [3, false],
    [4, true],
    [100, false]
  ])(`it should convert the year %i to %s`, (year: number, expectedValue: boolean) => {
    const actual = isLeapYear(year);

    expect(actual).toBe(expectedValue)
  });
})
