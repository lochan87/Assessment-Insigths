const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());

// Routes
app.use(userRoutes);
app.use(dataRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Connect to DB and start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
