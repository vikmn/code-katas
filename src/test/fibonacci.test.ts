const getFibonacci = (input: number): number => {
  if (input === 0 ){
    return 0;
  }
  if (input >= 3){
    return getFibonacci(input-1)+getFibonacci(input-2);
  }
  return 1;
};

describe.each([
  [0,0],
  [1,1],
  [2,1],
  [3,2],
  [4,3],
  [5,5],
  ])('given %p as argument, returns %p', function (input:number, expected) {

  it('should get Fibonacci number', function () {

    expect(getFibonacci(input)).toBe(expected);
  });
});
