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
}

module.exports = Util;
