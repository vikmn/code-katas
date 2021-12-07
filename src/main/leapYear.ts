export const isLeapYear = (year: number):boolean => {
  if (year === 1 || year === 2) {
    return false;
  }
  return true;
}
