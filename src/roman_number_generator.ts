class RomanNumberGenerator {
  public static generate(num: number): string {
    if (num <= 0 || num >= 4000) {
      throw new Error("Number must be greater than 0 and less than 4000");
    }

    const humanNumbers: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
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
