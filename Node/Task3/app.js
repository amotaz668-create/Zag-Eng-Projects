require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3005;
const cors = require('cors');
const path = require('path');

const usersRoutes = require('./routes/users_routes');
const appError = require('./utils/appError');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/users', usersRoutes);

app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        status: err.statusText || "error",
        message: err.message || "Internal Server Error"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


