const cqrs = require('simple-cqrs')
 
const app = cqrs.createApp()
 
//Uses a function as a command handler. There's others way to do that using functions or objects. 
app.useCommandHandler('showMessageCommand', (command) => {
    console.log(`Command ${command.type} handled`)
    app.publish({ type: 'messageDisplayedEvent', message: command.message })
})
 
//Uses a function as a event handler. There's others way to do that using functions or objects. 
app.useEventHandler((event) => {
    console.log(`Message ${event.message} displayed.`)
}, 'messageDisplayedEvent')
 
//Sends a command 
app.send({ type: 'showMessageCommand', message: 'Hello World!' })
 
/* The code above, prints:
* 1. Command showMessageCommand handled
* 2. Message Hello World! displayed.
*/