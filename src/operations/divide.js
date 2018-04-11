function divide() {
  let a = this.randInt(2, 200);
  let b = this.random(factor(a));
  while (!b) {
    a = this.randInt(2, 200);
    b = this.random(factor(a));
  }
  const problem = `${a} / ${b}`;
  return problem;
}

function factor(number) {
  return Array.from(Array(number), (_, i) => i)
    .slice(2, -1)
    .filter(i => !(number % i));
}

module.exports = divide;
