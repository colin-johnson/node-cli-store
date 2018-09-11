const chalk = require('chalk');

module.exports = {
  parseData: (data) => {
    const type = module.exports.getType(data);
    const reg = new RegExp(type, 'ig');
    const index = data.search(reg);

    // check if command is first to be typed
    if (module.exports.isFirst(index)) {
      // check if command is all capitalized
      if (module.exports.isUpperCase(data, type, index)) {
        // check if command has space after it
        if (module.exports.hasSpace(data, type, index)) return true;

        console.log(chalk.red('There must be a space after your command.'));
        return false;
      }

      console.log(chalk.red('Please capitalize your command'));
      return false;
    }

    console.log(chalk.red('Please type the command first before anything else.'));
    return false;
  },

  hasSpace: (data, type, index) => {
    const isSpace = data.charAt(index + type.length);

    return (isSpace === ' ');
  },

  isUpperCase: (data, type, index) => {
    const set = data.substring(index, (index + type.length));

    return (set === type.toUpperCase());
  },

  isFirst: index => (index === 0),

  getType: (data) => {
    const index = data.search(/set|get|delete|count/igm);

    switch (data.charAt(index).toLowerCase()) {
      case 's': return 'set';
      case 'g': return 'get';
      case 'd': return 'delete';
      case 'c': return 'count';
    }
  },
};
