module.exports = function () {
  let a = this.randInt(2, 200);
  let b = this.random(this.factor(a));
  while (!b) {
    a = this.randInt(2, 200);
    b = this.random(this.factor(a));
  }
  const problem = `${a} / ${b}`;
  return {problem, a, b};
};
