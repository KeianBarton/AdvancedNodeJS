const EventEmitter = require('events');   // import
class Logger extends EventEmitter {}      // extend
const logger = new Logger();              // init
logger.emit('event');                     // emit
logger.on('event', listenerFunc)          // addListener


class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Before executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

withLog.execute(() => console.log('*** Executing task ***'));