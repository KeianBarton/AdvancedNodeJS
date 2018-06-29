//client.js ------------------------------------------
const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', (resp) => {
    process.stdout.write('\u001b[2J\u001b[0;0f');  // clears screen
    process.stdout.write(resp);
    process.stdout.write('\n\> ');
});

let command, args;
// When user hits enter - client will emit input event
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});

// server.js ------------------------------------------
const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;
         // notice the response not initialised yet in listener
        process.nextTick(() => {
            this.emit(
                'response',
                'Type a command (help to list commands)'
            );
        })
        client.on('command', (command, args) => {
            switch (command) {
            case 'help':
            case 'add':
            case 'ls':
            case 'delete':
                this[command](args);
                break;
            default:
                this.emit('response', 'Unknown command...');
            }
        });
    }

    tasksString() {
        return Object.keys(this.task).map(key => {
            return `${key}: ${this.task[key]}`;
        }).join('\n');
    }

    help() {
        this.emit('response', `Available Commands:
        add task
        ls
        delete: id`
        );
    }
    add(args) {
        this.tasks[his.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }
    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }
    delete(args) {
        delete(this.task[args[0]]);
        this.emit('response', `Deleted task ${args[0]}`);
    }
}

module.exports = (client) => new Server(client);