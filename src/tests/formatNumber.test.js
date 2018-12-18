import formatNumber from "../util/formatNumber";

describe("formatNumber should work", () => {
  it("Should format a number given a valid number", () => {
    const number = 4200;
    const result = formatNumber(number);
    expect(result).toBe("4,200.00");
  });

  it("Should format a number given a valid number with decimals", () => {
    const number = 4200.82;
    const result = formatNumber(number);
    expect(result).toBe("4,200.82");
  });

  it("Should format 0", () => {
    const number = 0;
    const result = formatNumber(number);
    expect(result).toBe("0.00");
  });

  it("Should format very small numbers", () => {
    const number = 1;
    const result = formatNumber(number);
    expect(result).toBe("1.00");
  });

  it("Should format very large numbers", () => {
    const number = 10000000;
    const result = formatNumber(number);
    expect(result).toBe("10,000,000.00");
  });

  it("Should ignore more than two digits after decimal", () => {
    const number = Math.PI;
    const result = formatNumber(number);
    expect(result).toBe("3.14");
  });

  it("Should format negative decimal numbers", () => {
    const number = -Math.PI;
    const result = formatNumber(number);
    expect(result).toBe("-3.14");
  });

  it("Should format large negative numbers", () => {
    const number = -10000000;
    const result = formatNumber(number);
    expect(result).toBe("-10,000,000.00");
  });

  it("Should format small negative numbers", () => {
    const number = -11;
    const result = formatNumber(number);
    expect(result).toBe("-11.00");
  });
});
