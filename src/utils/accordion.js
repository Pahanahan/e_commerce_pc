const accordion = (state, setState, refImg) => {
  const arrowImg = refImg.current;

  setState(!state);

  state
    ? (arrowImg.style.transform = "rotate(180deg)")
    : (arrowImg.style.transform = "rotate(0deg)");
  state;
};

export default accordion;
