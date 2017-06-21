const{Command} = require('simple-CQRS')

class ShowMessageCommand extends Command{
    getMessage(){ return this._message; }
    setMessage(value){this._message = value; }
}

module.exports = ShowMessageCommand;