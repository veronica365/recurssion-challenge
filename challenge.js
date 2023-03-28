function sum(number) {
  if (number < 1) return 0;
  return number + sum(number - 1);
};
module.exports = sum;

console.log(sum(-4));
console.log(sum(1));
console.log(sum(4));
console.log(sum(10));
