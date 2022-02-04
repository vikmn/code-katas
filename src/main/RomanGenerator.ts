export class RomanGenerator {
  of(arabic:number): string {
    let romanNumeral = "";

    const romanFor = (arabicNumber: number, romanValue: string) => {
      for (; arabic >= arabicNumber; arabic -= arabicNumber) {
        romanNumeral += romanValue;
      }
      return romanNumeral
    };

    const romanConstantFor = (arabicNumber: number, romanValue: string) => {
      if (arabic === arabicNumber) {
        romanNumeral += romanValue;
        arabic -= arabicNumber;
      }
      return romanNumeral
    };

    romanNumeral = romanFor(100,"C");

    romanNumeral = romanConstantFor(90,'XC');

    romanNumeral = romanFor(50,"L");

    romanNumeral = romanFor(10,"X");

    romanNumeral = romanConstantFor(9,'IX');

    romanNumeral = romanFor(5,"V");

    romanNumeral = romanConstantFor(4,'IV');

    romanNumeral = romanFor(1,"I");

    return romanNumeral;
  }
  oldof(number: number): string {
    let romanNumeral= 'I';
    if (number === 6){
      return this.of(5)+ this.of(1);
    }
    if (number === 5){
      return 'V';
    }
    if (number === 4){
      return this.of(1)+ this.of(5);
    }

    if (number === 3){
      return this.of(2)+ this.of(1)
    }
    if (number === 2){
      return this.of(1)+this.of(1)
    }
    return romanNumeral;
  }
}
