import {RomanGenerator} from "../main/RomanGenerator";

describe('Given a number ', function () {
  it.each([
    [1,'I'],
    [2,'II'],
    [3,'III'],
    [4,'IV'],
    [5,'V'],
    [6,'VI'],
    [7,'VII'],
    [8,'VIII'],
    [9,'IX'],
    [10,'X'],
    [11,'XI'],
    [12,'XII'],
    [13,'XIII'],
    [14,'XIV'],
    [15,'XV'],
    [16,'XVI'],
    [17,'XVII'],
    [18,'XVIII'],
    [19,'XIX'],
    [20,'XX'],
    [50,'L'],
    [90,'XC'],
    [100,'C'],
    [190,'CXC'],
  ])('should return ',  (input:number, output:string)  => {
    let roman = new RomanGenerator();
    expect(roman.of(input)).toEqual(output)
  });

});