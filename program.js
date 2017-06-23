const cqrs = require('simple-CQRS')
const {CommandDispatcher} = require('simple-CQRS')
const {EventDispatcher} = require('simple-CQRS')
const ShowMessageCommand = require('./Commands/ShowMessageCommand');
const MessageDisplayedEvent = require('./Events/MessageDisplayedEvent');
const eventHandler = require('./Handler/MessageDisplayedEventHandler');

var dispatcher = new CommandDispatcher();
var eDispatcher = new EventDispatcher();

var command = new ShowMessageCommand();

dispatcher.register('ShowMessageCommand', (command) => {
    console.log(command);
});

eDispatcher.register(eventHandler, 'MessageDisplayedEvent');

command.setMessage("test");