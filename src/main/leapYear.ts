function isDivisible(year: number, divisor: number) {
  return year % divisor === 0;
}

export const isLeapYear = (year: number): boolean => {
  if (isDivisible(year, 400)) {
    return true
  }

  if (isDivisible(year, 100)) {
    return false
  }

  return isDivisible(year, 4)
}
