require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

module.exports = { port, mongoUrl };