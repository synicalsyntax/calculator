const fs = require('fs');
const Game = require(`${__dirname}/structures/Game.js`);
const operations = new Map();

fs.readdir(`${__dirname}/operations`, (err, files) => {
  if (err) throw new Error(err);
  for (const file of files) {
    const data = require(`${__dirname}/operations/${file}`);
    operations.set(file, data);
  }

  const game = new Game(operations);
  game.init();
});
