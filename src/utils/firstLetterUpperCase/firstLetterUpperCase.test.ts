import firstLetterUpperCase from "./firstLetterUpperCase";

describe("firstLetterUpperCase utility", () => {
  it("Делает в слове первую букву заглавной", () => {
    expect(firstLetterUpperCase("loh")).toBe("Loh");

    expect(firstLetterUpperCase("3")).toBe("3");

    expect(firstLetterUpperCase("")).toBe("");

    expect(firstLetterUpperCase("a")).toBe("A");

    expect(firstLetterUpperCase(" hello")).toBe(" hello");

    expect(firstLetterUpperCase("HELLO")).toBe("HELLO");

    expect(firstLetterUpperCase("hello world")).toBe("Hello world");
  });
});
