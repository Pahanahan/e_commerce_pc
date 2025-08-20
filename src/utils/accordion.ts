type State = boolean;
type SetState = React.Dispatch<React.SetStateAction<boolean>>;
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
