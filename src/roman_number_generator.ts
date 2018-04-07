class RomanNumberGenerator {
  public static generate(num: number): string {
    return new RomanNumberGenerator(num).generate();
  }

  private num: number;

  private humanNumbers: number[] = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  private numerals: string[] = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",
  ];

  constructor(num: number) {
    this.num = num;
  }

  public generate(): string {
    if (!this.isValid()) {
      throw new Error("Number must be greater than 0 and less than 4000");
    }

    let convertedString: string = "";

    for (let i = 0; i < this.humanNumbers.length; i++) {
      while (this.num >= this.humanNumbers[i]) {
        convertedString += this.numerals[i];
        this.num -= this.humanNumbers[i];
      }
    }

    return convertedString;
  }

  private isValid(): boolean {
    return (this.num > 0 && this.num < 4000);
  }
}

export default RomanNumberGenerator;
