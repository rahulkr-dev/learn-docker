const express = require('express');
const path = require('path');
require('dotenv').config({
    path:path.join(__dirname,`.env.${process.env.NODE_ENV.trim()}`)
});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    }   
);

console.log(process.env.PORT);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port ',process.env.PORT || 3000);
    }
);