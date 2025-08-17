const parseRange = (str: any): [number, number] => {
  if (!str) {
    return [0, Infinity];
  } else {
    const min = Number(str.split(" ")[0].slice(1));

    let max =
      min === 0
        ? 500
        : min === 500
        ? 1000
        : min === 1000
        ? 2000
        : min === 2000
        ? 3000
        : min === 3000
        ? 4000
        : min === 4000
        ? 5000
        : min === 5000
        ? 6000
        : min === 6000
        ? 7000
        : Infinity;

    return [min, max];
  }
};

export default parseRange;
