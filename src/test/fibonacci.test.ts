const getFibonacci = (input: number): number => {
  if (input >= 2){
    return getFibonacci(input-1)+getFibonacci(input-2);
  }
  return input;
};

describe.each([
  [0,0],
  [1,1],
  [2,1],
  [3,2],
  [4,3],
  [5,5],
  [6,8],
  [7,13],
  [8,21],
  [9,34],
  [10,55],
  ])('given %p as argument, returns %p', function (input:number, expected) {

  it('should get Fibonacci number', function () {

    expect(getFibonacci(input)).toBe(expected);
  });
});
