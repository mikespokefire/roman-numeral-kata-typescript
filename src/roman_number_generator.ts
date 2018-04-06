class RomanNumberGenerator {
  public static generate(num: number): string {
    const humanNumbers: number[] = [5, 1];
    const numerals: string[] = ["V", "I"];
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
