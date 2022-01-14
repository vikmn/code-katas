import { isLeapYear } from "../main/leapYear";

describe("isLeapYear", () => {
  it('should return true for a standard leap year', function () {
    expect(isLeapYear(1996)).toBe(true)
  });

  it('should return true for a standard leap year', function () {
    expect(isLeapYear(4)).toBe(true)
  });

  it('should return true for a standard leap year', function () {
    expect(isLeapYear(8)).toBe(true)
  });

  it('should return false for a standard non-leap year', function () {
    expect(isLeapYear(1997)).toBe(false)
  });

  it('should return false for non-standard non-leap year', function () {
    expect(isLeapYear(1900)).toBe(false)
  });

  it('should return false for non-standard non-leap year', function () {
    expect(isLeapYear(100)).toBe(false)
  });

  it('should return true for non-standard leap year', function () {
    expect(isLeapYear(1600)).toBe(true)
  });

  it('should return true for non-standard leap year', function () {
    expect(isLeapYear(400)).toBe(true)
  });
})
