export const isLeapYear = (year: number):boolean => {
  if (year % 4 !== 0) {
    return false;
  }
  return true;
}
