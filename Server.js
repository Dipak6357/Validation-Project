
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');

const app = express();
connectDB();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

// Define other routes here
// app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
