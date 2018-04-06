class RomanNumberGenerator {
  public static generate(num: number): string {
    const humanNumbers: number[] = [1000, 100, 50, 10, 5, 1];
    const numerals: string[] = ["M", "C", "L", "X", "V", "I"];
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
