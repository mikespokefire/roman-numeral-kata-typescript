class RomanNumberGenerator {
  public static generate(num: number): string {
    const humanNumbers: number[] = [1000, 900, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals: string[] = ["M", "CM", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let convertedString: string = "";

    for (let i = 0; i < humanNumbers.length; i++) {
      while (num >= humanNumbers[i]) {
        convertedString += numerals[i];
        num -= humanNumbers[i];
      }
    }

    return convertedString;
  }
}

export default RomanNumberGenerator;
