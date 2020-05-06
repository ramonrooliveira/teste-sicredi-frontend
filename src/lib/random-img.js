const rand = (base) => {
  return Math.abs(Math.floor((7 - (parseInt(base))) / 7));
};

export default rand;