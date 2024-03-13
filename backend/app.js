const express = require('express');
const app = express();
const mongoose = require('mongoose');
const quoteRoutes = require('./apis/quoteRoutes');
const cors = require('cors');
const seedDB = require('./seed');

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log(err); });

app.use(cors({ origin: (['http://localhost:3000']||['http://localhost:3001'])  }));
app.use(express.urlencoded({ extended: true })); // form data
app.use(express.json()); // json data
app.use(quoteRoutes);  // Using the quoteRoutes

app.get('/hello', (req, res) => {
    res.status(200).json({ msg: "hello from quotesapp" });
});
// seedDB();
const port = 5000;
app.listen(port, () => {
    console.log(`Server connected at port ${port}`);
});
