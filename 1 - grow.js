//1/366
//https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);
  return result;
}

console.log(grow([2, 2, 2, 2, 2, 2]));
