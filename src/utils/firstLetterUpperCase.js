const firstLetterUpperCase = (str) => {
  const firstLetter = str.slice(0, 1).toUpperCase();
  const otherLetters = str.slice(1);
  return `${firstLetter}${otherLetters}`;
};

export default firstLetterUpperCase;
