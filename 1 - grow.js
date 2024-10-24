function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);
  return result;
}

console.log(grow([2, 2, 2, 2, 2, 2]));
