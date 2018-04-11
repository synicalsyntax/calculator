const colors = require('colors/safe');
const prompt = require('prompt');

const Util = require('../Util/util');

class Game {
  constructor(operations) {
    const operation = Util.random(Array.from(operations.keys()));
    this.question = operations.get(operation).call(Util);
    this.answer = eval(this.question);
  }

  init() {
    console.log('Answer the following question in 15 seconds to win!');
    console.log(colors.cyan(`\tWhat is ${this.question}?`));

    const start = new Date().getTime();
    setTimeout(() => this.cancel(this.answer), 15000);

    prompt.message = '';
    prompt.start();

    const schema = {
      properties: {
        answer: {
          message: 'Wrong answer!',
          type: 'integer',
          required: 'true',
          conform: response => {
            return response === this.answer;
          }
        }
      }
    };

    prompt.get(schema, err => {
      if (err) process.exit();
      const end = new Date().getTime();
      const time = Util.format(start, end);
      console.log(colors.green(`Congratulations! You answered correctly in ${time} seconds!`));
      process.exit();
    });
  }

  cancel(answer) {
    console.log(colors.red(`\nSorry, you lost the game! The correct answer was ${answer}.`));
    process.exit();
  }
}

module.exports = Game;
