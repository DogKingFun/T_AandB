const net = require('net');

const client = net.connect('3000', 'a', () => {
    console.log('connected to server');
    client.write('Hello World!');
});

client.on('data', data => {
    console.log('client-> ' + data);
    client.destroy();
});

client.on('close', () => {
    console.log('client-> connection is closed');
});

