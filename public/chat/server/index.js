const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const Message = require('./models/Message');

const app = express();
dotenv.config();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado'))
.catch((err) => console.error('❌ Error conectando MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
  console.log('🔌 Usuario conectado');

  socket.on('chat message', async ({ username, message }) => {
    const newMessage = new Message({ username, message });
    await newMessage.save();
    io.emit('chat message', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('❌ Usuario desconectado');
  });
});

server.listen(5002, () => {
    console.log('🚀 Servidor corriendo en puerto 5002');
  });
  
