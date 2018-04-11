function subtract() {
  const a = this.randInt(100, 999);
  const b = this.randInt(50, a - 1);
  const problem = `${a} - ${b}`;
  return problem;
}

module.exports = subtract;
