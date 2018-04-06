class RomanNumberGenerator {
  public static generate(num: number): string {
    const numeral: string = "I";
    let convertedString: string = "";

    for (let i = 0; i < num; i++) {
      convertedString += numeral;
    }

    return convertedString;
  }
}

export default RomanNumberGenerator;
