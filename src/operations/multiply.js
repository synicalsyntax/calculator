module.exports = function () {
  const a = this.randInt(2, 20);
  const b = this.randInt(2, 20);
  const problem = `${a} * ${b}`;
  return {problem, a, b};
};
