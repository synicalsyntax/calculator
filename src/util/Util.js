class Util {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  static random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static factor(number) {
    return Array.from(Array(number), (_, i) => i)
      .slice(2, number - 1)
      .filter(i => !(number % i));
  }

  static format(start, end) {
    return Math.round(((end - start) / 1000) * 100) / 100;
  }
}

module.exports = Util;
