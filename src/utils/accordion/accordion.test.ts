import accordion from "./accordion";

describe("accordion utility", () => {
  it("Меняет состояние на противоположное", () => {
    let state = false;
    const setState = (newState: boolean) => {
      state = newState;
    };

    const mockRef = { current: document.createElement("img") };

    accordion(state, setState, mockRef);

    expect(state).toBe(true);
    expect(mockRef.current.style.transform).toBe("rotate(0deg)");

    accordion(state, setState, mockRef);

    expect(state).toBe(false);
    expect(mockRef.current.style.transform).toBe("rotate(180deg)");
  });
});
