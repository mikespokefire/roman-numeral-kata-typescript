// 1 = “I”
// 5 = “V”
// 10 = “X”
// 20 = “XX”
// 3999 = “MMMCMXCIX”

import RomanNumberGenerator from "./roman_number_generator";

describe("#generate", () => {
  it("returns I given an input of 1", () => {
    const actual = RomanNumberGenerator.generate(1);
    expect(actual).toEqual("I");
  });

  it("returns III given an input of 3", () => {
    const actual = RomanNumberGenerator.generate(3);
    expect(actual).toEqual("III");
  });

  it("returns IV given an input of 4", () => {
    const actual = RomanNumberGenerator.generate(4);
    expect(actual).toEqual("IV");
  });

  it("returns V given an input of 5", () => {
    const actual = RomanNumberGenerator.generate(5);
    expect(actual).toEqual("V");
  });

  it("returns VIII given an input of 8", () => {
    const actual = RomanNumberGenerator.generate(8);
    expect(actual).toEqual("VIII");
  });

  it("returns IX given an input of 9", () => {
    const actual = RomanNumberGenerator.generate(9);
    expect(actual).toEqual("IX");
  });

  it("returns X given an input of 10", () => {
    const actual = RomanNumberGenerator.generate(10);
    expect(actual).toEqual("X");
  });

  it("returns XXX given an input of 30", () => {
    const actual = RomanNumberGenerator.generate(30);
    expect(actual).toEqual("XXX");
  });

  it("returns XL given an input of 40", () => {
    const actual = RomanNumberGenerator.generate(40);
    expect(actual).toEqual("XL");
  });

  it("returns L given an input of 50", () => {
    const actual = RomanNumberGenerator.generate(50);
    expect(actual).toEqual("L");
  });

  it("returns LXXX given an input of 80", () => {
    const actual = RomanNumberGenerator.generate(80);
    expect(actual).toEqual("LXXX");
  });

  it("returns XC given an input of 90", () => {
    const actual = RomanNumberGenerator.generate(90);
    expect(actual).toEqual("XC");
  });

  it("returns C given an input of 100", () => {
    const actual = RomanNumberGenerator.generate(100);
    expect(actual).toEqual("C");
  });

  it("returns CXXX given an input of 130", () => {
    const actual = RomanNumberGenerator.generate(130);
    expect(actual).toEqual("CXXX");
  });

  it("returns CXL given an input of 140", () => {
    const actual = RomanNumberGenerator.generate(140);
    expect(actual).toEqual("CXL");
  });

  it("returns CL given an input of 150", () => {
    const actual = RomanNumberGenerator.generate(150);
    expect(actual).toEqual("CL");
  });

  it("returns CL given an input of 400", () => {
    const actual = RomanNumberGenerator.generate(400);
    expect(actual).toEqual("CD");
  });

  it("returns CL given an input of 500", () => {
    const actual = RomanNumberGenerator.generate(500);
    expect(actual).toEqual("D");
  });

  it("returns CL given an input of 800", () => {
    const actual = RomanNumberGenerator.generate(800);
    expect(actual).toEqual("DCCC");
  });

  it("returns CM given an input of 900", () => {
    const actual = RomanNumberGenerator.generate(900);
    expect(actual).toEqual("CM");
  });

  it("returns M given an input of 1000", () => {
    const actual = RomanNumberGenerator.generate(1000);
    expect(actual).toEqual("M");
  });

  it("returns MMM given an input of 3000", () => {
    const actual = RomanNumberGenerator.generate(3000);
    expect(actual).toEqual("MMM");
  });

  it("returns MMMCMXCIX given an input of 3999", () => {
    const actual = RomanNumberGenerator.generate(3999);
    expect(actual).toEqual("MMMCMXCIX");
  });

  it("throws an error if the number is 0 or below", () => {
    expect(() => {
      RomanNumberGenerator.generate(0);
    }).toThrowError("Number must be greater than 0 and less than 4000");
  });

  it("throws an error if the number is 4000 or above", () => {
    expect(() => {
      RomanNumberGenerator.generate(4000);
    }).toThrowError("Number must be greater than 0 and less than 4000");
  });
});
