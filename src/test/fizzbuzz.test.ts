import {fizzbuzzify} from "../main/fizzbuzz";

describe('Fizzbuzz', () => {
  it.each([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [4, '4'],
    [5, 'Buzz'],
    [15, 'FizzBuzz'],
    [6, 'Fizz'],
    [10, 'Buzz'],
    [30, 'FizzBuzz']
  ])('fizzbuzzify(%i) => %s', (input, result) => {
    expect(fizzbuzzify(input)).toEqual(result);
  });
})
