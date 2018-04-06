// 1 = “I”
// 5 = “V”
// 10 = “X”
// 20 = “XX”
// 3999 = “MMMCMXCIX”

describe("#generate", () => {
  it("returns I given an input of 1");
  it("returns III given an input of 3");
  it("returns IV given an input of 4");
  it("returns V given an input of 5");
  it("returns VIII given an input of 8");
  it("returns IX given an input of 9");
  it("returns X given an input of 10");
  it("returns XXX given an input of 30");
  it("returns XL given an input of 40");
  it("returns L given an input of 50");
  it("returns LXXX given an input of 80");
  it("returns XC given an input of 90");
  it("returns C given an input of 100");
  it("returns CXXX given an input of 130");
  it("returns CXL given an input of 140");
  it("returns CL given an input of 150");
  it("returns CM given an input of 900");
  it("returns M given an input of 1000");
  it("returns MMM given an input of 3000");
  it("returns MMMCMXCIX given an input of 3999");
});
