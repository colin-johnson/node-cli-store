const chalk = require('chalk');

const store = new Object();

module.exports = {
  set: (data) => {
    data = data.split(' ').filter(a => (a !== 'SET'));
    // console.log(data);
    if (data.length === 0) {
      console.log(chalk.red('Please provide a key value pair.'));
    }

    if (data.length === 1) {
      console.log(chalk.red('Please provide a value for your key.'));
    }

    if (data.length === 2) {
      store[data[0]] = data[1];
      console.log(chalk.green('Key value pair successfully saved.'));
    }

    if (data.length > 2) {
      console.log(chalk.red('Please provide only one key value pair set at a time.'));
    }
  },

  get: (data) => {
    data = data.split(' ').filter(a => (a !== 'GET'));

    if (data.length === 0) {
      console.log(chalk.red('Please provide a key to receive its value.'));
    }

    if (data.length >= 1) {
      let instance = 0;

      data.map((a) => {
        for (const key in store) {
          if (a.replace(/\n/, '') === key) {
            console.log(chalk.green(store[key]));
            instance++;
          }
        }
      });

      if (instance === 0) {
        console.log(chalk.red('There are no values for the provided key'));
      }
    }
  },

  delete: (data) => {
    data = data.split(' ').filter(a => (a !== 'DELETE'));

    if (data.length === 0) {
      console.log(chalk.red('Please provide a key to delete it from the store'));
    }

    if (data.length >= 1) {
      let instance = 0;

      data.map((a) => {
        for (const key in store) {
          if (a.replace(/\n/, '') === key) {
            delete store[key];
            console.log(chalk.green('Key value pair deleted'));
            instance++;
          }
        }
      });

      if (instance === 0) {
        console.log(chalk.red('There are no values for the provided key'));
      }
    }
  },

  count: (data) => {
    data = data.split(' ').filter(a => (a !== 'COUNT'));

    if (data.length === 0) {
      console.log(chalk.red('Please provide a key to count its instances'));
    }

    if (data.length >= 1) {
      data.map((a) => {
        let instance = 0;

        for (const key in store) {
          if (a === store[key]) instance++;
        }

        console.log((instance === 0) ? chalk.red('0') : chalk.green(instance));
      });
    }
  },
};
