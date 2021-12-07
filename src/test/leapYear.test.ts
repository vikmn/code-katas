import {isLeapYear} from "../main/leapYear";

describe("isLeapYear", () => {
  it.each([
    [1, false],
    [2, false],
    [3, false],
    [4, true],
  ])(`it should convert the year %i to %s`, (year: number, expectedValue: boolean) => {
    const actual = isLeapYear(year);

    expect(actual).toBe(expectedValue)
  });
})
