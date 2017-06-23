const {EventHandler} = require('simple-cqrs');

module.exports = class MessageDisplayedEventHandler extends EventHandler {
	constructor() {
		super()
		this.register('MessageDisplayedEvent', handler)
	}
	handle(event) {
		console.log(`Event ${event.type} handled`)
		}
}