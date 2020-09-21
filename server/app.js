const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));
app.use(express.static('./client/dist'));

app.listen(8000, () => {
  console.log('server is listening to the port 8000');
})