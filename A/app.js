const net = require('net');

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data + ' from ' + socket.remoteAddress + ':' + socket.remotePort);
        socket.write('server -> Repeating: ' + data);
    });

    socket.on('close', () => {
        console.log('client closed connection');
    });
}).listen(3000);

console.log('listening on port 3000');

/*const dgram = require('dgram');

const PORT_A = 8000;
const HOST_A = 'a';

const PORT_B = 8001;
const HOST_B = 'b';

const socket = dgram.createSocket('udp4');

socket.on('message', (buf, rinfo) => {
    console.log(rinfo.address + ':' + rinfo.port +' - ' + buf);
    socket.send(buf, 0, buf.length, PORT_B, HOST_B, (err, bytes) => {
        if (err) throw err;
    });
});

socket.bind(PORT_A, HOST_A);*/