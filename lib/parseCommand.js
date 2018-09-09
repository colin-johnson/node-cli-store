const chalk = require('chalk');

module.exports = {
  parseData: (data) => {
    const type = module.exports.getType(data);

    if (module.exports.isUpperCase(data, type)) {
      if (module.exports.hasSpace(data, type)) {
        return true;
      } else {
        console.log(chalk.red('There must be a space after your command.'));
        return false;
      }
    } else {
      console.log(chalk.red('Please capitalize your command'));
      return false;
    }
  },

  hasSpace: (data, type) => {
    const index = data.indexOf(type);
    const isSpace = data.charAt(index + (type.length + 1));
    return (isSpace === ' ');
  },

  isUpperCase: (str, type) => {
    const index = str.indexOf(type);
    const set = str.substring(index, (index + type.length));
    return (set === set.toUpperCase());
  },

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
