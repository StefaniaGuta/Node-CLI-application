const yargs = require('yargs');
const contacts = require('./contacts');

const argv = yargs
  .option('action', {
    alias: 'a',
    describe: 'choose action',
    demandOption: true,
    type: 'string'
  })
  .option('id', {
    alias: 'i',
    describe: 'user id',
    type: 'string'
  })
  .option('name', {
    alias: 'n',
    describe: 'user name',
    type: 'string'
  })
  .option('email', {
    alias: 'e',
    describe: 'user email',
    type: 'string'
  })
  .option('phone', {
    alias: 'p',
    describe: 'user phone',
    type: 'string'
  })
  .help()
  .alias('help', 'h')
  .argv;


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts().then(console.table);
      break;

    case 'get':
      contacts.getContactById(id).then(console.log);
      break;

    case 'add':
      contacts.addContact(name, email, phone).then(console.log);
      break;

    case 'remove':
      contacts.removeContact(id).then(console.log);
      break;

    default:
      console.warn('Unknown action type!');
  }
}


invokeAction(argv);


