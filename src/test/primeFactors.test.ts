function primeNumber(input: number) {
  let output = [];
  if(input >=2  && input <= 3)
  {
    output.push(input)
  }
  if (input == 4){
    if(input % 2 === 0)
    primeNumber(2)
    primeNumber(2)
  }
  if(input === 5){
    output.push(5)
  }
  return output;
}

describe('Prime numbers', function () {
  describe('given a prime number 1', function () {
    it('should return an empty output', function () {

      expect(primeNumber(1)).toEqual([])
    });
  });
  describe('given a prime number 2', function () {
    it('should return an prime number 2', function () {

      expect(primeNumber(2)).toEqual([2])
    });
  });

  describe('given a prime number 3', function () {
    it('should return an prime number 3', function () {

      expect(primeNumber(3)).toEqual([3])
    });
  });
  describe('given a prime number 5', function () {
    it('should return an prime number 5', function () {

      expect(primeNumber(5)).toEqual([5])
    });
  });
  describe('given a prime number 4', function () {
    it('should return an prime number [2,2]', function () {

      expect(primeNumber(4)).toEqual([2,2])
    });
  });
});
