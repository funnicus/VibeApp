const app = require('./server/app');
const http = require('http');
const io = require('socket.io')(8000);

io.on('connnection', socket => {
    socket.emit('chat-message', 'Hello world');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));