const {Event} = require('simple-cqrs');

class MessageDisplayedEvent extends Event{
    get message(){return this._message;}
    set message(value){this._message=value;}
}

module.exports = MessageDisplayedEvent;