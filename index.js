#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');

const stdin = process.openStdin();

const interact = require('./lib/interact');
const parseCommand = require('./lib/parseCommand');

clear();
console.log(chalk.green('CLI STORE READY'));
console.log(chalk.yellow('Use commands SET, GET, DELETE, & COUNT to operate on the key value pairs in your store.'));

stdin.addListener('data', (data) => {
  data = data.toString('utf8');

  if (data.match(/set|get|delete|count/igm)) {
    if (parseCommand.parseData(data)) {
      if (data.match(/set/ig)) interact.set(data);

      if (data.match(/get/ig)) interact.get(data);

      if (data.match(/delete/ig)) interact.delete(data);

      if (data.match(/count/ig)) interact.count(data);
    }
  } else {
    console.log(chalk.red('Please use command SET, GET, DELETE, or COUNT'));
  }
});
