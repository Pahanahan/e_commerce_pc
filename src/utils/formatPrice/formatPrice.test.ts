import formatPrice from "./formatPrice";

describe("formatPrice", () => {
  it("Форматирует целые числа", () => {
    expect(formatPrice(1)).toBe("1.00");
    expect(formatPrice(0)).toBe("0.00");
    expect(formatPrice(-100)).toBe("-100.00");
  });

  it("Форматирует числа с десятичными знаками", () => {
    expect(formatPrice(1.12345)).toBe("1.12");
    expect(formatPrice(-1.12345)).toBe("-1.12");
  });

  it("Добавляет разделители тысяч", () => {
    expect(formatPrice(1000)).toBe("1,000.00");
    expect(formatPrice(100000)).toBe("100,000.00");
  });
});
