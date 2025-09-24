type State = boolean;
type SetState = (value: boolean) => void;
type RefImg = React.RefObject<HTMLImageElement | null>;

const accordion = (state: State, setState: SetState, refImg: RefImg) => {
  const arrowImg = refImg.current;

  setState(!state);

  if (arrowImg) {
    state
      ? (arrowImg.style.transform = "rotate(180deg)")
      : (arrowImg.style.transform = "rotate(0deg)");
    state;
  }
};

export default accordion;
