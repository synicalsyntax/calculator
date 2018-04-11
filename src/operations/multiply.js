function multiply() {
  const a = this.randInt(2, 20);
  const b = this.randInt(2, 20);
  const problem = `${a} * ${b}`;
  return problem;
}

module.exports = multiply;
