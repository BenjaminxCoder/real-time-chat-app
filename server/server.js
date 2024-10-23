const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// MongoDB connection
mongoose.connect('your-mongo-db-uri', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));

// Socket.IO connection
io.on('connection', (socket) => {
   console.log('New client connected');

   socket.on('disconnect', () => {
      console.log('Client disconnected');
   });
});

// Basic route
app.get('/', (req, res) => {
   res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));