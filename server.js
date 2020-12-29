const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.hwehr.mongodb.net/rock-yourself-minerals-jewelry-shop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the "Rock Yourself - Mineral Jewelry Shop" database'); 
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

const mineralsRoutes = require('./routes/minerals.routes');
const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');

app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.use('/api', mineralsRoutes); 
app.use('/api', productsRoutes); 
app.use('/api', ordersRoutes); 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '/client/build/index.html')); 
});
app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

module.exports = server;