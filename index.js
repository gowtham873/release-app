const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h2>Student App deployed via Google Cloud Deploy!</h2>'));;
app.listen(process.env.Port || 8080, () => console.log('App running...'));
