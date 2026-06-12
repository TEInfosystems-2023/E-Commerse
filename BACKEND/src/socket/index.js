const { Server } = require('socket.io');

let io;

exports.initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('message', (payload) => {
      console.log('Received message:', payload);
      io.emit('message', payload);
    });

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

exports.getIo = () => io;
